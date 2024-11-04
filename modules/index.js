const { countries } = require("./country");
const { users } = require("./user");
const { matchAssignUsers } = require("./match_assign_user");
const { matches } = require("./matches");
const { players } = require("./player");
const { matchPlayers } = require("./squad_match_players");
const { teamPlayers } = require("./squad_team_players");
const { squads } = require("./squad");
const { teams } = require("./team");
const { tourTeams } = require("./tournament_teams");
const { tournament } = require("./tournament");
const { balls } = require("./balls");

module.exports = {
  users,
  countries,
  matchAssignUsers,
  matches,
  players,
  matchPlayers,
  teamPlayers,
  squads,
  teams,
  tourTeams,
  tournament,
  balls,
};
