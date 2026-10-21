import { NextResponse } from "next/server";
import { listCategoryPosts } from "@/lib/blog-queries";

export async function GET(req, { params }) {
  const page = req.nextUrl.searchParams.get("page");
  const search = req.nextUrl.searchParams.get("search");
  const data = listCategoryPosts(params.slug, page, search);
  if (!data) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }
  return NextResponse.json(data);
}
