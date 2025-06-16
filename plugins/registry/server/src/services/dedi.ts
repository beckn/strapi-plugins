import { RecordData, RegistryData } from 'src/types/dedi';

const BASE_URL = process.env.DEDI_BASE_URL || 'https://fallback-url.com';

export default {
  async addRegistry(namespace: string, data: RegistryData): Promise<any> {
    return await this._makeRequest(`/dedi/${namespace}/add-registry`, 'POST', data);
  },

  async addRecord(namespace: string, registryName: string, data: RecordData): Promise<any> {
    return await this._makeRequest(`/dedi/${namespace}/${registryName}/add-record`, 'POST', data);
  },

  async updateRecord(
    namespace: string,
    registryName: string,
    recordName: string,
    data: Partial<RecordData>
  ): Promise<any> {
    return await this._makeRequest(
      `/dedi/${namespace}/${registryName}/${recordName}/update-record`,
      'POST',
      data
    );
  },

  async revokeRecord(namespace: string, registryName: string, recordName: string): Promise<any> {
    return await this._makeRequest(
      `/dedi/${namespace}/${registryName}/${recordName}/revoke-record`,
      'POST'
    );
  },

  async reinstateRecord(namespace: string, registryName: string, recordName: string): Promise<any> {
    return await this._makeRequest(
      `/dedi/${namespace}/${registryName}/${recordName}/reinstate-record`,
      'POST'
    );
  },

  // Get namespace details
  async getNamespaceDetails(namespace: string): Promise<any> {
    return await this._makeRequest(`/dedi/lookup/${namespace}`, 'GET');
  },

  // Get directory details inside a namespace
  async getDirectoryDetails(namespace: string, directory: string, version?: string): Promise<any> {
    const query = version ? `?version=${version}` : '';
    const response = await this._makeRequest(
      `/dedi/lookup/${namespace}/${directory}${query}`,
      'GET'
    );
    if (response?.data?.isRevoked) {
      response.data = null;
    }
    return response;
  },

  // Get details of a record inside a directory
  async getRecordDetails(
    namespace: string,
    directory: string,
    record: string,
    version?: string
  ): Promise<any> {
    const query = version ? `?version=${version}` : '';
    const recordDetails = await this._makeRequest(
      `/dedi/lookup/${namespace}/${directory}/${record}${query}`,
      'GET'
    );
    if (recordDetails?.data?.is_revoked == 'true' || recordDetails?.data?.is_revoked == true) {
      recordDetails.data = null;
    }
    return recordDetails;
  },

  // Query directories inside a namespace
  async queryNamespace(namespace: string, params: Record<string, string | number>): Promise<any> {
    const queryParams = new URLSearchParams(params as Record<string, string>).toString();
    return await this._makeRequest(`/dedi/query/${namespace}?${queryParams}`, 'GET');
  },

  // Query records inside a directory
  async queryDirectory(
    namespace: string,
    directory: string,
    params: Record<string, string | number>
  ): Promise<any> {
    const queryParams = new URLSearchParams(params as Record<string, string>).toString();
    const response = await this._makeRequest(
      `/dedi/query/${namespace}/${directory}?${queryParams}`,
      'GET'
    );
    if (!params?.is_revoked) {
      response.data.records = response.data.records.filter((record: any) => !record.is_revoked);
    }
    return response;
  },

  // Get available versions of a directory
  async versionDirectory(
    namespace: string,
    directory: string,
    params: Record<string, string | number>
  ): Promise<any> {
    const queryParams = new URLSearchParams(params as Record<string, string>).toString();
    return await this._makeRequest(
      `/dedi/versions/${namespace}/${directory}?${queryParams}`,
      'GET'
    );
  },

  // Get history of a directory
  async getDirectoryHistory(
    namespace: string,
    directory: string,
    params: Record<string, string | number>
  ): Promise<any> {
    const queryParams = new URLSearchParams(params as Record<string, string>).toString();
    return await this._makeRequest(`/dedi/history/${namespace}/${directory}?${queryParams}`, 'GET');
  },

  // Get history of a record inside a directory
  async getRecordHistory(
    namespace: string,
    directory: string,
    record: string,
    params: Record<string, string | number>
  ): Promise<any> {
    const queryParams = new URLSearchParams(params as Record<string, string>).toString();
    return await this._makeRequest(
      `/dedi/history/${namespace}/${directory}/${record}?${queryParams}`,
      'GET'
    );
  },

  async _makeFetchRequest(endpoint: string, method: string, body?: object): Promise<any> {
    return await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        ...(body ? { 'Content-Type': 'application/json' } : {}),
        ...(process.env.DEDI_ACCESS_TOKEN
          ? { Authorization: `Bearer ${process.env.DEDI_ACCESS_TOKEN}` }
          : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  },

  async getAccessToken(): Promise<any> {
    strapi.log.info(`Getting access token for ${process.env.DEDI_EMAIL}`);
    const response = await this._makeFetchRequest('/dedi/login', 'POST', {
      email: process.env.DEDI_EMAIL || '',
      password: process.env.DEDI_PASSWORD || '',
    });

    const result = await response.json();
    strapi.log.info(`Response for login: ${JSON.stringify(result, null, 2)}`);
    return result.data.access_token;
  },

  async _makeRequest(endpoint: string, method: string, body?: object): Promise<any> {
    try {
      const response = await this._makeFetchRequest(endpoint, method, body);

      const result = await response.json();

      if (!response.ok) {
        // If the response has an "error" field, throw it directly

        if (response.status === 401) {
          strapi.log.info(`Access token expired, getting new one`);
          process.env.DEDI_ACCESS_TOKEN = await this.getAccessToken();
          strapi.log.info(`New access token: ${process.env.DEDI_ACCESS_TOKEN}`);
          const res = await this._makeFetchRequest(endpoint, method, body);
          if (!res.ok) {
            throw new Error(res.error);
          }
          return await res.json();
        }

        if (response.status === 400 && result.error) {
          throw new Error(result.error);
        }

        // Generic error handling for other cases
        throw new Error(
          result.message || `Request to ${endpoint} failed with status ${response.status}`
        );
      }

      return result;
    } catch (error: any) {
      strapi.log.error(`DeDi API Error (${endpoint}):`, error.message);
      throw new Error(`${error.message}`);
    }
  },
};
