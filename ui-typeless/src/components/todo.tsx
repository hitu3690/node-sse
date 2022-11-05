import React, { useEffect } from "react";
import { useActions } from "typeless";
import {
  getTodoState,
  TodoActions,
  useTodoModule,
} from "../features/todo/todoModule";
import style from "../styles/components/todo.module.scss";

export const TodoContainer: React.FC = () => {
  useTodoModule();
  const { todos } = getTodoState.useState();
  const { fetchTodo } = useActions(TodoActions);

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className={style.todoContainer}>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};
