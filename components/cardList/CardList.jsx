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
const CardList = () => {
  return (
    <>
      <div className="flex-[5]">
        <Card />
        <Card />
        <Card />
        <Card />
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
    </>
  );
};

export default CardList;
