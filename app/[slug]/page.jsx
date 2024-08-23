import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    <div className="">
      <div className="gap-[50px]">
        <div className="">
          <h1 className="text-[32px] lg:text-[64px] mt-[50px] font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            iste eligendi.
          </h1>
          <div className="mt-5 rounded-md justify-center items-center hidden md:flex">
            <Image
              src="/p2.jpeg"
              alt="image"
              width={800}
              height={500}
              className="max-w-[1000px] max-h-[500px] object-cover"
            />
          </div>
          <div className="flex mt-5 items-center gap-[20px]">
            <div className="w-[50px] h-[50px] relative">
              <Image src="/p1.jpeg" alt="image" fill className="rounded-full" />
            </div>

            <div className="flex flex-col gap-[5px] pt-4">
              <span className="text-[20px] font-[500] text-gray-400">
                Username
              </span>
              <span className="date">01.01.2024</span>
            </div>
          </div>
        </div>
        <div className="flex gap-[50px]">
          <div className="flex-[5] mt-[60px]">
            <div className="text-[20px] font-[300] mb-[20px]">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                labore amet nemo tempora dicta? Quos recusandae quasi alias
                numquam excepturi natus obcaecati eum asperiores porro, labore
                illum ullam eos dolor!
              </p>
              <h5 className="font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                cumque.
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                magni ipsum quas delectus, ratione consequuntur nostrum impedit!
                Amet eius asperiores quo vitae eveniet maxime culpa labore odio
                optio? Esse, exercitationem?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                incidunt temporibus deserunt sequi autem maxime, non, deleniti
                doloribus recusandae quae veritatis esse sunt dolore perferendis
                vitae? Possimus maiores vitae unde!
              </p>
            </div>
            <Comments />
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
