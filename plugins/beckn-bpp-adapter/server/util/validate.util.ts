import Joi from 'joi';

interface JsonSchema {
  [key: string]: {
    type: 'string' | 'number' | 'array';
    required: boolean;
    items: any
  };
}

const convertToJoiSchema = (jsonSchema: JsonSchema): Joi.ObjectSchema => {
  const keys: { [key: string]: Joi.StringSchema | Joi.NumberSchema | Joi.ArraySchema} = {};
  for (const key in jsonSchema) {
    const rule = jsonSchema[key];
    switch (rule.type) {
      case 'string':
        keys[key] = rule.required ? Joi.string().required() : Joi.string();
        break;
      case 'number':
        keys[key] = rule.required ? Joi.number().required() : Joi.number();
        break;
      case 'array':
        if (rule.items) {
          const itemSchema = convertToJoiSchema(rule.items);
          keys[key] = rule.required ? Joi.array().items(itemSchema).required() : Joi.array().items(itemSchema);
        } else {
          keys[key] = rule.required ? Joi.array().required() : Joi.array();
        }
        break;
    }
  }
  return Joi.object(keys).unknown(false);
};

export { convertToJoiSchema };
