import React from "react";
import { Footer } from "./component/footer/Footer";
import { Header } from "./component/header/Header";
import { TodoList } from "./component/Main/TodoList";
import { TodoProvider } from "./context/TodoProvider";

const Todo = () => {
  return (
    <TodoProvider>
      <Header />
      <TodoList />
      <Footer />
    </TodoProvider>
  );
};

export { Todo };
