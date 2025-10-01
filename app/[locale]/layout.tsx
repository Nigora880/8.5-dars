import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import Header from "@/modules/Header";
import Footer from "@/modules/Footer";
import { routing } from "@/i18n/routing";

const WorkSans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NFT market",
  description: "Discover digital art & Collect NFTs",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params:Promise<{locale:string}>;
}>) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
         <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className={`${WorkSans.className} `}
      >
        <NextIntlClientProvider>
          <Header/>
           {children}
           <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
