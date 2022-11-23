import { createModule } from "typeless";
import * as Rx from "typeless/rx";

import axios from "axios";
import { TodoSymbol } from "./todoSymbol";
// import { apiResultHandler } from "../../logics/apiResultHandler";
import { TodoRes } from "../../models/todos/todoRes";
import TodoApi from "../../api/todoApi";

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
      fetchTodoFullfilled: (newTodos: Todo[]) => ({ payload: { newTodos } }),
    })
    .withState<TodoState>();

  useTodoModule
    .reducer(initialState)
    .on(TodoActions.fetchTodoFullfilled, (state, { newTodos }) => {
      state.todos = newTodos;
    });

  useTodoModule.epic().on(TodoActions.fetchTodo, () => {
    return Rx.fromPromise(
      axios.get("https://jsonplaceholder.typicode.com/posts")
    ).pipe(
      Rx.map((res) => {
        console.log({ res });
        const newTodos = res.data.map((item: TodoRes) => {
          return {
            id: item.id,
            title: item.title,
            completed: false,
            userId: item.userId,
          };
        });
        return TodoActions.fetchTodoFullfilled(newTodos);
      })
    );
  });
  // .on(TodoActions.fetchTodo, () => {
  //   return Rx.fromPromise(
  //     axios.get("https://jsonplaceholder.typicode.com/posts")
  //   ).pipe(
  //     Rx.map(({ data }) => {
  //       const newTodos = data.map((item: TodoRes) => {
  //         return {
  //           id: item.id,
  //           title: item.title,
  //           completed: false,
  //           userId: item.userId,
  //         };
  //       });
  //       return TodoActions.fetchTodoFullfilled(newTodos);
  //     })
  //   );
  // });

  return { useTodoModule, TodoActions, getTodoState };
};

export const { useTodoModule, TodoActions, getTodoState } = createTodoModule();
