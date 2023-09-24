import { NextResponse } from "next/server";
import categoryData from "../category";


export async function GET(req) {
    let cat = req.nextUrl.searchParams.get("cat") || null;
    let category = null;
    if (cat) {
        category = categoryData.find((category) => category.slug === cat);
    }
  return NextResponse.json(category ? category : categoryData);
}