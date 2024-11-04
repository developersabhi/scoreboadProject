const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
const schema = {
  properties: {
    name: { type: "string" },
    age: { type: "int32" },
    country_id: { type: "int32" },
    team_id: { type: "int32" },
  },
  optionalProperties: {
    gender: { enum: ["MALE", "FEMALE"] },
    skills: { enum: ["BOWLER", "BATSMAN", "WICKET_KEEPER", "ALL_ROUNDER"] },
    profile_pic: { type: "string" },
    is_deleted: { type: "boolean" , default: false},
  },
  additionalProperties: false,
};

const players = ajv.compile(schema);

const updateSchema = {
  properties: {
    is_deleted: { type: "boolean", default: false },
  },
  optionalProperties: {
    name: { type: "string" },
    age: { type: "int32" },
    country_id: { type: "int32" },
    team_id: { type: "int32" },
    gender: { enum: ["MALE", "FEMALE"] },
    skills: { enum: ["BOWLER", "BATSMAN", "WICKET_KEEPER", "ALL_ROUNDER"] },
    profile_pic: { type: "string" },
  },
  additionalProperties: false,
};

const updatePlayers = ajv.compile(updateSchema);

module.exports = { players, updatePlayers };
