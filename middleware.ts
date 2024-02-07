import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export { default } from "next-auth/middleware";
// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req });

//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.nextUrl));
//   }

//   return NextResponse.redirect(new URL("/"));
// }

// // See "Matching Paths" below to learn more
export const config = {
  matcher: ["/friends"],
};
