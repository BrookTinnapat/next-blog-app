import React from "react";
import Card from "../card/Card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async () => {
  const data = await getData();

  // const POST_PER_PAGE = 2;

  // const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  // const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="flex-[5]">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
      {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      <Pagination>
        <PaginationContent className="flex justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="bg-red-700 w-40 text-white dark:text-white"
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href="#"
              className="bg-red-700 w-40 text-white dark:text-white"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CardList;
