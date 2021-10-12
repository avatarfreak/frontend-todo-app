import { useTodo } from "@/Todo/hook/useTodo";
import { Todo } from "@/Todo/interfaces/interface";
import { nanoid } from "nanoid";
import React from "react";

const Form = () => {
  const [newTodo, setNewTodo] = React.useState<string>("");
  const { addTodo } = useTodo();

  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newTodo) return;

    let newTask: Todo = {
      id: nanoid() + "-pgt",
      desc: newTodo.toString(),
      isCompleted: false,
    };

    addTodo(newTask);
    setNewTodo("");
    console.log(newTask);
  };

  return (
    <form onSubmit={(e) => submitHandle(e)} className="max-w-[33.875rem] m-auto">
      <label htmlFor="inputTodo" className="relative mt-8 block flex items-center">
        <span className="absolute left-5 md:left-6 h-5 w-5 md:h-6 md:w-6 rounded-full border border-neutral-140"></span>
        <input
          type="text"
          id="inputTodo"
          className="pgt-focus-visible w-full  border-lg py-3 px-12 md:px-18 rounded-lg text-xs md:text-lg text-neutral-130 font-bold bg-neutral-100 placeholder-neutral-120 md:p-5 dark:placeholder-neutral-130 dark:text-neutral-120"
          name="todo"
          value={newTodo}
          placeholder="Create a new todo..."
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </label>
    </form>
  );
};

export { Form };
