import { Strapi } from '@strapi/strapi';
import cron from 'node-cron';

export default ({ strapi }: { strapi: Strapi }) => {
  // bootstrap phase
  // Schedule the job to run every 15 minutes
  const logController = strapi.plugin("beckn-mdm").controller("logController");

  cron.schedule('*/15 * * * *', async () => {
    try {
      const customerId = "12235";
  
      const result = await logController.createConsumptionLog({ customerId });
      console.log("Consumption Log created:", result);
    } catch (error) {
      console.error("Error in consumption cron task:", error);
    }
  });

  // Schedule the job to run every 15 minutes
  cron.schedule('*/15 * * * *', async () => {
    try {
      const customerId = "43523";
  
      const result = await logController.createProductionLog({ customerId });
      console.log("Production Log created:", result);
    } catch (error) {
      console.error("Error in production cron task:", error);
    }
  });

  console.log('Cron job has been scheduled');
};
