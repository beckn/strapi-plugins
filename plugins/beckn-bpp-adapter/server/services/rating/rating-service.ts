import { Strapi } from '@strapi/strapi';

export default ({ }: { strapi: Strapi }) => ({
    async rating() {
        return {
            feedback_form: {}
        };
    }
});
