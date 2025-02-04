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
            role: true
          }
        });
      if (!user) {
        throw new Error("Email Not found");
      }
      if (user?.role?.name !== 'Admin') {
        throw new Error("Invalid User. Not an admin!");
      }
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
      if (error.message === "Email Not found"
        || error.message === "Invalid User. Not an admin!") {
        throw error;
      }
      throw new Error("Wrong Password");
    }
  },
});
