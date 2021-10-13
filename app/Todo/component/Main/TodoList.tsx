import { useTodo } from "@/Todo/hook/useTodo";
import { Todo, IMap } from "@/Todo/interfaces/interface";
import React from "react";
import { ButtonFilter } from "./ButtonFilter";
import { TodoItem } from "./TodoItem";
import { TodoStatus } from "./TodoStatus";

//Match pattern function
const FILTER_MAP: IMap = {
  All: () => true,
  Active: (todo: Todo) => !todo.isCompleted,
  Completed: (todo: Todo) => todo.isCompleted,
};

//Extract all the keys from FILTER_MAP Object
const FILTER_NAMES = Object.keys(FILTER_MAP);

//Todo List
const TodoList = () => {
  const { todos, toggleTodo, deleteTodo, clearCompletedTodo, swapTodo, pending } = useTodo();

  const [filter, setFilter] = React.useState<string>("All");

  return (
    <main className="px-6 transform -translate-y-8 md:-translate-y-16 md:px-0 max-w-[33.875rem] m-auto">
      <ul className=" rounded-lg overflow-hidden divide-y divide-neutral-110 dark:divide-neutral-140">
        {todos.filter(FILTER_MAP[filter]).map((todo, idx) => (
          <TodoItem
            key={idx}
            id={idx}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            swapTodo={swapTodo}
          />
        ))}

        <TodoStatus
          items={pending}
          clearCompleted={clearCompletedTodo}
          FILTER_NAMES={FILTER_NAMES}
          setFilter={setFilter}
        />
      </ul>
      <div className="md:hidden">
        <ButtonFilter FILTER_NAMES={FILTER_NAMES} setFilter={setFilter} />
      </div>
    </main>
  );
};

export { TodoList };
