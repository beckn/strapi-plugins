import { Strapi } from '@strapi/strapi';
import { KeyValuePair } from '.././../types';

export default ({ strapi }: { strapi: Strapi }) => ({
    async submit(form_data: KeyValuePair) {
        const currentDate = new Date();
        const isoString = currentDate.toISOString();
        return await strapi.entityService.create('api::input-detail.input-detail', {
            data: {
                form_data,
                form_id: form_data.form_id,
                publishedAt: isoString
            },
        });
    },
});
