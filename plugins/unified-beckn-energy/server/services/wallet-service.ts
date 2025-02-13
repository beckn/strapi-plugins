import { Strapi } from "@strapi/strapi";
const fs = require("fs").promises;

export default ({ strapi }: { strapi: Strapi }) => ({
  async createWallet(payload: any) {
    try {
      const {
        wallet_id,
        energy_identities_consent = false,
        energy_assets_consent = false,
        energy_transactions_consent = false,
        userId
      } = payload;
      const existingWallet = await strapi.entityService.findMany(
        "api::deg-wallet.deg-wallet",
        {
          filters: {
            deg_wallet_id: wallet_id
          },
          populate: {
            users_permissions_user: {}
          }
        }
      );
      if (existingWallet && existingWallet.length) {
        if (!existingWallet[0]?.users_permissions_user?.id) {
          const wallet = await strapi.entityService.update(
            "api::deg-wallet.deg-wallet",
            existingWallet[0].id,
            {
              data: {
                users_permissions_user: userId
              }
            }
          );
          return wallet;
        }
        if (
          existingWallet[0]?.users_permissions_user?.id &&
          existingWallet[0]?.users_permissions_user?.id === userId
        ) {
          const wallet = await strapi.entityService.update(
            "api::deg-wallet.deg-wallet",
            existingWallet[0].id,
            {
              data: {
                energy_identities_consent,
                energy_assets_consent,
                energy_transactions_consent
              }
            }
          );
          return wallet;
        }
        return { message: "Wallet Already Linked" };
      }
      const wallet = await strapi.entityService.create(
        "api::deg-wallet.deg-wallet",
        {
          data: {
            deg_wallet_id: wallet_id,
            energy_identities_consent,
            energy_assets_consent,
            energy_transactions_consent,
            users_permissions_user: userId,
            publishedAt: new Date()
          }
        }
      );

      return wallet;
    } catch (error) {
      console.log("Error Occured:: ", error.message);

      throw new Error(error.message);
    }
  },
  async unlinkWallet(payload: any) {
    try {
      const { userId, wallet_id } = payload;
      const existingWallet = await strapi.entityService.findMany(
        "api::deg-wallet.deg-wallet",
        {
          filters: {
            deg_wallet_id: wallet_id
          },
          populate: {
            users_permissions_user: {}
          }
        }
      );
      if (existingWallet && existingWallet.length) {
        const wallet = await strapi.entityService.update(
          "api::deg-wallet.deg-wallet",
          existingWallet[0].id,
          {
            data: {
              users_permissions_user: null
            }
          }
        );
        return {
          message: "Wallet Unliked"
        };
      }

      throw new Error("No wallet found");
    } catch (error) {
      console.log("Error Occured:: ", error.message);

      throw new Error(error.message);
    }
  }
});
