import axiosInstance from "axios";
import https from "https";
export default {
    async webhookCall(data: any, action: string): Promise<any> {
        const url = `${process.env?.PROTOCOL_SERVER_URL}/${action}`;
        try {
            console.log('Data sent to Protocol server:', JSON.stringify(data));
            const axios = axiosInstance.create({
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false,
                }),
            });
            const bppHeaders = {
                "Content-Type": "application/json",
            };
            return await axios.post(url, data, { headers: bppHeaders });
        } catch (error) {
            console.log('Error Data:', JSON.stringify(error?.response?.data));
            // throw error;
        }
    }
}