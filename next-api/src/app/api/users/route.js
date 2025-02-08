//util-> db.js , fetch data here and print on    localhost:3000/api/user


import { user } from "@/util/db";
import { NextResponse } from "next/server";


export function GET() {
    const data = user;
    return NextResponse.json(data)
}

export async function POST(req) {
    const payload = await req.json();
    console.log(payload.name)

    if (!payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ Result: "require field is not found", success: false }, { status: 404 })

    }
    return NextResponse.json({ Result: "New user created", success: true }, { status: 201 })
}
