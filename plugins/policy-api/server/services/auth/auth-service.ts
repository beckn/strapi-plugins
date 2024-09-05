import { Strapi } from "@strapi/strapi";
import axios from "axios";

export default ({ strapi }: { strapi: Strapi }) => ({
  async auth(loginDto: any) {
    try {
      const { email, password } = loginDto;
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { email: { $eqi: email } },
          populate: {
            role: true,
            agent: true,
            provider: true
          }
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
  }
});
