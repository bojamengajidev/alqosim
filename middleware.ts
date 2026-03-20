import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  // target subdomain
  if (host === "blog.masjidalqosim.com") {

    // ❗ izinkan API WordPress tetap jalan
    if (pathname.startsWith("/wp-json")) {
      return NextResponse.next();
    }

    // redirect semua selain API
    return NextResponse.redirect("https://masjidalqosim.com");
  }

  return NextResponse.next();
}