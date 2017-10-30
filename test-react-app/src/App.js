import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <form action="#">
          <input type="text" id="summonerQuery" />
          <input type="submit" id="submitQuery" />
        </form>
      </div>
    );
  }
}
// RGAPI-9f927070-e2da-420b-ae1f-a0cc581bbc9e
// https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/im%20frog?api_key=RGAPI-9f927070-e2da-420b-ae1f-a0cc581bbc9e
export default App;
