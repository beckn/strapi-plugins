import axios, { AxiosResponse, RawAxiosRequestHeaders } from "axios";

interface HttpResponse<T = any> {
  data: T;
}

interface CredentialProperties {
  name: string;
  email: string;
  [key: string]: any;
}

interface SchemaProperty {
  type: string;
}

interface SchemaDefinition {
  title: string;
  description: string;
  properties: {
    [key: string]: SchemaProperty;
  };
}

interface SchemaRequest {
  schema: SchemaDefinition;
}

interface VerifiableCredential {
  "@context": string[];
  type: string[];
  issuer: string;
  issuanceDate: string;
  credentialSubject: {
    name: string;
    email: string;
    id: string;
    "@context": {
      vocab: string;
    };
  };
  validFrom: string;
  validUntil: string;
  metadata: Record<string, any>;
  credentialSchema: {
    $id: string;
    title: string;
    properties: Record<string, { type: string }>;
    required: string[];
    type: string;
    additionalProperties: boolean;
    $schema: string;
  };
  credentialHash: string;
  id: string;
  proof: Array<{
    type: string;
    [key: string]: any;
  }>;
}

interface UtilityCompanyDetails {
  company_id: string;
  company_name: string;
  state_region: string;
  headquarters: string;
  contact_email: string;
  contact_phone: string;
  customer_service_portal_url: string;
  status: string;
  der_participation: string;
  established_year: number;
}

interface AddRecordRequest {
  authorization: string;
  recordName: string;
  description: string;
  details: UtilityCompanyDetails;
  version_count: string;
}

const ISSUER_AGENT_BASE_URL = "https://issuer-agent.demo.dhiway.com/api/v1";
const CORD_NETWORK_BASE_URL = "https://api.cord.network/api/v1";
const DEDI_BASE_URL = "https://lookup.dedi.global/dedi";

// constant for now. can be changed in future
const namespace_id = process.env.NAMESPACE_ID;
const registry_name = process.env.REGISTRY_NAME;
  "registry:cord:bdqt8vxH3E9mAiWdeybZeJPgpo4yCRvF4ecTUKi96UWqAfwWA";
const authorization =
  "registryauth:cord:X8JY6GM9eY9qbsXmT27ARZXhf2Hkj31UjLjStf4AFVWNsvNhn";

/**
 * Generate credentials using the issuer agent
 * @param schemaId - The schema ID for the credential
 * @param properties - The properties for the credential (name, email, etc.)
 * @param headers - Custom headers (optional)
 * @returns The credential response data
 */
