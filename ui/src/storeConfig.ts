import { applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic, rootReducer } from "./modules/root";
import { configureStore } from "@reduxjs/toolkit";

const epicMiddleware = createEpicMiddleware();

export default function storeConfig() {
  const store = configureStore(rootReducer, applyMiddleware(epicMiddleware));
  epicMiddleware.run(rootEpic);

  return store;
}
