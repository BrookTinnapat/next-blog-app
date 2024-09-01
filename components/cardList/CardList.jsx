"use client";

import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { PaginationComponent } from "../pagination/Pagination";

const CardList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchPosts = async (page) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts?page=${page}`
      );
      const data = await response.json();
      console.log("API response data:", data);
      setPosts(data.posts || []);
      setCurrentPage(data.pagination?.currentPage || 1);
      setTotalPages(data.pagination?.totalPages || 0);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  return (
    <div className="flex-[5]">
      {posts.map((item, index) => (
        <Card item={item} key={index} />
      ))}
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={fetchPosts}
      />
    </div>
  );
};

export default CardList;
