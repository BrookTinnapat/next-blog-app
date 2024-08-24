"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const { data, status } = useSession();
  console.log(data, status);

  // const router = useRouter();
  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "authenticated") {
  //   return router.push("/");
  // }

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex flex-col items-center justify-center rounded-md w-[400px] h-[450px] gap-4">
        <h1 className="text-2xl font-bold mb-6">Login Page</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded font-semibold w-[200px]"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold w-[200px]">
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
