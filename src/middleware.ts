// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// This is the default next-intl middleware
const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only detect language at the root (no locale in URL yet)
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') || '';
    const firstLang = acceptLanguage.split(',')[0]?.trim().toLowerCase();

    let locale = 'en';
    if (firstLang.startsWith('es')) {
      locale = 'es';
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // For all other paths, let next-intl handle locale routing
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for:
  // - /api, /trpc, /_next, /_vercel
  // - files containing a dot (e.g. favicon.ico)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
