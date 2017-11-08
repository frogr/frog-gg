process.env.LEAGUE_API_PLATFORM_ID = "na1";

const LeagueJs = require("leaguejs");
const api = new LeagueJs("RGAPI-dfdea5e8-d8c7-4fa9-806b-0e46d01a6ce9");

const getAccountInfoBySummoner = summoner => {
  api.Summoner
    .gettingByName(summoner)
    .then(account => {
      api.League.gettingPositionsForSummonerId(account.id).then(data => {
        let i = 0;
        if (data[0].queueType !== "RANKED_SOLO_5x5") {
          i++;
        }
        let leagueName = data[i].leagueName.toLowerCase();
        let league = data[i].tier.toLowerCase();
        let leagueDivision = data[i].rank;
        let wins = data[i].wins;
        let losses = data[i].losses;
        console.log(data);
        console.log(account);
        console.log(
          summoner +
            " is in " +
            league +
            " " +
            leagueDivision +
            " with " +
            wins +
            " and " +
            losses +
            " losses."
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
};

getAccountInfoBySummoner("lemonerino");
