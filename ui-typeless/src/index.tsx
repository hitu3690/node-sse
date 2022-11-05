import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Registry, TypelessContext } from "typeless";
import reportWebVitals from "./reportWebVitals";

const registry = new Registry();

ReactDOM.render(
  <BrowserRouter>
    <TypelessContext.Provider value={{ registry }}>
      <App />
    </TypelessContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
