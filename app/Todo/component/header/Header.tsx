import React from "react";
import { ThemeContext } from "@/Todo/context/ThemeContext";
import { Form } from "./Form";
import Image from "next/image";
import moon from "../../../../public/images/icon-moon.svg";
import sun from "../../../../public/images/icon-sun.svg";
import Head from "next/head";

const Header = () => {
  const { dark, toggleDark } = React.useContext(ThemeContext);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setIsDark(dark ? true : false);
  }, [dark]);

  return (
    <>
      <header
        className={`${
          isDark ? "bg-dark-mobile md:bg-dark-desktop" : "bg-light-mobile md:bg-light-desktop"
        } md:h-72   py-12 text-neutral-120 bg-no-repeat w-full bg-cover`}
      >
        <div className="max-w-[33.875rem] m-auto w-full px-6 md:px-0">
          <div className="flex items-center justify-between">
            <h1 className="uppercase text-[1.75rem] tracking-[9px] font-bold md:text-4xl md:tracking-14px">
              Todo
            </h1>

            {/* toggle theme image */}
            <button onClick={() => toggleDark()} className="pgt-focus-visible">
              <figure>
                {isDark ? (
                  <Image src={sun} alt="theme-dark" />
                ) : (
                  <Image src={moon} alt="theme-light" />
                )}
              </figure>
            </button>
          </div>

          {/* Form Section */}
          <Form />
        </div>
      </header>
    </>
  );
};

export { Header };
