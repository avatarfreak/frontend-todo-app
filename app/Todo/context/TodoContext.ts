import React from "react";
import { Todo } from "../interfaces/interface";

interface ITodoContext {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearCompletedTodo: () => void;
  swapTodo: (sourceId: string, targetId: string) => void;
}

export const TodoContext = React.createContext<ITodoContext>(
  {} as ITodoContext
);
