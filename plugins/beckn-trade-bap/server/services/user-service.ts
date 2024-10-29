import { Strapi } from "@strapi/strapi";
import axios from "axios";
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
          where: { email: { $eqi: email } }
        });
      console.log("User info::: ", user);
      if (!user) {
        throw new Error("Email Not found");
      }

      // Request Strapi Native Auth API.
      console.log("password", password);
      const response = await axios.post(
        `${process.env.STRAPI_BAP_URL}/api/auth/local`,
        {
          identifier: email,
          password
        }
      );

      delete user.password;
      return { ...response.data, user };
    } catch (error) {
      console.log("Error Occured:: ", error.response.data);
      if (error.message === "Email Not found") {
        throw error;
      }
      throw new Error("Wrong Password");
    }
  },
  async getCustomerMDM({
    phone_number,
    utility
  }: {
    phone_number: string;
    utility: string;
  }) {
    return axios.post(`${process.env.BECKN_MDM_URL}/beckn-mdm/getCustomer`, {
      phone_no: phone_number,
      utility_name: utility
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
            email
          }
        }
      );
      if (existingUser && existingUser.length) {
        throw new Error("User Already Exist");
      }
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
            role: 1,
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
    phone_number,
    email,
    utility,
    userId,
    customer_id
  }: {
    fullname: string;
    phone_number: string;
    email: string;
    utility: string;
    userId: number;
    customer_id: string;
  }) {
    try {
      let newUserProfile = {};
      await strapi.db.transaction(async ({ trx }) => {
        try {
          const credentialVcService = strapi
            .plugin("beckn-trade-bap")
            .service("credentialVcService");
          const consumerVc = await credentialVcService.issueCertificate(
            DHIWAY_BECKN_TRADE_BAP_CONSUMER_SCHEMA,
            {
              name: fullname,
              email,
              utility
            }
          );
          const newCredential = await strapi.entityService.create(
            "api::credential.credential",
            {
              data: {
                credential: consumerVc,
                publishedAt: new Date()
              }
            }
          );
          newUserProfile = await strapi.entityService.create(
            "api::profile.profile",
            {
              data: {
                name: fullname,
                phone: phone_number,
                user: userId,
                credentials: [newCredential.id],
                utility_name: utility,
                customer_id,
                publishedAt: new Date()
              }
            }
          );

          trx.commit();
        } catch (error: any) {
          trx.rollback();
          throw new Error(error.message);
        }
        return newUserProfile;
      });
      return newUserProfile;
    } catch (error: any) {
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
              category: category
            }
          );
          const newCredential = await strapi.entityService.create(
            "api::credential.credential",
            {
              data: {
                credential: derVC,
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
        return newDer;
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
        const verifyResp = await credentialVcService.verifyCertificate(vc);
        if (!verifyResp.isVerified) {
          throw new Error("Uploaded Credential is Invalid");
        }
        let updatedProfile: any = profile[0];
        await strapi.db.transaction(async ({ trx }) => {
          try {
            const newCredential = await strapi.entityService.create(
              "api::credential.credential",
              {
                data: {
                  credential: vc,
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
        return profile[0];
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
        return await strapi.entityService.delete(
          "api::distributed-supply-network-member.distributed-supply-network-member",
          derId
        );
      }
      throw new Error("No Profile Found");
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async getDashboardData(userId: number) {
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
          `${process.env.BECKN_MDM_URL}/beckn-mdm/getStatistics`,
          {
            customerId: profile[0].customer_id
          }
        );
        return dashboardData.data;
      }
      throw new Error("No Profile Found");
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
});