import { NextResponse } from "next/server";
import { getSidebarPayload } from "@/lib/blog-queries";

export async function GET() {
  return NextResponse.json(getSidebarPayload());
}
