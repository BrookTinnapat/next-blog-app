import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify(
        { message: "Fetching data error" },
        {
          status: 500,
          error: error,
        }
      )
    );
  }
}
