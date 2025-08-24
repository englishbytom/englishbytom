import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import LocalizedNav from "@/components/nav/localized";
import Footer from "@/components/footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
});

export const metadata: Metadata = {
  title: "English by Tom",
  description: "Learn English with Tom",
};

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`font-sans ${roboto.className}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col items-center h-screen">
        <NextIntlClientProvider>
          <LocalizedNav />
          <article className="prose md:prose-md lg:prose-lg flex flex-col justify-start container-screen grow">
            {children}
          </article>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

