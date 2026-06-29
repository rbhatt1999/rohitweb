import { NextResponse } from "next/server";

// Waitlist join endpoint. Intentionally does NOT persist anything — it just
// validates the email and acknowledges the join.
export async function POST(req) {
  let email = "";
  try {
    const body = await req.json();
    email = (body?.email || "").trim();
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  // No storage — we just confirm the join.
  return NextResponse.json({ ok: true, message: "You're on the waitlist." });
}
