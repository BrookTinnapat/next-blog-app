import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold my-10">Popular Categories</h1>
      <div className="flex flex-wrap md:flex-row justify-between gap-[20px] ">
        <Link
          href="/blog"
          className="bg-[#57c4ff31] gap-[10px] flex items-center capitalize w-[100%] md:w-[45%] lg:w-[15%] h-[80px] justify-center rounded-sm"
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          />
          Style
        </Link>
        <Link
          href="/blog"
          className="bg-[#da85c731] gap-[10px] flex items-center capitalize w-[100%] md:w-[45%] lg:w-[15%] h-[80px] justify-center rounded-sm"
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
          className="bg-[#7fb88133] gap-[10px] flex items-center capitalize w-[100%] md:w-[45%] lg:w-[15%] h-[80px] justify-center rounded-sm"
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
          className="bg-[#ff795736] gap-[10px] flex items-center capitalize w-[100%] md:w-[45%] lg:w-[15%] h-[80px] justify-center rounded-sm"
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
        <Link
          href="/blog"
          className="bg-[#ffb04f45] gap-[10px] flex items-center capitalize w-[100%] md:w-[45%] lg:w-[15%] h-[80px] justify-center rounded-sm"
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          />
          Culture
        </Link>
        <Link
          href="/blog"
          className="bg-[#5e4fff31] gap-[10px] flex items-center capitalize w-[100%] md:w-[45%] lg:w-[15%] h-[80px] justify-center rounded-sm"
        >
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
