import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <>
      <div className="mt-[30px]">
        <h1 className="text-[36px] md:text-[48px] lg:text-[96px] font-bold">
          <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
        </h1>
        <div className="mt-[60px]items-center gap-[50px]">
          <div className="flex-1 h-[500px] relative">
            <Image
              src="/p1.jpeg"
              alt="image"
              fill
              className="flex-1 h-[500px] flex-col object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[20px]">
            <h1 className="text-[40px]">
              Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
            </h1>
            <p className="text-[20px] font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, quam nisi magni ea laborum inventore voluptatum
              laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
              quisquam! Harum unde sit culpa debitis.
            </p>
            <button className="px-[20px] py-[16px] rounded-xl max-w-fit bg-red-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
