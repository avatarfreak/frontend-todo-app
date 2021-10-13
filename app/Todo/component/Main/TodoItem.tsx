import { ITodo } from "@/Todo/interfaces/interface";
import React from "react";
import IconCheck from "../../../../public/images/icon-check.svg";
import IconCross from "../../../../public/images/icon-cross.svg";

type Event = (e: React.DragEvent<HTMLLIElement>) => void;

const TodoItem: React.FC<ITodo> = ({ todo, toggleTodo, deleteTodo, swapTodo, id }) => {
  const handleDragStart: Event = (e) => {
    //set data attribute value as string
    const index = `${e.currentTarget.dataset.idx}`;
    e.dataTransfer.setData("pgt/plain", index);
  };

  const handleDragEnter: Event = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.style.backgroundColor = "var(--pri-100)";
  };

  //on Drag over
  const handleDragOver: Event = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave: Event = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.style.backgroundColor = "var(--neutral-100)";
  };

  const handleDrop: Event = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.style.backgroundColor = "var(--neutral-100)";

    // Getting source id and target id
    const targetId = `${e.currentTarget.dataset.idx}`;
    let sourceId = e.dataTransfer.getData("pgt/plain");

    //call function for swaping list item
    swapTodo(sourceId, targetId);
  };

  return (
    <li
      className="bg-neutral-100 py-3 w-full !hover:bg-pri-110 !hover:bg-opacity-5"
      data-idx={id}
      draggable
      onDragStart={(e) => handleDragStart(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <div className="flex items-center justify-between px-4 md:px-6 space-x-4 md:p-3">
        <label htmlFor={todo.id} className="flex items-center w-full">
          <input
            type="checkbox"
            defaultChecked={todo.isCompleted}
            onChange={() => toggleTodo(todo.id)}
            id={todo.id}
            className="pgt-focus-visible appearance-none cursor-pointer h-5 w-5 md:h-6 md:w-6 border border-neutral-130  rounded-full flex-shrink-0"
          />
          <span
            style={{ display: todo.isCompleted ? "flex" : "" }}
            className=" hidden absolute h-5 w-5 md:h-6 md:w-6 border-pri-110 rounded-full bg-pri-110 flex flex-shrink-0 items-center justify-center "
          >
            <img src={IconCheck} alt="checked" />
          </span>
          <span
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "",
              color: todo.isCompleted ? "var(--neutral-160)" : "",
            }}
            className="text-neutral-140 dark:text-neutral-120 text-xs md:text-base font-bold block ml-4 md:ml-6 flex-auto cursor-pointer"
          >
            {todo.desc}
          </span>
        </label>
        <button
          className="
          pgt-focus-visible
          flex-none
          w-6 h-6
          md:w-8 md:h-8
          flex items-center justify-center
           hover:bg-neutral-120"
          onClick={() => deleteTodo(todo.id)}
        >
          <img src={IconCross} alt="delete task" className="w-3 h-3 " />
        </button>
      </div>
    </li>
  );
};

export { TodoItem };
