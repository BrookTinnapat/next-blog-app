import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold my-10">Popular Categories</h1>
      <div className="flex flex-wrap md:flex-row justify-between gap-[20px]">
        <Link
          href="/blog"
          className="bg-red-300 gap-[10px] flex items-center capitalize w-[100%] md:w-[45%] lg:w-[20%] h-[80px] justify-center rounded-sm"
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          />
          style
        </Link>
        <Link
          href="/blog"
          className="bg-blue-200 gap-[10px] flex items-center capitalize w-[100%] md:w-[45%] lg:w-[20%] h-[80px] justify-center rounded-sm"
        >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          />
          Fashion
        </Link>
        <Link
          href="/blog"
          className="bg-green-200 gap-[10px] flex items-center capitalize w-[100%] md:w-[45%] lg:w-[20%] h-[80px] justify-center rounded-sm"
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          />
          Food
        </Link>
        <Link
          href="/blog"
          className="bg-slate-200 gap-[10px] flex items-center capitalize w-[100%] md:w-[45%] lg:w-[20%] h-[80px] justify-center rounded-sm"
        >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          />
          Travel
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
