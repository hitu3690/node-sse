import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules/root";
import { FETCH_TODO } from "../modules/todo";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const TodoContainer: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  useEffect(() => {
    dispatch({ type: FETCH_TODO });
  }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target);
      // const targetTodo = todos.find(
      //   (item) => item.id === event.target.id
      // );
      // console.log({ targetTodo });
    },
    []
  );

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleChange}
            />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
