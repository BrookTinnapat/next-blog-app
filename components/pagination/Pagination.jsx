"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <button
        className="w-[100px] border-none p-4 bg-crimson  bg-red-700 cursor-pointer hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <div className="flex justify-center items-center">Page {page}</div>
      <button
        className="w-[100px] border-none p-4 bg-crimson bg-red-700 cursor-pointer hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed"
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
