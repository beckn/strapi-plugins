import { Strapi } from '@strapi/strapi';
import cron from 'node-cron';

export default ({ strapi }: { strapi: Strapi }) => {
  // bootstrap phase
  // Scheduled the job to run every 15 minutes
  const logController = strapi.plugin("beckn-mdm").controller("logController");

  cron.schedule('*/15 * * * *', async () => {
    try {
      await logController.createLog();
    } catch (error) {
      console.error("Error in cron task:", error);
    }
  });

  console.log('Cron job has been scheduled');
};
