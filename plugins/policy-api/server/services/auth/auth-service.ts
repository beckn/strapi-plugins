import { Strapi } from "@strapi/strapi";
import axios from "axios";

export default ({ strapi }: { strapi: Strapi }) => ({
  async auth(authData: any) {
    try {
      const { email, password } = authData;
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { email: { $eqi: email } }
        });
      if (!user) {
        throw new Error("Email Not found");
      }

      // Request API.
      const response = await axios.post(
        `${process.env.STRAPI_BPP_URL}/api/auth/local`,
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
  async sendResetLink(email) {
    try {
      //chcek it exists
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { email: { $eqi: email } }
        });
      if (!user) {
        throw new Error("Email Not found");
      }
      await axios
      .post(`${process.env.STRAPI_BPP_URL}/api/auth/forgot-password`, {
        email, // user's email
      });
      console.log('Email sent to reset password');
    } catch(error) {
      throw error;
    }
  },
  async resetPassword(password, passwordConfirmation, code) {
    try {
      const result = await axios
      .post(`${process.env.STRAPI_BPP_URL}/api/auth/reset-password`, {
        password,
        passwordConfirmation,
        code
      });
      console.log('Password Resetted Successfully');
      return result.data;
    } catch(error) {
      throw error;
    }
  }
});
