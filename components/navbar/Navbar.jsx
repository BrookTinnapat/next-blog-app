"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent rendering until mounted

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="flex justify-between items-center border-2 border-red-500 p-4">
      <div className="lg:gap-10 flex-1 md:flex sm:gap-2 hidden">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex flex-1 items-center text-black dark:text-white">
        NEXT Blog
      </div>
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleThemeToggle}
          className="p-2"
        >
          {theme === "light" ? (
            <Moon className="h-[1rem] w-[1rem]" />
          ) : (
            <Sun className="h-[1rem] w-[1rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <div className="md:flex gap-4 hidden">
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
        </div>
        <div className="flex">
          <AuthLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
