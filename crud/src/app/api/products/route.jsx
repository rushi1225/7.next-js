import mongoose from "mongoose";
import { connectionStr } from "@/db/db"
import { NextResponse } from "next/server";
import { Product } from "@/db/model/product";


export async function GET() {
    let data = []
    try {
        
        await mongoose.connect(connectionStr)
        data = await Product.find()
        console.log(data)
    } catch (error) {
        data = { success: false }
    }


    return NextResponse.json({ data })
}