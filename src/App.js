import React, { Component } from "react";
import "./App.css";
import Splash from "./Splash.js";
import Questions from "./Questions.js";

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
