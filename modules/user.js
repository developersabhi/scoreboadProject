const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv();

const schema = {
  properties: {
    name: { type: "string" },
    mobile_no: { type: "string" },
    password: { type: "string" },
  },
  optionalProperties: {
    status: { type: "boolean" },
    role: { enum: ["ADMIN", "MANAGER", "AGENT"], default: "AGENT" },
    created_by: { type: "int32" },
    is_deleted: { type: "boolean", default: false },
  },
  additionalProperties: false,
};

const users = ajv.compile(schema);

let updateUserSchema = {
  properties: {
    name: { type: "string" },
    password: { type: "string" },
  },
  optionalProperties: {
    mobile_no: { type: "string" },
    status: { type: "boolean" },
    role: { enum: ["ADMIN", "MANAGER", "AGENT"], default: "AGENT" },
    created_by: { type: "int32" },
    is_deleted: { type: "boolean", default: false },
  },
  additionalProperties: false,
};

const updateUser = ajv.compile(updateUserSchema);

module.exports = { users, updateUser };
