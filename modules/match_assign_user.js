const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv();

const schema = {
  properties: {
    match_id: { type: "int32" },
    user_id: { type: "int32" },
  },
  optionalProperties: {
    assigned_by: { type: "int32" },
    is_deleted: { type: "boolean" },
  },
  additionalProperties: false,
};

const matchAssignUser = ajv.compile(schema);

const updateSchema = {
  properties: {
    match_id: { type: "int32" },
    user_id: { type: "int32" },
  },
  optionalProperties: {
    assigned_by: { type: "int32" },
    is_deleted: { type: "boolean" ,
        default: false
    },
  },
  additionalProperties: false,
};

const updateMatchAssignUser = ajv.compile(updateSchema);

module.exports = { matchAssignUser, updateMatchAssignUser };
