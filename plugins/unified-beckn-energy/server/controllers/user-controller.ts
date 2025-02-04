import { Strapi } from "@strapi/strapi";
import { getRegistryRecords } from "../utils/dhiway-utils";
export default ({ strapi }: { strapi: Strapi }) => ({
  
  async getCredential(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const userId = ctx.state.user.id;
      const result = await userService.getCredential(Number(userId));
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async createDer(ctx) {
    try {
      const { files, body } = ctx.request;
      console.log(files.proof);
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const result = await userService.createDer(
        body,
        files.proof,
        ctx.state.user
      );
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getDer(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const agentProfileId = ctx?.state?.user?.agent?.agent_profile?.id;

      const result = await userService.getDer({ agentProfileId });
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async addProfile(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const agentId = ctx.state.user.agent.id;
      const result = await userService.createCatalogue(
        ctx.request.body,
        agentId
      );
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getDashboard(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const customerId = ctx.state.user.agent?.agent_profile.customer_id;
      const { startDate, endDate } = ctx.query;
      const result = await userService.getDashboard(customerId, startDate, endDate);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async deleteDerById(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const derId = ctx.params.id;
      console.log("DER ID: ", derId);
      const agentProfileId = ctx?.state?.user?.agent?.agent_profile?.id;
      const result = await userService.deleteDerById(agentProfileId, derId);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async uploadUserCred(ctx) {
    try {
      const { files, body } = ctx.request;
      if (!files || !files.credential) {
        return ctx.badRequest("No JSON file provided");
      }
      
      if (ctx.request.files.credential.type != "application/json") {
        throw new Error("Invalid file format uploaded, only json file allowed!");
      }

      const jsonFile = files.credential;
      console.log(": ", jsonFile);
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const result = await userService.uploadUserCredential(
        jsonFile,
        ctx.state.user
      );
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getUserProfile(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const user = ctx.state.user;
      const result = await userService.getUserProfile(user);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async updateUserProfile(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const { fullname, address } = ctx.request.body
      const user = ctx.state.user;
      const result = await userService.updateUserProfile({fullname, address}, user);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async deleteCredById(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const credId = ctx.params.id;
      console.log("CRED ID: ", credId);
      const agentProfileId = ctx?.state?.user?.agent?.agent_profile?.id;
      const result = await userService.deleteCredById(agentProfileId, credId);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  //utilites
  async getUtilities(ctx: any) {
    try {
      const utilities = await getRegistryRecords();
      return (ctx.body = utilities);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },

  //wallet
  async getWalletBalance(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const userId = ctx.state.user.id;
      const result = await userService.getWalletBalance(Number(userId));
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getWalletTransactions(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const userId = ctx.state.user.id;
      const result = await userService.getWalletTransactions(Number(userId), ctx.query.pageNo);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async addWalletFund(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const userId = ctx.state.user.id;
      const { transactionAmount } = ctx.request.body;
      const result = await userService.updateWalletFund(Number(userId), "ADD", transactionAmount);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async withdrawWalletFund(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const userId = ctx.state.user.id;
      const { transactionAmount } = ctx.request.body;
      const result = await userService.updateWalletFund(Number(userId), "WITHDRAW", transactionAmount);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  //user-preference
  async getUserPreference(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const user = ctx.state.user;
      const result = await userService.getUserPreference(user);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async updateUserPreference(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const user = ctx.state.user;
      const updateUserPrefDto = ctx.request.body;
      const result = await userService.updateUserPreference(updateUserPrefDto, user);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
