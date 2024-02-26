import jsonata from "jsonata";
import path from 'path';
import fs from 'fs';
import appRootPath from 'app-root-path';
import { v4 as uuid } from 'uuid';
import moment from "moment";

export const context = async (data: any, action: string) => {
    const expression = jsonata(fs.readFileSync(path.join(appRootPath.toString(), `/server/mappings/context.jsonata`), "utf8"));
    return await expression.evaluate(data, { env: process.env, moment, uuid, action });
}

export const xInput = async (action: string) => {
    const formId = action === 'on_select' ? 'itemDetailsForm' : 'ratingForm';
    return `${process.env.BPP_ADAPTER_PLUGIN_URL}/x-input/form?form_id=${formId}`;
}