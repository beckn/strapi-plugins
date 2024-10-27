import axiosInstance from "axios";
import https from "https";
import { KeyValuePair } from "../types";
import { CHECK_IN, CHECK_OUT, START, END } from "../constants";
import { isHospitality, isMobility, isTourism, isEnergy } from "./domain.util";
import { isInRange, findStoresAlongRouteWithinDistance } from "./location.util";

export const verifyCredential = async (
    providers: KeyValuePair[],
    context: KeyValuePair
) => {
    let filteredProviders: KeyValuePair[] = [];
    if (isEnergy(context)) {
        for (const provider of providers) {
            const isTrustedSourcePreffered = provider.items?.find(item => item.sc_retail_product?.trusted_source);
            if (isTrustedSourcePreffered) {
                try {
                    const axios = axiosInstance.create({
                        httpsAgent: new https.Agent({
                            rejectUnauthorized: false,
                        }),
                    });
                    const bapHeaders = {
                        "Content-Type": "application/json",
                    };
                    const bapUrl = `${context.bap_uri}/beckn.json`;
                    const vc: KeyValuePair = await axios.get(bapUrl, { headers: bapHeaders });
                    if (vc) {
                        const verifiableCredential = vc.credentials?.filter((credential) => credential.type === 'Organization');
                        filteredProviders.push(provider);
                    }
                } catch (e) {
                    console.log('Error while calling BAP beckn.json', e?.message);
                }
            } else {
                filteredProviders.push(provider);
            }
        }
        return filteredProviders;
    }
    return providers;
}