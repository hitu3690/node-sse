import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DefaultTypelessProvider } from "./TypelessContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <DefaultTypelessProvider>
      <App />
    </DefaultTypelessProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
