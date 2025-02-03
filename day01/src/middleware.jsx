import { NextResponse } from "next/server";

export function middleware(request) {


    // for all pages login page

    // if (request.nextUrl.pathname != "/admin") {
    //     return NextResponse.redirect(new URL("/admin", request.url))
    // }



    //for specific page to login suppose admin
    return NextResponse.redirect(new URL("/admin", request.url))

}

//conatct page la gele ka te bolen admin login kara
export const config = {
    matcher: ["/contact/:path*"]
}