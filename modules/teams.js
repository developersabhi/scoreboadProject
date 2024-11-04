const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
const schema = {
  properties: {
    name: { type: "string" },
  },
  optionalProperties: {
    gender: { enum: ["MALE", "FEMALE"] },
    is_deleted: {
      type: "boolean",
      default: false
    },
  },
  additionalProperties: false,
};

const teams = ajv.compile(schema);

const updateTeams = teams;

module.exports = { teams, updateTeams };
