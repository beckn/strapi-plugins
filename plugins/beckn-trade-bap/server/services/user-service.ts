import { Strapi } from "@strapi/strapi";
import axios from "axios";
// import { ValidationError } from "yup";
const { ValidationError } = require('@strapi/utils').errors;
import {
  DHIWAY_BECKN_TRADE_BAP_CONSUMER_SCHEMA,
  DHIWAY_BECKN_TRADE_BAP_DER_SCHEMA
} from "../constant";
export default ({ strapi }: { strapi: Strapi }) => ({
  async login(credential: { email: string; password: string }) {
    try {
      const { email, password } = credential;

      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            email: { $eqi: email },
            role: {
              $or: [
                { name: { $eqi: "Consumer" } },
                { name: { $eqi: "Admin" } }
              ]
            }
          },
          populate: ["role"],
        });
      const profile = await strapi.entityService.findMany(
        "api::profile.profile",
        {
          filters: {
            user: user.id
          }
        }
      );
      console.log("User info::: ", user);
      if (!user) {
        throw new Error("Email Not found");
      }

      // Request Strapi Native Auth API.
      console.log("password", password);
      const response = await axios.post(
        `${process.env.STRAPI_URL}/api/auth/local`,
        {
          identifier: email,
          password
        }
      );

      delete user.password;
      return { ...response?.data, user, profile: profile?.[0] || {} };
    } catch (error) {
      console.log("Error Occured:: ", error);
      if (error.message === "Email Not found") {
        throw error;
      }
      throw new Error("Wrong Password");
    }
  },
  async getCustomerMDM({
    phone_no,
    utility
  }: {
    phone_no: string;
    utility: string;
  }) {
    return axios.post(`${process.env.MDM_URL}/getCustomer`, {
      phone_no,
      utility_name: utility,
      role: "CONSUMER"
    });
  },
  async createUser({
    email,
    fullname,
    password
  }: {
    email: string;
    fullname: string;
    password: string;
  }) {
    try {
      const existingUser = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        {
          filters: {
            email,
            role: { name: { $eq: "Consumer" } }
          }
        }
      );
      if (existingUser && existingUser.length) {
        throw new Error("User Already Exist");
      }
      const role = await strapi.entityService.findMany("plugin::users-permissions.role", {
        filters: { name: "Consumer" },
      });
      if (!role.length) {
        throw new Error("Role not found");
      }
      const roleId = role[0].id;
      const newUserCreated = await strapi.entityService.create(
        "plugin::users-permissions.user",
        {
          data: {
            email,
            username: email,
            password,
            name: fullname,
            confirmed: true,
            blocked: false,
            role: roleId,
            provider: "local"
          }
        }
      );
      return newUserCreated;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async createUserProfile({
    fullname,
    phone_no,
    email,
    utility,
    userId,
    customer_id,
    address
  }: {
    fullname: string;
    phone_no: string;
    email: string;
    utility: string;
    userId: number;
    customer_id: string;
    address: string;
  }) {
    try {
      let newUserProfile = {};
      await strapi.db.transaction(async ({ trx }) => {
        try {
          // const credentialVcService = strapi
          //   .plugin("beckn-trade-bap")
          //   .service("credentialVcService");
          // const consumerVc = await credentialVcService.issueCertificate(
          //   DHIWAY_BECKN_TRADE_BAP_CONSUMER_SCHEMA,
          //   {
          //     name: fullname,
          //     email,
          //     utility
          //   }
          // );
          // const newCredential = await strapi.entityService.create(
          //   "api::credential.credential",
          //   {
          //     data: {
          //       vc: consumerVc,
          //       publishedAt: new Date()
          //     }
          //   }
          // );
          newUserProfile = await strapi.entityService.create(
            "api::profile.profile",
            {
              data: {
                name: fullname,
                phone: phone_no,
                user: userId,
                //credentials: [newCredential.id],
                utility_name: utility,
                customer_id,
                address,
                publishedAt: new Date()
              }
            }
          );

          trx.commit();
        } catch (error: any) {
          console.log(error);
          trx.rollback();
          if (error instanceof ValidationError) {
            throw new Error(JSON.stringify((error.details as any).errors));
          }
          throw new Error(error.message);
        }
        return newUserProfile;
      });
      return newUserProfile;
    } catch (error: any) {
      await strapi.entityService.delete(
        "plugin::users-permissions.user",
        userId
      );
      throw new Error(error.message);
    }
  },
  async createDER({
    category,
    type,
    proofs,
    user
  }: {
    category: string;
    type: "CONSUMER" | "PROSUMER";
    proofs: any[];
    user: {
      id: number;
      username: string;
      email: string;
      provider: string;
      resetPasswordToken: string | null;
      confirmationToken: string | null;
      confirmed: boolean;
      blocked: boolean;
      createdAt: string;
      updatedAt: string;
      name: string;
    };
  }) {
    try {
      let newDer = {};
      await strapi.db.transaction(async ({ trx }) => {
        try {
          const credentialVcService = strapi
            .plugin("beckn-trade-bap")
            .service("credentialVcService");
          const profile = await strapi.entityService.findMany(
            "api::profile.profile",
            {
              filters: {
                user: user.id
              }
            }
          );
          if (!profile) {
            throw new Error("No Profile Found");
          }
          const derVC = await credentialVcService.issueCertificate(
            DHIWAY_BECKN_TRADE_BAP_DER_SCHEMA,
            {
              name: user.name,
              email: user.email,
              category: category,
              file_hash: proofs[0]?.hash || ""
            }
          );
          const newCredential = await strapi.entityService.create(
            "api::credential.credential",
            {
              data: {
                vc: derVC,
                publishedAt: new Date()
              }
            }
          );

          newDer = await strapi.entityService.create(
            "api::distributed-supply-network-member.distributed-supply-network-member",
            {
              data: {
                type,
                profile: profile[0].id,
                credential: newCredential,
                proofs,
                publishedAt: new Date(),
                category
              }
            }
          );

          trx.commit();
        } catch (error: any) {
          console.log(error);
          trx.rollback();
          throw new Error(error.message);
        }
        newDer = { der: { ...newDer }, message: "New DER Created" };
      });
      return newDer;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async getDER(userId: number) {
    try {
      const profile = await strapi.entityService.findMany(
        "api::profile.profile",
        {
          filters: {
            user: userId
          }
        }
      );
      if (profile && profile.length) {
        const ders = await strapi.entityService.findMany(
          "api::distributed-supply-network-member.distributed-supply-network-member",
          {
            filters: {
              profile: profile[0].id
            },
            populate: {
              proofs: true
            }
          }
        );
        return ders;
      }
      throw new Error("No Profile Found");
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async uploadUserCredential(userId: number, vc: any) {
    try {
      const profile = await strapi.entityService.findMany(
        "api::profile.profile",
        {
          filters: {
            user: userId
          },
          populate: {
            credentials: true
          }
        }
      );
      if (profile && profile.length) {
        const credentialVcService = strapi
          .plugin("beckn-trade-bap")
          .service("credentialVcService");

        // NOTE: Commenting the verify certificates since DHIWAY api is down, uncomment it later

        // const verifyResp = await credentialVcService.verifyCertificate(vc);
        // if (!verifyResp.isVerified) {
        //   throw new Error("Uploaded Credential is Invalid");
        // }
        let updatedProfile: any = profile[0];
        await strapi.db.transaction(async ({ trx }) => {
          try {
            const newCredential = await strapi.entityService.create(
              "api::credential.credential",
              {
                data: {
                  vc,
                  publishedAt: new Date()
                }
              }
            );
            const updateProfileResp = await strapi.entityService.update(
              "api::profile.profile",
              profile[0].id,
              {
                data: {
                  credentials: [...profile[0].credentials, newCredential.id]
                }
              }
            );
            updatedProfile = updateProfileResp;
            trx.commit();
          } catch (error: any) {
            console.log(error);
            trx.rollback();
            throw new Error(error.message);
          }
          return updatedProfile;
        });
        return updatedProfile;
      }
      throw new Error("No Profile Found");
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async getUserCreds(userId: number) {
    try {
      const profile = await strapi.entityService.findMany(
        "api::profile.profile",
        {
          filters: {
            user: userId
          },
          populate: {
            credentials: true
          }
        }
      );
      if (profile && profile.length) {
        let creds = profile[0].credentials;
        creds = creds.map((cred) => {
          const cred_id = cred.id;
          return {
            cred_id,
            type: "USER_CREDENTIAL",
            credential: cred?.vc
          };
        });
        return creds;
      }
      throw new Error("No Profile Found");
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async deleteDer(userId: number, derId: number) {
    try {
      const profile = await strapi.entityService.findMany(
        "api::profile.profile",
        {
          filters: {
            user: userId,
            distributed_supply_network_members: derId
          },
          populate: {
            credentials: true,
            distributed_supply_network_members: true
          }
        }
      );

      if (profile && profile.length) {
        return {
          der: await strapi.entityService.delete(
            "api::distributed-supply-network-member.distributed-supply-network-member",
            derId
          ),
          message: "Requested DER deleted Successfully"
        };
      }
      throw new Error("No Profile Found");
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async getDashboardData(userId: number, startDate: string, endDate: string) {
    try {
      const profile = await strapi.entityService.findMany(
        "api::profile.profile",
        {
          filters: {
            user: userId
          }
        }
      );

      if (profile && profile.length) {
        const dashboardData = await axios.post(
          `${process.env.MDM_URL}/getStatistics`,
          {
            customerId: profile[0].customer_id,
            startDate,
            endDate
          }
        );
        return dashboardData.data;
      }
      throw new Error("No Profile Found");
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async getUserProfile(userId: number, email: string) {
    try {
      let profile = await strapi.entityService.findMany(
        "api::profile.profile",
        {
          filters: {
            user: userId
          }
        }
      );
      if (profile && profile.length) {
        profile = profile[0];
        return {
          fullname: profile.name,
          address: profile.address,
          customer_id: profile.customer_id,
          phone_number: profile.phone,
          email,
          utility_name: profile.utility_name
        }
      }
      throw new Error("No Profile Found");
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async updateUserProfile({ fullname, address },userId: number) {
    try {
      let profile = await strapi.entityService.findMany(
        "api::profile.profile",
        {
          filters: {
            user: { id: userId }
          }
        }
      );
      if (profile && profile.length) {
        profile = profile[0];
        const updatedProfile = await strapi.entityService.update(
          "api::profile.profile",
          profile.id,
          {
            data: {
              ...(fullname && { name: fullname }),
              ...(address && { address }), 
              publishedAt: new Date()
            }
          }
        );
        console.log('Updated Profile: ', updatedProfile);
        return {
          fullname,
          address
        }
      }
      throw new Error("No Profile Found");     
    } catch (error: any) {
      console.log('Failed to update user profile: ', error.message);
      throw new Error(error.message);
    }
  },
  async deleteCredById(userId: number, credId: number) {
    try {
      if (!credId) {
        throw new Error("Der Id not provided to delete");
      }
      const profile = await strapi.entityService.findMany(
        "api::profile.profile",
        {
          filters: {
            user: userId,
            credentials: {
              id: credId
            }
          },
          populate: {
            credentials: true,
          }
        }
      );

      if (profile && profile.length) {
        return {
          cred: await strapi.entityService.delete(
            "api::credential.credential",
            credId
          ),
          message: "Requested CRED deleted Successfully"
        };
      }
      throw new Error("No Profile Found");
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
});
