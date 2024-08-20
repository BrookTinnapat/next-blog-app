"use client";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMoumted] = useState(false);

  useEffect(() => {
    setMoumted(true), [];
  });

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
