export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}
export interface TodoState {
  todos: Todo[];
}

export const getInitialTodoState = (): TodoState => ({
  todos: new Array<Todo>(),
});
