/*

ok so I don't really want to write all of this out in the actual code but this is how we'll make our program work boys:

user enters input, directs him to frog.gg/input

input = summonerName

const {summonerName} = req.params

summonerName runs through a big function that populates the page with the following info:
  Summoner Name
  Summoner ID
  Profile Picture

  Rank in any Non-Null QueueTypes
  Matches 0-19 with basic stats
   (kills, deaths, assists, cs, cspm, matchups)

  TODO: Find ALL of the information we need from every single query to the RIOT and FROG APIs. Save that data. Use it later.
        PLEASE watch something about promises austin. u dont know shit. u just got an egghead subscription. u can do this.
        Make summonerName come from req.params instead of straight input to the server
        Enable Profile Pictures
        Make Champion Names work


*/
