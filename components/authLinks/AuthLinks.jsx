"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline"; // Importing the bars-3 icon
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "authenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="cursor-pointer hidden md:flex">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="cursor-pointer hidden md:flex">
            Write
          </Link>
          <span className="cursor-pointer hidden md:flex" onClick={signOut}>
            Log out
          </span>
        </>
      )}
      {status === "authenticated" ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="">
            <Bars3Icon className="w-6 h-6 cursor-pointer md:hidden" />
            {/* Using the bars-3 icon */}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/">Homepage</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/contact">Contact</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/write">Write</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/login">Log out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className="">
            <Bars3Icon className="w-6 h-6 cursor-pointer md:hidden" />
            {/* Using the bars-3 icon */}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/">Homepage</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/contact">Contact</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/write">Write</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/login">Log out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export default AuthLinks;
