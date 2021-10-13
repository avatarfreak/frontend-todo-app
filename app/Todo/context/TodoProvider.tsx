import React from "react";
import todoData from "../Data/todoData";
import { Todo } from "../interfaces/interface";
import { todoReducer } from "../reducer/TodoReducer";
import { Types } from "../types/Types";
import { TodoContext } from "./TodoContext";

const initialValues = {
  todos: [...todoData],
};

const TodoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(todoReducer, initialValues);
  const { todos } = state;

  //Add new Todo
  const addTodo = (todo: Todo) => {
    dispatch({ type: Types.add, payload: todo });
  };

  //Delete any todo
  const deleteTodo = (id: string) => {
    dispatch({ type: Types.delete, payload: { id } });
  };

  //Toggle todo to stike or unstrike
  const toggleTodo = (id: string) => {
    dispatch({ type: Types.toggle, payload: { id } });
  };

  //Clear Completed
  const clearCompletedTodo = () => {
    dispatch({ type: Types.completed });
  };

  //Swap Todo
  const swapTodo = (src: string, tar: string) => {
    let sourceId = parseInt(src);

    let targetId = parseInt(tar);

    //getting single element from list
    let item = todos[sourceId];

    //remove item from new list
    todos.splice(sourceId, 1);

    //Add item closet to target id
    todos.splice(targetId, 0, item);

    dispatch({ type: Types.swap, payload: todos });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        clearCompletedTodo,
        swapTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider };
