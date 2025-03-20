/**
 * Defines a flexible schema where keys are dynamic,
 * and values can be of type string, boolean, or number.
 */
export type RecordSchema = {
    [key: string]: "string" | "boolean" | "number";
};
