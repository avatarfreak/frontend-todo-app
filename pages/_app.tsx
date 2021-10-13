import "../styles/globals.css";
import type { AppProps } from "next/app";
import "windi.css";
import React from "react";
import { ThemeProvider } from "@/Todo/context/ThemeContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Todo App</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
