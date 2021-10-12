import React from "react";

export interface Todo {
  id: string;
  desc: string;
  isCompleted: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export interface IMap {
  [key: string]: (todo: Todo) => boolean;
}

export interface ITodo {
  id: number;
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  swapTodo: (src: string, tar: string) => void;
}


export interface IDisplayItems {
  items: number;
  clearCompleted: () => void;
  FILTER_NAMES: Array<string>
  setFilter: React.Dispatch<React.SetStateAction<string>>
}