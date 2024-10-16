import { NextRequest, NextResponse } from "@/node_modules/next/server";

export async function PUT(request: Request) {
    return NextResponse.json({ error: 'PUT Internal Server Error' }, { status: 500 })
}

export async function DELETE(request: Request) {
    return NextResponse.json({ method:'DELETE',success: 'Internal Server Error' }, { status: 500 })
}