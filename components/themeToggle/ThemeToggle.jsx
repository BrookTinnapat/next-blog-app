"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className="w-[40px] h-[20px] rounded-full cursor-pointer flex items-center justify-between bg-black relative"
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="theme" width={14} height={14} />
      <div
        className="w-[15px] h-[15px] rounded-xl bg-white absolute"
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="theme" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
