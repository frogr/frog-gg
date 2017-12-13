process.env.LEAGUE_API_PLATFORM_ID = 'na1';

const LeagueJs = require('leaguejs');
const fetch = require('node-fetch');
const api = new LeagueJs('RGAPI-cc5110d1-1aec-44e7-af28-6b03c6e0a994');

const getAccountInfoBySummoner = summoner => {
  api.Summoner.gettingByName(summoner)
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
  api.Summoner.gettingByName(summoner)
    .then(account => {
      api.Match.gettingRecentListByAccount(account.accountId).then(match => {
        console.log('--RECENT GAMES--');
        let championEndPointURL =
          'https://na1.api.riotgames.com/lol/static-data/v3/champions/' +
          match.matches[0].champion +
          '?locale=en_US&api_key=RGAPI-7ccfe7bb-d774-4d4f-8537-6b8ed9d01a9a';
        fetch(championEndPointURL).then(function(json) {
          console.log(json);
        });
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const getLiveGameBySummoner = summoner => {
  api.Summoner.gettingByName(summoner)
    .then(account => {
      api.Spectator.gettingActiveGame(account.id).then(live => {
        console.log(live);
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const getChampion = (i, id) => {
  api.StaticData.gettingChampionById(id).then(champ => {
    console.log(`Game ${i}: ${champ.name}`);
  });
};

const test = cid => {
  const url =
    'https://na1.api.riotgames.com/lol/static-data/v3/champions/67?locale=en_US&api_key=RGAPI-6ddc5f2e-65e8-41d7-876c-4eef09d94a9a';

  fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(e => {
      console.log('!E', e);
    });
};
test();
// getAccountInfoBySummoner('im frog');
// getRecentMatchesBySummoner('im frog');
// getLiveGameBySummoner('ourania');
// getChampion(67);

//TODO need to figure out a way to assign champion IDs and summoner spell IDs and item IDs to their A) images and B) correct data
// e.g. champ id 1 = "Annie" || item id x = "Dorans Blade" || item id x image = "doransblade.jpg" ||

// big find! the ids are plaintext in the endpoint. something like JSON(summonerurl/:id/) may work!

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

// I think we could set up the API like this:
// GET ~/:name/summoner/ -> summoner details, rank, winrate, etc
// GET ~/:name/summoner/live -> live game, current players, champions, ranks of all players
// get ~/:name/account/ -> the actual account details for my platform, name, bio, posts, liked posts, etc
