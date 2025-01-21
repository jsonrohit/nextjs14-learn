'use client'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // console.log(request,'request---------');
  //   return request.next()
  // return NextResponse.redirect(new URL('/posts', request.url))
  // return request
}
 
// See "Matching Paths" below to learn more
export const config = {
  // matcher: ['/posts', '/login'],
  // matcher: ['/posts/:path*'],
}