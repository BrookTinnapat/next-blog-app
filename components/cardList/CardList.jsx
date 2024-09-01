"use client";
import React from "react";
import Card from "../card/Card";
import { PaginationComponent } from "../pagination/Pagination";

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

  return (
    <div className="flex-[5]">
      {data?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
      {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      {/* <div className="flex justify-between">
        <Pagination>
          <Link href="/login">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious className="bg-red-700 w-40 text-white dark:text-white" />
              </PaginationItem>
            </PaginationContent>
          </Link>
        </Pagination>

        <Pagination>
          <Link href="#">
            <PaginationContent>
              <PaginationItem>
                <PaginationNext className="bg-red-700 w-40 text-white dark:text-white" />
              </PaginationItem>
            </PaginationContent>
          </Link>
        </Pagination>
      </div> */}
      <PaginationComponent pageCount={10} />
    </div>
  );
};

export default CardList;
