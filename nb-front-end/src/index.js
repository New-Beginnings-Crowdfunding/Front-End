import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/GlobalStyle";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
  document.getElementById("root")
);
