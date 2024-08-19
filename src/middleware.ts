import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/signin", "/signup", "/forgot-password"];

const middleware = async (req: NextRequest) => {
  const url = req.nextUrl.clone();
  const { pathname } = url;
  const token = req.cookies.get("token") ?? "";
  const isProtected = protectedRoutes.includes(pathname);

  if (pathname == "/" && !token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (token && isProtected) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.ico|logo.png|logo.svg).*)",
    "/",
  ],
};
