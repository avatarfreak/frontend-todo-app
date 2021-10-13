import React from "react";
import { useLocalStorage } from "../hook/useLocalStorage";

interface IThemeContext {
  dark: boolean;
  toggleDark: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useLocalStorage("theme-dark", true);

  //Toggle theme between dark and light mode
  const toggleDark = () => {
    setDark(() => !dark);
  };

  return <ThemeContext.Provider value={{ dark, toggleDark }}>{children}</ThemeContext.Provider>;
};
