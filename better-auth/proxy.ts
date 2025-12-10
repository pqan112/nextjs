import { NextResponse, NextRequest } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

const privatePaths = ["/"];
const unAuthPaths = ["/sign-in", "sign-up"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session = await auth.api.getSession({ headers: await headers() });
  if (privatePaths.some((pp) => pathname.startsWith(pp)) && !session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (unAuthPaths.some((up) => pathname.startsWith(up)) && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/", "/sign-in"],
};
