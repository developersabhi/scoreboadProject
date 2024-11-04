const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
const schema = {
  properties: {
    event_name: { type: "string" },
    squad_a: { type: "string" },
    squad_b: { type: "string" },
    tournament_id: { type: "string" },
    match_date: { type: "string" },
    start_time: { type: "string" },
    venue: { type: "string" },
  },
  optionalProperties: {
    inning_started_by: { enum: ["TEAM_A", "TEAM_B"] },
    toss_winner: { enum: ["TEAM_A", "TEAM_B"] },
    toss_result: { enum: ["HEAD", "TAIL"] },
    toss_winner_selected: { enum: ["BATTING", "BALLING"] },
    match_result: { enum: ["DRAW", "TEAM_A_WON", "TEAM_B_WON", "CANCELLED"] },
    match_status: {
      enum: [
        "STARTED",
        "ENDED",
        "CANCELLED",
        "NOT_STARTED",
        "ABANDONED",
        "POSTPONED",
        "IN_PROGRESS",
        "REVIEW",
      ],
    },
    is_live: { type: "boolean" },
    is_deleted: { type: "boolean" , default: false},
    created_at: { type: "timestamp" },
    updated_at: { type: "timestamp" },
  },
  additionalProperties: false,
};

const matches = ajv.compile(schema);

const updateMatches = matches;

module.exports = { matches, updateMatches };
