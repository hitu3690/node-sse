import React, { useEffect } from "react";
import { useActions } from "typeless";
import {
  getTodoState,
  TodoActions,
  useTodoModule,
} from "../features/todo/todoModule";

export const TodoContainer: React.FC = () => {
  useTodoModule();
  const { todos } = getTodoState.useState();
  const { fetchTodo } = useActions(TodoActions);

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};
