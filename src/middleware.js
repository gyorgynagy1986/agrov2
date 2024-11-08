import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "srb", "hu"]; // Supported locales
const defaultLocale = "hu"; // Default language for root domain

function getLocale(request) {
  const negotiator = new Negotiator({ headers: request.headers });
  const languages = negotiator.languages();

  // Match the languages with the supported locales, or default to `defaultLocale`
  return match(languages, locales, defaultLocale) || defaultLocale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect root path '/' to default locale if no prefix is provided
  if (pathname === "/") {
    request.nextUrl.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  const hasLocalePrefix = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // Redirect if no locale is in the pathname
  if (!hasLocalePrefix) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
