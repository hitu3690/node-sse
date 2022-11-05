import { createModule } from "typeless";
import { from, map } from "typeless/rx";
import * as Rx from "typeless/rx";

import axios from "axios";
import { TodoSymbol } from "./todoSymbol";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}
export interface TodoState {
  todos: Todo[];
}

const initialState = {
  todos: new Array<Todo>(),
};

const createTodoModule = () => {
  const [useTodoModule, TodoActions, getTodoState] = createModule(TodoSymbol)
    .withActions({
      fetchTodo: () => ({}),
      fetchTodoFullfilled: (data: any) => ({ payload: data }),
    })
    .withState<TodoState>();

  useTodoModule
    .reducer(initialState)
    .on(TodoActions.fetchTodoFullfilled, (state, { data }) => {
      console.log(data);
    });

  useTodoModule.epic().on(TodoActions.fetchTodo, () => {
    return from(axios.get("https://jsonplaceholder.typicode.com/posts")).pipe(
      Rx.map(({ data }) => {
        console.log(data);
        return TodoActions.fetchTodoFullfilled(data);
      })
    );
  });

  return { useTodoModule, TodoActions, getTodoState };
};

export const { useTodoModule, TodoActions, getTodoState } = createTodoModule();
