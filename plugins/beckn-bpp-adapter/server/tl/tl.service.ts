import jsonata from "jsonata";
import path from 'path';
import appRootPath from "app-root-path";
import fs from 'fs';
import { ObjectUtil } from "../util/object.util";
import * as tlHelpers from './tl.helper'

export class TLService {
    static async transform(data: any, action: string) {
        try {
            if (action) {
                const expression = jsonata(fs.readFileSync(path.join(appRootPath.toString(), `/server/mappings/${action}.jsonata`), "utf8"));
                console.log(`Transforming ${action} data:`, JSON.stringify(data));
                let transformed = await expression.evaluate(data, { action, ...tlHelpers });
                transformed = ObjectUtil.removeEmptyObjectKeys(transformed)
                console.log("Transformed %s data: \n%o", action, JSON.stringify(transformed));
                return transformed;
            }
            return {};
        } catch (error) {
            console.log(error);
            return {}
        }
    }
}

export class POSTLService {
    static async transform(data: any) {

        const expression = jsonata(fs.readFileSync(path.join(appRootPath.toString(), `/server/mappings/on_confirm_to_pos.jsonata`), "utf8"));
        console.log(`\nTransforming on_confirm to POS: \n ${JSON.stringify(data)}`);
        let transformed = await expression.evaluate(data);
        transformed = ObjectUtil.removeEmptyObjectKeys(transformed)
        console.log(`\nTransformed on_confirm to POS: \n ${JSON.stringify(transformed)}`);
        return transformed;

    }
}