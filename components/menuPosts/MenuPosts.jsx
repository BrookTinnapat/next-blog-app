import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts = ({ withImage }) => {
  return (
    <div className="mt-[35px] mb-[60px] flex flex-col gap-[35px]">
      <Link href="/" className="flex items-center gap-[20px]">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-3 border-lightgray object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className="px-[8px] py-[3px] rounded-[10px] text-[12px] text-white bg-[#ff7857] w-max">
            Travel
          </span>
          <h3 className="text-[18px] font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[12px]">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-[20px]">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-3 border-lightgray object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className="px-[8px] py-[3px] rounded-[10px] text-[12px] text-white bg-[#ffb14f] w-max">
            Culture
          </span>
          <h3 className="text-[18px] font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[12px]">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-[20px]">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-3 border-lightgray object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className="px-[8px] py-[3px] rounded-[10px] text-[12px] text-white bg-[#7fb881] w-max">
            Food
          </span>
          <h3 className="text-[18px] font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[12px]">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-[20px]">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-3 border-lightgray object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className="px-[8px] py-[3px] rounded-[10px] text-[12px] text-white bg-[#ff7887] w-max">
            Fashion
          </span>
          <h3 className="text-[18px] font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[12px]">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
