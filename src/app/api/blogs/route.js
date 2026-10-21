import { NextResponse } from "next/server";
import { listPosts } from "@/lib/blog-queries";

export async function GET(req) {
  const page = req.nextUrl.searchParams.get("page");
  const search = req.nextUrl.searchParams.get("search");
  const all = req.nextUrl.searchParams.get("all");
  return NextResponse.json(listPosts({ page, search, all }));
}
