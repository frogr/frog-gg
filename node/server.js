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

const test = cID => {
  const url = 'https://frog-gg-api.herokuapp.com/' + cID;
  console.log('URL <<', url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(e => {
      console.log('!E', e);
    });
};
// test(67); // -> cID is an integer. tests my custom API and its ability to fetch info from champion pages. https://frog-gg-api.herokuapp.com/.
// getAccountInfoBySummoner('im frog'); // -> grabs account info. gets the sID and aID and some other neat info.
// getRecentMatchesBySummoner('im frog'); // -> grabs 20 recent games. currently this function might be broken.
// getLiveGameBySummoner('ourania'); // -> grabs info about the live game and who's in it. very important to implement into the website!

// if this information could show up on the webpage, the project is 1/2 done
// after that, need to work on saving champion statistics (how the fk does opgg do that)
// then after champ statistics, something to do with the website like creating statuses and following other users
// a feed that shares peoples games when they do well could be cool too!

// example match history object
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
