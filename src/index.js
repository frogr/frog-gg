import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Splash from "./Splash.js";

ReactDOM.render(<Splash />, document.getElementById("root"));
registerServiceWorker();
