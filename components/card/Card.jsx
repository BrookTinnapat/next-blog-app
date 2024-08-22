import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="mb-[50px] flex items-center gap-[50px]">
      <div className="flex-1 h-[350px] relative">
        <Image src="/p1.jpeg" alt="" fill className="image" />
      </div>
      <div className="flex-1 flex flex-col gap-[30px]">
        <div className="detial">
          <span className="text-gray-400"></span>
          <span className="text-red-500 font-bold"></span>
        </div>
        <Link href="/">
          <h1 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            officiis totam sed repellat iure ut necessitatibus veniam nisi,
            ducimus libero mollitia modi impedit qui error facere eius quae
            nobis dolores?
          </h1>
          <Link href="/">Read More</Link>
        </Link>
      </div>
    </div>
  );
};

export default Card;
