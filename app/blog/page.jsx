import React from "react";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const BlogPage = () => {
  return (
    <div>
      <h1 className="bg-red-400 py-4 mt-6 text-white text-3xl font-bold text-center capitalize">
        Style Blog
      </h1>
      <div className="flex gap-[50px]">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
