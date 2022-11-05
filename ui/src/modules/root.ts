import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import todoReducer, { todoEpic, TodoState } from "./todo";

export interface RootState {
  todo: TodoState;
}

export const rootReducer = combineReducers(todoReducer);

export const rootEpic = combineEpics(todoEpic);
