import { Todo } from "../components/todo";
import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs";
import { ajax } from "rxjs/ajax";

export interface TodoState {
  todos: Todo[];
}

export const FETCH_TODO = "todo/FETCH_TODO";
export const FETCH_TODO_FULLFILLED = "todo/FETCH_TODO_FULLFILLED";

const initialState: TodoState = { todos: new Array<Todo>() };

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TODO_FULLFILLED:
      return { todos: action.payload };
    default:
      return state;
  }
};

export const todoEpic = (action$: any) =>
  action$.pipe(
    ofType(FETCH_TODO),
    mergeMap((action) =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`).pipe(
        map((res) => res),
        map((res) => ({ type: FETCH_TODO_FULLFILLED, payload: res }))
      )
    )
  );

export default todoReducer;
