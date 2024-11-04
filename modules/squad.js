const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
const schema = {
  properties: {
    team_id: { type: "int32" },
    tournament_id: { type: "int32" },
  },
  optionalProperties: {
    is_deleted: { type: "boolean" ,
        default: false },
  },
  additionalProperties: false,
};

const squads = ajv.compile(schema);

const updateSchema = {
  properties: {},
  optionalProperties: {
    team_id: { type: "int32" },
    tournament_id: { type: "int32" },
    is_deleted: { type: "boolean",
        default: false
     },
  },
  additionalProperties: true,
};

const updateSquads = ajv.compile(updateSchema);

module.exports = { squads, updateSquads };
