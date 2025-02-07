//using id fetch and print data check here

import { user } from "@/util/db";
import { NextResponse } from "next/server";


export function GET(req, content) {
    const userData = user.filter((item) => item.id == content.params.id);
    return NextResponse.json(userData.length === 0 ? { result: "no data found" } : { result: userData })
}