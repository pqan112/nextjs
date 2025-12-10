import { NextResponse, NextRequest } from "next/server";
import { authSession } from "./lib/auth-utils";

const privatePaths = ["/home", "update-profile"];
const unAuthPaths = ["/sign-in", "sign-up"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session = await authSession();
  if (privatePaths.some((pp) => pathname.startsWith(pp)) && !session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (unAuthPaths.some((up) => pathname.startsWith(up)) && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/", "/sign-in", "/update-profile"],
};
