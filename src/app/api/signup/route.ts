import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to sign up" }, { status: 500 });
  }
}
