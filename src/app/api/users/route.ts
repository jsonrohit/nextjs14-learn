import { NextRequest, NextResponse } from "@/node_modules/next/server";

export async function GET(request: Request) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}

export async function POST(request: Request) {
    console.log(request.method,'gdgdfgdfdf');
    return NextResponse.json({ method:'POST',success: 'Internal Server Error' }, { status: 500 })
}