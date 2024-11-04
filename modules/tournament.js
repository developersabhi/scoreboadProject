const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv({ allErrors: true });
// const addFormats = require("ajv-formats");
// addFormats(ajv);

const schema = {
  properties: {
    name: { type: "string" },
    gender_type: { enum: ["MALE", "FEMALE"] },
    format_type: { enum: ["ODI", "TEST", "T20"] },
    num_of_innings: { enum: ["2", "4"] },
    start_date: { type: "string" },
    end_date: { type: "string" },
  },
  optionalProperties: { is_deleted: { type: "boolean" }, default: false },
  additionalProperties: false,
};
const tournaments = ajv.compile(schema);

const updateSchema = {
    properties: {
      name: { type: "string" },
    },
    optionalProperties: {
      gender_type: { enum: ["MALE", "FEMALE"] },
      format_type: { enum: ["ODI", "TEST", "T20"] },
      num_of_innings: { enum: ["2", "4"] },
      start_date: { type: "string" },
      end_date: { type: "string" },
      is_deleted: { type: "boolean",
      default: false },
    },
    additionalProperties: false,
  };
  const updateTournaments = ajv.compile(updateSchema);
  
  module.exports = { tournaments, updateTournaments };
  
