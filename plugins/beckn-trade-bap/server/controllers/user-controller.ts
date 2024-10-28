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
      const { fullname, phone_number, email, password, utility } =
        ctx.request.body;

      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const customerMDM = await userService.getCustomerMDM({
        phone_number,
        utility
      });
      if (customerMDM.data.data && customerMDM.data.data.customer_id) {
        const newUser = await userService.createUser({
          email,
          fullname,
          password
        });
        if (newUser.id) {
          const newUserProfile = await userService.createUserProfile({
            fullname,
            phone_number,
            email,
            utility,
            userId: newUser.id,
            customer_id: customerMDM.data.data.customer_id
          });
          if (newUserProfile.id) {
            delete newUser.password;
            return (ctx.body = {
              success: true,
              message: "User Signed Up Successfully",
              data: {
                user: newUser,
                profile: newUserProfile
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
          ctx.request.files.proofs.map((file: any) =>
            filesService.uploadFile(file)
          )
        )
      ).flatMap((resp: any) => resp);

      const createDERResp = await userService.createDER({
        category,
        type,
        proofs: filesUploadResps,
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
  async deleteDer(ctx: any) {
    try {
      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const deleteDerResp = await userService.deleteDer(
        ctx.state.user.id,
        ctx.request.query.id || 0
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
      const dashboardResp = await userService.getDashboardData(
        ctx.state.user.id
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
  }
});
