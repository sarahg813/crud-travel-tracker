import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
require("./stylesheets/main.scss");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
