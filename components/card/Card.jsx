import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div
      className="my-[50px] flex items-center gap-[50px] max-w-[968px]"
      key={key}
    >
      <div className="flex-1 h-[350px] relative hidden lg:flex">
        <Image
          src="/p1.jpeg"
          alt="image"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex-1 flex flex-col gap-[30px]">
        <div className="detial">
          <span className="text-gray-400">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-red-700 font-semibold">{item.catSlug}</span>
          <Link href={`/posts/${item.slug}`}>
            <h1>{item.title}</h1>
          </Link>
        </div>
        <Link href="/">
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            officiis totam sed repellat iure ut necessitatibus veniam nisi,
            ducimus libero mollitia modi impedit qui error facere eius quae
            nobis dolores?
          </span>
        </Link>
        <Link
          href={`/posts/${item.slug}`}
          className="underline underline-offset-2 w-[90px] flex justify-center text-red-700"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
