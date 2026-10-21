import { NextResponse } from "next/server";
import { getPost } from "@/lib/blog-queries";

export async function GET(req, { params }) {
  const data = getPost(params.slug);
  if (!data) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
  return NextResponse.json(data);
}
