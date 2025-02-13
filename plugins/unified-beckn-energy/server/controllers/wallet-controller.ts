import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async linkWallet(ctx: any) {
    try {
      const user = ctx.state.user;
      const {
        wallet_id,
        energy_identities_consent = false,
        energy_assets_consent = false,
        energy_transactions_consent = false
      } = ctx.request.body;

      const walletService = strapi
        .plugin("unified-beckn-energy")
        .service("walletService");

      const result = await walletService.createWallet({
        wallet_id,
        energy_identities_consent,
        energy_assets_consent,
        energy_transactions_consent,
        userId: user.id
      });
      return (ctx.body = result);
    } catch (error) {
      console.log(error);
      ctx.badRequest(error.message);
    }
  },
  async unlinkWallet(ctx: any) {
    try {
      const user = ctx.state.user;
      const { wallet_id } = ctx.request.body;

      const walletService = strapi
        .plugin("unified-beckn-energy")
        .service("walletService");

      const result = await walletService.unlinkWallet({
        wallet_id,
        userId: user.id
      });
      return (ctx.body = result);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
