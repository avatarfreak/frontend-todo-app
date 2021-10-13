import "../styles/globals.css";
import type { AppProps } from "next/app";
import "windi.css";
import React from "react";
import { ThemeProvider } from "@/Todo/context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
