import { Strapi } from "@strapi/strapi";
import axios from "axios";

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
            agent: {
              populate: {
                agent_profile: true
              }
            },
            provider: true,
            role: true
          }
        });
      if (!user) {
        throw new Error("Email Not found");
      }
      if (user?.role?.name === "Admin") {
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
  async mobileLogin(loginDto: any) {
    try {
      const { phone } = loginDto;
      const user = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        {
          filters: {
            agent: {
              agent_profile: {
                phone_number: phone
              }
            }
          },
          populate: {
            agent: {
              populate: {
                agent_profile: true
              }
            },
            provider: true,
            role: true,
            deg_wallet: {
              provider: true
            }
          }
        }
      );
      // console.log(JSON.stringify(user));
      if (!user || !user.length) {
        throw new Error("User Not found with Given Mobile Number");
      }
      if (user[0]?.role?.name === "Admin") {
        throw new Error("Email Not found");
      }
      // Request API.

      const token = strapi.plugins["users-permissions"].services.jwt.issue({
        userId: user[0].id
      });
      delete user[0].password;

      return { jwt: token, user: user[0] };
    } catch (error) {
      console.log("Error Occured:: ", error.message);
      if (error.message === "Email Not found") {
        throw error;
      }
      throw new Error("Wrong Password");
    }
  }
});
