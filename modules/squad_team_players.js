const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
const schema = {
  properties: {
    player_id: { type: "int32" },
    squad_id: { type: "int32" },
  },
  optionalProperties: {
    is_deleted: { type: "boolean",
        default: false
     },
  },
  additionalProperties: false,
};

const teamPlayers = ajv.compile(schema);

const updateSchema = {
  properties: {},
  optionalProperties: {
    player_id: { type: "int32" },
    squad_id: { type: "int32" },
    is_deleted: { type: "boolean",
        default: false
     },
  },

  additionalProperties: false,
};

const updateTeamPlayers = ajv.compile(updateSchema);

module.exports = { teamPlayers, updateTeamPlayers };
