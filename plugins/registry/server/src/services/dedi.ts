import { RecordData, RegistryData } from "src/types/dedi";

const BASE_URL = process.env.DEDI_BASE_URL || "https://fallback-url.com";

export default {
    async addRegistry(namespace: string, data: RegistryData): Promise<any> {
        return await this._makeRequest(`/dedi/${namespace}/add-registry`, "POST", data);
    },

    async addRecord(namespace: string, registryName: string, data: RecordData): Promise<any> {
        return await this._makeRequest(`/dedi/${namespace}/${registryName}/add-record`, "POST", data);
    },

    async updateRecord(
        namespace: string,
        registryName: string,
        recordName: string,
        data: Partial<RecordData>
    ): Promise<any> {
        return await this._makeRequest(`/dedi/${namespace}/${registryName}/${recordName}/update-record`, "POST", data);
    },

    async revokeRecord(namespace: string, registryName: string, recordName: string): Promise<any> {
        return await this._makeRequest(`/dedi/${namespace}/${registryName}/${recordName}/revoke-record`, "POST");
    },

    async reinstateRecord(namespace: string, registryName: string, recordName: string): Promise<any> {
        return await this._makeRequest(`/dedi/${namespace}/${registryName}/${recordName}/reinstate-record`, "POST");
    },

    // Get namespace details
    async getNamespaceDetails(namespace: string): Promise<any> {
        return await this._makeRequest(`/dedi/lookup/${namespace}`, "GET");
    },

    // Get directory details inside a namespace
    async getDirectoryDetails(namespace: string, directory: string, version?: string): Promise<any> {
        const query = version ? `?version=${version}` : "";
        const response = await this._makeRequest(`/dedi/lookup/${namespace}/${directory}${query}`, "GET");
        if (response?.data?.isRevoked) {
            response.data = null;
        }
        return response;
    },

    // Get details of a record inside a directory
    async getRecordDetails(namespace: string, directory: string, record: string, version?: string): Promise<any> {
        const query = version ? `?version=${version}` : "";
        const recordDetails = await this._makeRequest(`/dedi/lookup/${namespace}/${directory}/${record}${query}`, "GET");
        if (recordDetails?.data?.is_revoked == "true" || recordDetails?.data?.is_revoked == true) {
            recordDetails.data = null;
        }
        return recordDetails;
    },

    // Query directories inside a namespace
    async queryNamespace(namespace: string, params: Record<string, string | number>): Promise<any> {
        const queryParams = new URLSearchParams(params as Record<string, string>).toString();
        return await this._makeRequest(`/dedi/query/${namespace}?${queryParams}`, "GET");
    },

    // Query records inside a directory
    async queryDirectory(namespace: string, directory: string, params: Record<string, string | number>): Promise<any> {
        const queryParams = new URLSearchParams(params as Record<string, string>).toString();
        const response = await this._makeRequest(`/dedi/query/${namespace}/${directory}?${queryParams}`, "GET");
        if (!params?.is_revoked) {
            response.data.records = response.data.records.filter((record: any) => !record.is_revoked);
        }
        return response;
    },

    // Get available versions of a directory
    async versionDirectory(namespace: string, directory: string, params: Record<string, string | number>): Promise<any> {
        const queryParams = new URLSearchParams(params as Record<string, string>).toString();
        return await this._makeRequest(`/dedi/versions/${namespace}/${directory}?${queryParams}`, "GET");
    },

    // Get history of a directory
    async getDirectoryHistory(namespace: string, directory: string, params: Record<string, string | number>): Promise<any> {
        const queryParams = new URLSearchParams(params as Record<string, string>).toString();
        return await this._makeRequest(`/dedi/history/${namespace}/${directory}?${queryParams}`, "GET");
    },

    // Get history of a record inside a directory
    async getRecordHistory(namespace: string, directory: string, record: string, params: Record<string, string | number>): Promise<any> {
        const queryParams = new URLSearchParams(params as Record<string, string>).toString();
        return await this._makeRequest(`/dedi/history/${namespace}/${directory}/${record}?${queryParams}`, "GET");
    },

    async _makeRequest(endpoint: string, method: string, body?: object): Promise<any> {
        const headers: Record<string, string> = {
            ...(body && { "Content-Type": "application/json" }),
            ...(process.env.DEDI_ACCESS_TOKEN && { "Authorization": `Bearer ${process.env.DEDI_ACCESS_TOKEN}` })
        };

        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method,
                headers,
                body: body && JSON.stringify(body)
            });

            const result = await response.json();

            if (!response.ok) {
                const errorMessage = response.status === 400 && result.error
                    ? result.error
                    : result.message || `Request to ${endpoint} failed with status ${response.status}`;
                throw new Error(errorMessage);
            }

            return result;
        } catch (error: any) {
            strapi.log.error(`DeDi API Error (${endpoint}):`, error.message);
            throw error; // Preserve original error stack trace
        }
    },
};
