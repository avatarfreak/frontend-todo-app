import { ThemeContext } from "@/Todo/context/ThemeContext";
import { Todo } from "@/Todo/Todo";
import React from "react";

export default function Home() {
  const { dark } = React.useContext(ThemeContext);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const root = window.document.documentElement;
    isDark ? root.classList.add("dark") : root.classList.remove("dark");
    setIsDark(dark ? true : false);
  }, [dark, isDark]);
  return (
    <div
      className={`${isDark ? "theme-dark" : "theme-light"} min-h-screen bg-neutral-110 font-sans  `}
    >
      <Todo />
    </div>
  );
}
