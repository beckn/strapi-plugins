import { Strapi } from "@strapi/strapi";
import fs from "fs";
import { getRegistryRecords } from "../utils/dhiway-utils";
export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin("beckn-trade-bap")
      .service("myService")
      .getWelcomeMessage();
  },
  async login(ctx: any) {
    try {
      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const result = await userService.login(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async signup(ctx: any) {
    try {
      const { fullname, phone_no, email, password, utility_name: utility, address } =
        ctx.request.body;

      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const customerMDM = await userService.getCustomerMDM({
        phone_no,
        utility
      });
      console.log('MDM Customer: ', customerMDM.data);
      if (customerMDM.data.data && customerMDM.data.data.customer_id) {
        const { user: newUser, jwt } = await userService.createUser({
          email,
          fullname,
          password
        });
        delete newUser.password;
        console.log('New user created: ', newUser);
        if (newUser.id) {
          const newUserProfile = await userService.createUserProfile({
            fullname,
            phone_no,
            email,
            utility,
            userId: newUser.id,
            customer_id: customerMDM.data.data.customer_id,
            address
          });
          console.log('New user profile created: ', newUserProfile);
          if (newUserProfile.id) {
            return (ctx.body = {
              success: true,
              message: "User Signed Up Successfully",
              data: {
                user: newUser,
                profile: newUserProfile,
                jwt
              }
            });
          }
        }
      } else {
        throw new Error("Customer Not Registered with MDM");
      }
      return (ctx.body = {});
    } catch (error: any) {
      if (error.message === "Customer Not Registered with MDM") {
        return ctx.notFound(error.message);
      }
      return ctx.badRequest(error.message);
    }
  },
  async createDER(ctx: any) {
    try {
      const filesService = strapi
        .plugin("beckn-trade-bap")
        .service("filesService");
      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const { type, category } = ctx.request.body;
      const filesUploadResps = (
        await Promise.all(
          (Array.isArray(ctx.request.files.proof)
            ? ctx.request.files.proof
            : [ctx.request.files.proof]
          ).map((file: any) => filesService.uploadFile(file))
        )
      ).flatMap((resp: any) => resp);

      const createDERResp = await userService.createDER({
        category,
        type,
        proof: filesUploadResps,
        user: ctx.state.user
      });

      return (ctx.body = createDERResp);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },
  async getDER(ctx: any) {
    try {
      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");

      const getDERResp = await userService.getDER(ctx.state.user.id);

      return (ctx.body = getDERResp);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },
  async uploadUserCred(ctx: any) {
    try {
      console.log(ctx.request.files.credential);
      let credential_content: any = {};
      try {
        if (ctx.request.files.credential.type != "application/json") {
          throw new Error();
        }
        credential_content = fs.readFileSync(
          ctx.request.files.credential.path,
          "utf-8"
        );
      } catch (error) {
        throw new Error("Uploaded Credential is Invalid");
      }

      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");

      const uploadCredResponse = await userService.uploadUserCredential(
        ctx.state.user.id,
        JSON.parse(credential_content)
      );
      return (ctx.body = uploadCredResponse);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },
  async getUserCreds(ctx: any) {
    try {
      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const getUserCredsResp = await userService.getUserCreds(
        ctx.state.user.id
      );
      return (ctx.body = getUserCredsResp);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },
  async deleteDerById(ctx: any) {
    try {
      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const deleteDerResp = await userService.deleteDer(
        ctx.state.user.id,
        ctx.params.id || 0
      );
      return (ctx.body = deleteDerResp);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },
  async getDashboardData(ctx: any) {
    try {
      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const { startDate, endDate } = ctx.query;
      const dashboardResp = await userService.getDashboardData(
        ctx.state.user.id,
        startDate,
        endDate
      );
      return (ctx.body = dashboardResp);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },
  async getUtilities(ctx: any) {
    try {
      const utilities = await getRegistryRecords();
      return (ctx.body = utilities);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },
  async getUserProfile(ctx: any) {
    try {
      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const getUserCredsResp = await userService.getUserProfile(
        ctx.state.user.id, ctx.state.user.email
      );
      return (ctx.body = getUserCredsResp);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },
  async updateUserProfile(ctx: any) {
    try {
      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const getUserCredsResp = await userService.updateUserProfile(
        ctx.request.body, ctx.state.user.id
      );
      return (ctx.body = getUserCredsResp);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },
  async deleteCredById(ctx: any) {
    try {
      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const deleteDerResp = await userService.deleteCredById(
        ctx.state.user.id,
        ctx.params.id
      );
      return (ctx.body = deleteDerResp);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },
});
