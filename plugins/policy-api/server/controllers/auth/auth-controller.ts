import { Strapi } from "@strapi/strapi";
import { PLUGIN } from "../../../contstants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async auth(ctx) {
    try {
      const authService = strapi
        .plugin(PLUGIN)
        .service("authService");
      const result = await authService.auth(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async sendResetLink(ctx) {
    try {
      const authService = strapi
        .plugin(PLUGIN)
        .service("authService");
      const { email } = ctx.request.body;
      console.log('EMail:  ', email);
      
      if (!email) {
        return ctx.badRequest('Email Not provided to Reset Password');
      }
      await authService.sendResetLink(email);
      ctx.body = {
        "message": "Reset Password Link Sent to Email"
      }
    } catch (error) {
      console.error(error);
      if (error.message == 'Email Not found') {
        return ctx.badRequest(error.message);
      }
      ctx.badRequest('Unable to Send Reset Password Link to Email');
    }
      
  },
  async resetPassword(ctx) {
    try {
      console.log('QQQQ');
      const authService = strapi
        .plugin(PLUGIN)
        .service("authService");
      const { password, passwordConfirmation, code } = ctx.request.body;
      if (!password) {
        return ctx.badRequest('Password not provided to resetting password');
      }
      if (!passwordConfirmation) {
        return ctx.badRequest('Confirm Password Not provided to resetting password');
      }
      if (!code) {
        return ctx.badRequest('Reset Code not provided for resetting password');
      }
      if(password !== passwordConfirmation) {
        return ctx.badRequest('Password and Confirm Password do not match');
      }
      const response = await authService.resetPassword(password, passwordConfirmation, code);
      console.log('Response is:  ', response);
      
      ctx.body = response;
    } catch(error) {
      console.error(error);
      ctx.badRequest('Unable to Reset Password');
    }
  }
});
