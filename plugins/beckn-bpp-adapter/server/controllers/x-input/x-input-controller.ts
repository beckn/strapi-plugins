import { Strapi } from '@strapi/strapi';
import fs from 'fs';
import path from 'path';
import appRootPath from "app-root-path";
import ejs from "ejs";
import { convertToJoiSchema } from '../../util/validate.util';
import { PLUGIN } from '../../constants';

export default ({ }: { strapi: Strapi }) => ({
    async getForm(ctx) {
        try {
            const { form_id } = ctx.query;
            if (!form_id) {
                ctx.response.status = 400;
                return;
            }
            const template = fs.readFileSync(
                path.join(
                    appRootPath.toString(),
                    `/server/templates/x-input/ejs/${form_id}.ejs`
                ),
                "utf8"
            );
            const compiledTemplate = ejs.compile(template);
            const renderedHTML = compiledTemplate({ action: `${process.env.BPP_ADAPTER_PLUGIN_URL}/x-input/submit` });
            ctx.body = {
                textHtml: renderedHTML
            };
        } catch (error) {
            throw error;
        }
    },
    async submitForm(ctx) {
        try {
            const { body = {} } = ctx.request;
            const { message } = body;
            const { form_id } = message || {};
            if (!form_id) {
                ctx.response.status = 400;
                return;
            }
            const validationRules = fs.readFileSync(
                path.join(
                    appRootPath.toString(),
                    `/server/templates/x-input/schema/${form_id}.json`
                ),
                "utf-8"
            );
            const schema = convertToJoiSchema(JSON.parse(validationRules));
            const { error, value } = schema.validate(message);
            if (error != undefined) {
                ctx.response.status = 400;
                ctx.body = {
                    error: error.details[0].message
                };
                return;
            }

            const xInputService = strapi
                .plugin(PLUGIN)
                .service('xInputService');

            const result = await xInputService.submit(value);
            ctx.body = result;
        } catch (error) {
            throw error;
        }
    }
});
