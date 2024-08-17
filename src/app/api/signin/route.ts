import users from "@/mock/users";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email, password } = data;

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    } else {
      return NextResponse.json(user, { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to sign in" }, { status: 500 });
  }
}
