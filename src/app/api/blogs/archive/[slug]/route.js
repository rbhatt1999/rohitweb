import { NextResponse } from "next/server";
import { listArchivePosts } from "@/lib/blog-queries";

export async function GET(req, { params }) {
  const page = req.nextUrl.searchParams.get("page");
  const search = req.nextUrl.searchParams.get("search");
  return NextResponse.json(listArchivePosts(params.slug, page, search));
}
