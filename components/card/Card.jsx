import React from "react";
import Link from "next/link";

const Card = ({ item, key }) => {
  return (
    <Link href={`/posts/${item.slug}`}>
      <div
        className="my-[50px] flex items-center gap-[50px] max-w-[968px] hover:scale-105 hover:transition hover:duration-500"
        key={key}
      >
        <div className="flex-1 h-[350px] relative hidden lg:flex object-cover">
          <img src={item.img} alt="image" className="object-cover rounded-md" />
        </div>
        <div className="flex-1 flex flex-col gap-[30px]">
          <div className="detial">
            <span className="text-gray-400">
              {item.createdAt.substring(0, 10)} -{" "}
            </span>
            <span className="text-red-700 font-semibold">{item.catSlug}</span>

            <h1 className="text-2xl font-bold hover:underline">{item.title}</h1>
          </div>
          {/* <Link href={`/posts/${item.slug}`}> */}
          <span
            dangerouslySetInnerHTML={{
              __html: item?.desc.substring(0, 400) + "...",
            }}
          ></span>
          {/* </Link> */}
          <Link
            href={`/posts/${item.slug}`}
            className="hover:underline w-[90px] flex justify-center text-red-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Card;
