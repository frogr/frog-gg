import React, { Component } from "react";
import Splash from "./Splash.js";
import Questions from "./Questions.js";
import "./Splash.css";

class App extends Component {
  render() {
    return (
      <div>
        <Splash />
        <Questions />
      </div>
    );
  }
}

export default App;
