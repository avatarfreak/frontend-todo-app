import React from "react";

interface IFilter {
  FILTER_NAMES: Array<string>;
  setFilter: (filter: string) => void;
}

interface IActiveState {
  [key: string]: string;
}

const ButtonFilter: React.FC<IFilter> = ({ FILTER_NAMES, setFilter }) => {
  const [value, setValue] = React.useState<string>("All");

  const handleButton = (filterName: string) => {
    setValue(filterName);
    setFilter(filterName);
  };

  let checkActiveState: IActiveState = {
    All: "text-blue-500",
    Active: "text-blue-500",
    Completed: "text-blue-500",
  };

  return (
    <>
      <div className="bg-neutral-100 py-3 mt-4 md:mt-0 space-x-5 text-neutral-130 text-sm items-center justify-center flex rounded-lg">
        {FILTER_NAMES.map((filterName, idx) => (
          <button
            key={`${idx}-pgt`}
            onClick={() => handleButton(filterName)}
            className={`${filterName === value ? checkActiveState[value] : ""} pgt-focus-visible `}
          >
            <span className="sr-only">show</span>
            <span className="font-bold text-sm rounded-lg p-2 hover:bg-neutral-120 ">
              {filterName}
            </span>
            <span className="sr-only">task</span>
          </button>
        ))}
      </div>
    </>
  );
};

export { ButtonFilter };
