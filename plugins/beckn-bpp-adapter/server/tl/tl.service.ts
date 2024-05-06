import jsonata from "jsonata";
import path from 'path';
import appRootPath from "app-root-path";
import fs from 'fs';
import { ObjectUtil } from "../util/object.util";
import * as tlHelpers from './tl.helper'

export class TLService {
    static async transform(data: any, action: string) {
        
        if (action) {
            const expression = jsonata(fs.readFileSync(path.join(appRootPath.toString(), `/server/mappings/${action}.jsonata`), "utf8"));
            console.log("Transforming %s data: \n%o", action, JSON.stringify(data));
            let transformed = await expression.evaluate(data, { action, ...tlHelpers });
            transformed = ObjectUtil.removeEmptyObjectKeys(transformed)
            console.log("Transformed %s data: \n%o", action, JSON.stringify(transformed));
            return transformed;
        }
        return {};
    }
}
