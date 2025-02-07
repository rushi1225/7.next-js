//util-> db.js , fetch data here and print on    localhost:3000/api/user


import { user } from "@/util/db";
import { NextResponse } from "next/server";
import { Result } from "postcss";


export function GET() {
    const data = user;
    return NextResponse.json(data)
}

export function POST(req, res) {
    return NextResponse.json({ Result: "hello post method" })
}
