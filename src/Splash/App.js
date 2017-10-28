import React, { Component } from "react";
import Splash from "./Splash.js";
import Questions from "./Questions.js";
import { Footer } from "../Global/Footer.js";
import "./Splash.css";

class App extends Component {
  render() {
    return (
      <div>
        <Splash />
        <Questions />
        <Footer />
      </div>
    );
  }
}

export default App;
