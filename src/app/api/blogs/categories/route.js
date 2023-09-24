import { NextResponse } from "next/server";
import categoryData from "../category";


export async function GET(req) {
    let cat = req.nextUrl.searchParams.get("cat")
    let category = categoryData.find((item) => {
        return item.slug === cat;
    });
  return NextResponse.json(category);
}

