const { updateBalls } = require("./balls");
const { updateCountry } = require("./country");
const { updateMatchAssignUser } = require("./match_assign_user");
const { updateMatches } = require("./matches");
const { updatePlayers } = require("./player");
const { updateSquads } = require("./squad");
const { updateMatchPlayers } = require("./squad_match_players");
const { updateTeamPlayers } = require("./squad_team_players");
const { updateTeams } = require("./team");
const { updateTournaments } = require("./tournament");
const { updateTourTeams } = require("./tournament_teams");
const { updateUser } = require("./user");

module.exports = {
  balls: updateBalls,
  users: updateUser,
  countries: updateCountry,
  matchAssignUser: updateMatchAssignUser,
  tournaments: updateTournaments,
  tourTeams: updateTourTeams,
  teams: updateTeams,
  squads: updateSquads,
  matches: updateMatches,
  players: updatePlayers,
  matchPlayers: updateMatchPlayers,
  teamPlayers: updateTeamPlayers,
};
