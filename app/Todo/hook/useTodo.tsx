import React from "react";
import { TodoContext } from "../context/TodoContext";

const useTodo = () => {
  const {
    todos,
    toggleTodo,
    clearCompletedTodo,
    deleteTodo,
    addTodo,
    swapTodo,
  } = React.useContext(TodoContext);
  return {
    todos: todos,
    pending: todos.filter((todo) => !todo.isCompleted).length,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompletedTodo,
    swapTodo,
  };
};

export { useTodo };
