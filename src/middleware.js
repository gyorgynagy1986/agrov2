import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'srb', 'hu'];
const defaultLocale = 'hu';

function getLocale(request) {
  const negotiator = new Negotiator({ headers: request.headers });
  const languages = negotiator.languages();
  return match(languages, locales, defaultLocale) || defaultLocale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip redirect if on the root path `/` (default to Hungarian)
  if (pathname === '/') {
    return NextResponse.next();
  }

  const hasLocalePrefix = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect if no locale prefix is in the pathname
  if (!hasLocalePrefix) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
};
