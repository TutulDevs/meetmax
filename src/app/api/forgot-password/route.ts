import users from "@/mock/users";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email } = data;

    const user = users.find((user) => user.email === email);

    if (!user) {
      return NextResponse.json({ error: "Invalid email" }, { status: 401 });
    } else {
      return NextResponse.json(user, { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to reset email" },
      { status: 500 }
    );
  }
}
