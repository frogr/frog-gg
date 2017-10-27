# SUMMONER V3
# In order to turn Summoner name -> Summoner ID
 https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/im%20frog

 input -> summoner name
 output -> object, number
 sID = s: {request.id}
 aID = a: {request.accountId}
 e.g. im frog -> s: {21606515} a: {35059907}

# LEAGUE V3
# In order to find Summoner League by Summoner ID
 https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/21606515?api_key=RGAPI-XXXX

input -> summoner ID
output -> array of objects
RANK = {request[1].tier} + {request[1].rank}

e.g. 21606515 -> {PLATINUM} {II}

# MATCH V3
# In order to retrieve a list of recent games (or a list of ALL games!)
https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/35059907/recent?api_key=RGAPI-XXXX

FOR RECENT:
input -> accountId
output -> object with an array of objects
MOSTRECENTGAME = {request.matches[0]}

e.g. 35059907 -> {
                  "lane": "JUNGLE",
                  "gameId": 2630501397,
                  "champion": 56, // -> nocturne
                  "platformId": "NA1",
                  "timestamp": 1509139816072,
                  "queue": 430, // -> blindpick
                  "role": "NONE",
                  "season": 9
                }
