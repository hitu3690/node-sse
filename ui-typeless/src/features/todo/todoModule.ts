import { createModule } from "typeless";
import { from, map } from "typeless/rx";

import axios from "axios";
import { TodoSymbol } from "./todoSymbol";

export interface TodoResponse {
  body: string;
  id: number;
  title: string;
  userId: number;
}
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
    return from(axios.get("https://jsonplaceholder.typicode.com/posts")).pipe(
      map(({ data }) => {
        const newTodos = data.map((item: TodoResponse) => {
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

  return { useTodoModule, TodoActions, getTodoState };
};

export const { useTodoModule, TodoActions, getTodoState } = createTodoModule();
