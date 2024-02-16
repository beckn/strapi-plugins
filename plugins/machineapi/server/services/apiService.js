// @ts-nocheck
const axios = require("axios");
const strapiConfig = require("../../../../../config/plugins");

module.exports = ({ strapi }) => ({
  async callMachineApi(order) {
    try {
      const apiUrl = strapiConfig.machineapi.config.Url;
      const body = {
        order_id: order.id,
        status: order.status,
      };
      const response = await axios.post(apiUrl, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = {
        order_id: response.data.order_id,
        status: response.data.status,
      };
      console.log("External API responded with:", result);
      const orderUpdateResult = await updateOrder(result.order_id, {
        status: "processed",
      });
      return orderUpdateResult;
    } catch (error) {
      console.error("Failed to call external API:", error);
      //throw error; // Or handle it as per your error handling policy
    }
  },
});
async function updateOrder(id, updateData) {
  try {
    // Use the entity service API to update the order
    const updatedOrder = await strapi.entityService.update(
      "api::order.order",
      id,
      { data: updateData }
    );
    return updatedOrder;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
}
