import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className="flex-[2] mt-[60px]">
      <h2 className="text-gray-500 text-[16px] font-[400]">{"What's hot"}</h2>
      <h1 className="text-[28px] font-bold">Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="text-gray-500 text-[16px] font-[400]">
        Discover by topic
      </h2>
      <h1 className="text-[28px]">Categories</h1>
      <MenuCategories />
      <h2 className="text-gray-500 text-[16px] font-[400]">
        Chosen by the editor
      </h2>
      <h1 className="text-[28px]">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
