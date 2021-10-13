import { IDisplayItems } from "@/Todo/interfaces/interface";
import { ButtonFilter } from "./ButtonFilter";

const TodoStatus: React.FC<IDisplayItems> = ({
  items,
  clearCompleted,
  setFilter,
  FILTER_NAMES,
}) => {
  //Return singular or plural
  const pluralize = (count: number) => {
    let plural = count !== 1 ? "items" : "item";
    let text = `${count} ${plural} left`;
    return text;
  };

  return (
    <li className="bg-neutral-100 py-3 px-4 space-x-5 font-bold text-neutral-130 text-xs md:text-sm items-center justify-between flex ">
      <h3>{pluralize(items)}</h3>
      <div className="hidden md:block">
        <ButtonFilter FILTER_NAMES={FILTER_NAMES} setFilter={setFilter} />
      </div>
      <button
        onClick={() => clearCompleted()}
        className="pgt-focus-visible font-bold p-2 hover:bg-neutral-120"
      >
        Clear Completed
      </button>
    </li>
  );
};

export { TodoStatus };
