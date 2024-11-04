const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
const schema = {
  properties: {
    sq_tm_ply_id: { type: "int32" },
    match_id: { type: "int32" },
  },
  optionalProperties: {
    is_playing: { type: "boolean" },
    is_deleted: { type: "boolean", default: false },
  },
  additionalProperties: false,
};

const matchPlayers = ajv.compile(schema);

const updateSchema = {
  properties: {},
  optionalProperties: {
    sq_tm_ply_id: { type: "int32" },
    match_id: { type: "int32" },
    is_playing: { type: "boolean" },
    is_deleted: { type: "boolean" ,
        default: false
    },
  },
  additionalProperties: false,
};

const updateMatchPlayers = ajv.compile(updateSchema);

module.exports = { matchPlayers, updateMatchPlayers };
