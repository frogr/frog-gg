process.env.LEAGUE_API_PLATFORM_ID = "na1";

const LeagueJs = require("leaguejs");
const api = new LeagueJs("RGAPI-14a6a1a2-ecbf-415e-acd4-a2da595c59f9");

const getAccDetailsFromSummoner = summoner => {
  api.Summoner
    .gettingByName(summoner)
    .then(account => {
      api.League.gettingPositionsForSummonerId(account.id).then(data => {
        let leagueName = data[0].leagueName.toLowerCase();
        let league = data[0].tier.toLowerCase();
        let leagueDivision = data[0].rank;
        let wins = data[0].wins;
        let losses = data[0].losses;
        console.log(
          summoner +
            " is in " +
            league +
            " " +
            leagueDivision +
            " with " +
            wins +
            " wins and " +
            losses +
            " losses."
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
};

getAccDetailsFromSummoner("im frog");
