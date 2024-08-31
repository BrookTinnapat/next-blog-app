"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

function ThemeProvider({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default ThemeProvider;
