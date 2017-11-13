process.env.LEAGUE_API_PLATFORM_ID = 'na1';

const LeagueJs = require('leaguejs');
const api = new LeagueJs('RGAPI-5cb1b9c3-4c0b-4877-836c-6a5c156d2f7f');

const getAccountInfoBySummoner = summoner => {
  api.Summoner
    .gettingByName(summoner)
    .then(account => {
      api.League.gettingPositionsForSummonerId(account.id).then(data => {
        let i = 0;
        if (data[0].queueType !== 'RANKED_SOLO_5x5') {
          i++;
        }
        let leagueName = data[i].leagueName.toLowerCase();
        let league = data[i].tier.toLowerCase();
        let leagueDivision = data[i].rank;
        let wins = data[i].wins;
        let losses = data[i].losses;
        // console.log(data);
        console.log(account);
        console.log(
          summoner +
            ' is in ' +
            league +
            ' ' +
            leagueDivision +
            ' with ' +
            wins +
            ' and ' +
            losses +
            ' losses.'
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const getRecentMatchesBySummoner = summoner => {
  api.Summoner
    .gettingByName(summoner)
    .then(account => {
      api.Match.gettingRecentListByAccount(account.accountId).then(match => {
        console.log('--RECENT GAMES--');
        for (let i = 0; i < match.matches.length; i++) {
          console.log(`Game ${i}: ${match.matches[i].lane}`);
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const getLiveGameBySummoner = summoner => {
  api.Summoner
    .gettingByName(summoner)
    .then(account => {
      api.Spectator.gettingActiveGame(account.id).then(live => {
        console.log(live);
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// getAccountInfoBySummoner('chapanya');
// getRecentMatchesBySummoner('im frog');
getLiveGameBySummoner('ourania');

//TODO need to figure out a way to assign champion IDs and summoner spell IDs and item IDs to their A) images and B) correct data
// e.g. champ id 1 = "Annie" || item id x = "Dorans Blade" || item id x image = "doransblade.jpg" ||

// if this information could show up on the webpage, the project is 1/2 doransblade
// after that, need to work on creating champion statistics (how the fk does opgg do that)
// then after champ statistics, something to do with the website like creating statuses and following other users
// a feed that shares peoples games when they do well could be cool

// { "matches": [
//     {
//         "lane": "JUNGLE",
//         "gameId": 2640900431,
//         "champion": 11,
//         "platformId": "NA1",
//         "timestamp": 1510281063972,
//         "queue": 400,
//         "role": "NONE",
//         "season": 9
//     }
//   ]
// };
