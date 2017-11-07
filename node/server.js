process.env.LEAGUE_API_PLATFORM_ID = "na1";

const LeagueJs = require("leaguejs");
const api = new LeagueJs("RGAPI-XXXX");

api.Summoner
  .gettingByName("im frog")
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
