import React, { useState } from "react";
import { Form } from "./Form";

const Header = () => {
  const [theme, setTheme] = useState<boolean>(false);
  return (
    <header className="uppercase bg-dark-mobile  py-12 px-6 text-neutral-120">
      <div className="flex items-center justify-between">
        <h1 className="text-[1.75rem] tracking-[9px] font-bold">Todo</h1>

        {/* toggle theme image */}
        <figure>
          {theme ? (
            <img src="/images/icon-moon.svg" alt="dark-mode" />
          ) : (
            <img src="/images/icon-sun.svg" alt="light-mode" />
          )}
        </figure>
      </div>

      {/* Form Section */}
      <Form />
    </header>
  );
};

export { Header };
