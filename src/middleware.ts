import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // αφήνουμε next, api, assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // αν είναι root, στείλε στο /el
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/el", req.url));
  }

  // αν δεν ξεκινάει με /el ή /en, στείλε /el + path
  if (!pathname.startsWith("/el") && !pathname.startsWith("/en")) {
    return NextResponse.redirect(new URL(`/el${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