async function generateCredential<T = any>(
  schemaId: string,
  properties: CredentialProperties,
  headers: Record<string, string> = {}
): Promise<T> {
  try {
    const url = `${ISSUER_AGENT_BASE_URL}/cred`;
    const data = {
      schemaId,
      properties
    };

    const requestHeaders = {
      "Content-Type": "application/json",
      ...headers
    } as RawAxiosRequestHeaders;

    const response: AxiosResponse<T> = await axios.post(url, data, {
      headers: requestHeaders
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `Credential generation failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

/**
 * Fetch a credential by its ID
 * @param credentialId - The ID of the credential to fetch
 * @param headers - Custom headers (optional)
 * @returns The credential data
 */
async function fetchCredential<T = any>(
  credentialId: string,
  headers: Record<string, string> = {}
): Promise<T> {
  try {
    const url = `${ISSUER_AGENT_BASE_URL}/cred/${credentialId}`;

    const requestHeaders = {
      "Content-Type": "application/json",
      ...headers
    } as RawAxiosRequestHeaders;

    const response: AxiosResponse<T> = await axios.get(url, {
      headers: requestHeaders
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `Fetch credential failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

/**
 * Create a new schema
 * @param title - The title of the schema
 * @param description - The description of the schema
 * @param properties - The properties of the schema
 * @param headers - Custom headers (optional)
 * @returns The schema creation response data
 */
async function createSchema<T = any>(
  title: string,
  description: string,
  properties: Record<string, SchemaProperty>,
  headers: Record<string, string> = {}
): Promise<T> {
  try {
    const url = `${ISSUER_AGENT_BASE_URL}/schema`;
    const data: SchemaRequest = {
      schema: {
        title,
        description,
        properties
      }
    };

    const requestHeaders = {
      "Content-Type": "application/json",
      ...headers
    } as RawAxiosRequestHeaders;

    const response: AxiosResponse<T> = await axios.post(url, data, {
      headers: requestHeaders
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `Schema creation failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

/**
 * Fetch a schema by its ID
 * @param schemaId - The ID of the schema to fetch
 * @param headers - Custom headers (optional)
 * @returns The schema data
 */
async function fetchSchema<T = any>(
  schemaId: string,
  headers: Record<string, string> = {}
): Promise<T> {
  try {
    const url = `${ISSUER_AGENT_BASE_URL}/schema/${schemaId}`;

    const requestHeaders = {
      "Content-Type": "application/json",
      ...headers
    } as RawAxiosRequestHeaders;

    const response: AxiosResponse<T> = await axios.get(url, {
      headers: requestHeaders
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `Fetch schema failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

/**
 * Verify a credential
 * @param credential - The credential to verify
 * @param headers - Custom headers (optional)
 * @returns The verification response data
 */
async function verifyCredential<T = any>(
  credential: VerifiableCredential,
  headers: Record<string, string> = {}
): Promise<T> {
  try {
    const url = `${CORD_NETWORK_BASE_URL}/verify/credentials/verify`;

    const requestHeaders = {
      "Content-Type": "application/json",
      ...headers
    } as RawAxiosRequestHeaders;

    const response: AxiosResponse<T> = await axios.post(url, credential, {
      headers: requestHeaders
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `Credential verification failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

// *********************************************Decentralized Registry*****************************************************

/**
 * Add a record to the registry
 * @param recordData - The record data
 * @param headers - Custom headers (optional)
 * @returns The response data from adding the record
 */
async function addRegistryRecord<T = any>(
  recordData: {
    recordName: string;
    description: string;
    details: UtilityCompanyDetails;
    version_count: string;
  },
  headers: Record<string, string> = {}
): Promise<T> {
  try {
    const url = `${DEDI_BASE_URL}/${namespace_id}/${registry_name}/addRecord`;

    const requestData: AddRecordRequest = {
      authorization,
      recordName: recordData.recordName,
      description: recordData.description,
      details: recordData.details,
      version_count: recordData.version_count
    };

    const requestHeaders = {
      "Content-Type": "application/json",
      ...headers
    } as RawAxiosRequestHeaders;

    const response: AxiosResponse<T> = await axios.post(url, requestData, {
      headers: requestHeaders
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `Add registry record failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

/**
 * Query the registry for records. In our case, we are getting the utility company records
 * @param headers - Custom headers (optional)
 * @returns The registry query response data
 */
async function getRegistryRecords<T = any>(
  headers: Record<string, string> = {}
): Promise<T> {
  try {
    const url = `${process.env.DEDI_BASE_URL}/query/${namespace_id}/${registry_name}`;

    const requestHeaders = {
      "Content-Type": "application/json",
      ...headers
    } as RawAxiosRequestHeaders;

    const response: AxiosResponse<T> = await axios.get(url, {
      headers: requestHeaders
    });

    // Convert records to array if it's an object
    if (
      response.data &&
      typeof response.data === "object" &&
      "records" in response.data
    ) {
      if (!Array.isArray((response.data as any).records)) {
        (response.data as any).records = Object.values(
          (response.data as any).records as Record<string, unknown>
        );
      }
    }

    return response.data;
  } catch (error) {
    throw new Error(
      `Registry query failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export {
  generateCredential,
  fetchCredential,
  createSchema,
  fetchSchema,
  verifyCredential,
  addRegistryRecord,
  type CredentialProperties,
  type HttpResponse,
  type SchemaProperty,
  type SchemaDefinition,
  type VerifiableCredential,
  type UtilityCompanyDetails,
  type AddRecordRequest,
  getRegistryRecords
};
