import React from "react";

const Form = () => {
  return (
    <form>
      <label htmlFor="inputTodo" className="relative mt-8 block flex items-center">
        <span className="absolute left-5 h-5 w-5 rounded-full border border-neutral-150"></span>
        <input
          type="text"
          id="inputTodo"
          className="w-full border-lg py-3 px-12 rounded-lg text-xs text-neutral-140 font-bold bg-neutral-110"
          name="todo"
          placeholder="Create a new todo..."
        />
      </label>
    </form>
  );
};

export { Form };
