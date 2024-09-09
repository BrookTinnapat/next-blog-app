import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className="">
      <div className="gap-[50px]">
        <div className="">
          <h1 className="text-[32px] lg:text-[64px] mt-[50px] font-bold">
            {data?.title}
          </h1>
          <div className="mt-5 rounded-md justify-center items-center hidden md:flex">
            <img
              src={data?.img}
              alt="image"
              className="max-w-[1000px] max-h-[500px] object-cover"
            />
          </div>
          <div className="flex mt-5 items-center gap-[20px]">
            <div className="w-[50px] h-[50px] relative">
              <Image src="/p1.jpeg" alt="image" fill className="rounded-full" />
            </div>

            <div className="flex flex-col gap-[5px] pt-4">
              <span className="text-[20px] font-[500] text-gray-400">
                {data?.user.name}
              </span>
              <span className="date">{data?.createdAt.split("T")[0]}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-[50px]">
          <div className="flex-[5] mt-[60px]">
            <div
              className="text-[20px] font-[300] mb-[20px]"
              dangerouslySetInnerHTML={{ __html: data?.desc }}
            ></div>
            <Comments postSlug={slug} />
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
