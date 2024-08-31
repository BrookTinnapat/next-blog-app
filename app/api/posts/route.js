import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

// GET POST DATA
export async function GET(req) {
  const { searchParams } = new URL(req.url);

  // Parse the page parameter, default to 1 if not provided
  const page = parseInt(searchParams.get("page") || "1", 10);

  const POST_PER_PAGE = 4;

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
    });

    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Fetching Failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
