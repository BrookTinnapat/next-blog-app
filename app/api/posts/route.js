import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

// GET POST DATA with Pagination
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = 2; // Number of posts per page

    const skip = (page - 1) * limit;
    const take = limit;

    const posts = await prisma.post.findMany({
      skip,
      take,
      orderBy: {
        createdAt: "asc", // Ensure this field exists
      },
    });

    const totalPosts = await prisma.post.count();
    const totalPages = Math.ceil(totalPosts / limit);

    return new NextResponse(
      JSON.stringify({
        posts,
        pagination: {
          currentPage: page,
          totalPages,
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Fetching Failed",
        posts: [],
        pagination: {
          currentPage: 1,
          totalPages: 0,
        },
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
