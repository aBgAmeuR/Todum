import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  // 2 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(2, '10 s'),
});

export const config = {
  matcher: '/',
};

export default async function middleware(request: NextRequest) {
  if (request.method === 'POST') {
    const ip = request.ip ?? '127.0.0.1';
    const { success, pending, limit, reset, remaining } = await ratelimit.limit(ip);
    return success ? NextResponse.next() : NextResponse.redirect(new URL('/blocked', request.url));
  }
}
