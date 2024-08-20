"use client";
import Link from "next/link";
import { useState } from "react";
// import { signOut, useSession } from "next-auth/react";
import React from "react";

const AuthLinks = () => {
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="cursor-pointer">
          Login
        </Link>
      ) : (
        <>
          <Link href="/login" className="cursor-pointer">
            Write
          </Link>
          <span>Log out</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
