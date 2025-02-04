import { Strapi } from "@strapi/strapi";
const fs = require("fs").promises;
import axios from "axios";
const bcrypt = require('bcryptjs');

export default ({ strapi }: { strapi: Strapi }) => ({
  async login(loginDto: any) {
    try {
      const { email, password } = loginDto;
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            email: { $eqi: email }
          },
          populate: {
            agent: true,
            provider: true,
            role: true
          }
        });
      if (!user) {
        throw new Error("Email Not found");
      }
      if (user?.role?.name === 'Admin') {
        throw new Error("Email Not found");
      }
      // Request API.
      const response = await axios.post(
        `${process.env.STRAPI_URL}/api/auth/local`,
        {
          identifier: email,
          password
        }
      );
      delete user.password;
      return { ...response.data, user };
    } catch (error) {
      console.log("Error Occured:: ", error.message);
      if (error.message === "Email Not found") {
        throw error;
      }
      throw new Error("Wrong Password");
    }
  },
  async signup(signupDto: any) {
    try {
      let result = {};
      await strapi.db.transaction(async ({ trx }) => {
        try {
          const { phone_no, utility_name } = signupDto;
          let mdmUser: any = {};
          try {
            const mdm = await axios.post(`${process.env.MDM_URL}/getCustomer`, {
              phone_no,
              utility_name
            });
            mdmUser = mdm?.data?.data;
            console.log("MDM User", mdmUser);
            if (!mdmUser || !mdmUser?.customer_id) {
              throw new Error("No MDM user found");
            }
          } catch (error) {
            throw new Error(
              error?.response?.data?.error?.message || "No MDM user found"
            );
          }
          const {
            email,
            password,
            first_name,
            last_name,
            fullname,
            address,
            phone_no: phone_number
          } = signupDto;
          if (!fullname && !first_name) {
            throw new Error("Name not provided for signup");
          }
          const users = await strapi.entityService.findMany(
            "plugin::users-permissions.user",
            {
              filters: {
                $or: [
                  {
                    email: { $eqi: email } , // Filter by email
                  },
                  {
                    agent: {
                      agent_profile: { phone_number: { $eq: phone_number } }
                    }
                  }
                ]
              }
            }
          );
          console.log("Users", users);

          if (users && users.length) {
            throw new Error("Email or Phone already taken");
          }
          const agentProfile = await strapi.entityService.create(
            "api::agent-profile.agent-profile",
            {
              data: {
                phone_number,
                customer_id: mdmUser.customer_id,
                address,
                utility_name,
                cred_required: false,
                trusted_source: false,
                publishedAt: new Date()
              }
            }
          );
          console.log("Created agent profile: ", agentProfile);
          const agent = await strapi.entityService.create("api::agent.agent", {
            data: {
              first_name: fullname,
              agent_profile: agentProfile.id,
              publishedAt: new Date()
            }
          });
          console.log("Created agent : ", agent);

          const createdUser = await strapi.entityService.create(
            "plugin::users-permissions.user",
            {
              data: {
                email,
                password,
                username: email,
                confirmed: true,
                agent: agent.id,
                provider: "local",
                publishedAt: new Date()
              }
            }
          );
          const jwt = await strapi.plugins[
            "users-permissions"
          ].services.jwt.issue({
            id: createdUser.id
          });
          console.log("Created user: ", createdUser);
          //Issue Credential using Dhiway SDK
          // const vc = await this.generateCredential({
          //   email,
          //   first_name,
          //   last_name
          // });
          // //store the credential and update it in agent profile
          // const cred = await strapi.entityService.create(
          //   "api::credential.credential",
          //   {
          //     data: {
          //       vc,
          //       publishedAt: new Date()
          //     }
          //   }
          // );
          //update the agent profile table
          // const agentProfileUpdated = await strapi.entityService.update(
          //   "api::agent-profile.agent-profile",
          //   agentProfile.id,
          //   {
          //     data: {
          //       credentials: [cred.id],
          //       publishedAt: new Date()
          //     }
          //   }
          // );
          delete createdUser.password;
          //add catalogues
          const { providerData } = signupDto;
          // if (providerData && Object.keys(providerData).length > 0) {
          //   providerData.agents = [agent.id];
          //   await this.createCatalogue(providerData, agent.id);
          // }
          await trx.commit();
          return (result = { jwt, user: createdUser });
        } catch (error) {
          await trx.rollback();
          throw error;
        }
      });
      return result;
    } catch (error) {
      console.log("Error Occured while signup", error.message);
      if (error.message === "Email Not found") {
        throw error;
      }
      throw new Error(error.message);
    }
  },
  async verifyOtp(userId: number, otp: number) {
    try {

      if(!(Number.isInteger(otp) && otp >= 100000 && otp <= 999999)) {
        throw new Error('Invalid otp provided');
      }
      //update user
      const updatedUser = await strapi.entityService.update(
        "plugin::users-permissions.user",
        userId,
        {
          data: {
            isOtpVerified: true,
            publishedAt: new Date()
          }
        }
      );
      return {
        message: "Otp Verified Successfully"
      }
    } catch (error) {
      console.log('Verify otp Error: ', error.message);
      throw error;
    }
  },
});
