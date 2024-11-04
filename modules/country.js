const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv();

const countrySchema = {
  properties: {
    name: { type: "string" },
    code: { type: "string" },
    logo: { type: "string" },
  },
  optionalProperties: {
    is_deleted: { type: "boolean", default: false },
  },
  additionalProperties: false,
};

const countries = ajv.compile(countrySchema);
const updateCountry = countries;
module.exports = { countries, updateCountry };
