import "./globals.css";
import { Lato } from "next/font/google";
import NavBar from "../components/NavBar/NavBar";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import NoticeBubble from "../components/NoticeBubble";
import Footer from "../components/Footer";
import Script from "next/script";


const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "A Simple Company",
  description: "A minimal landing experience built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,500,1,0"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-REW2WYW95H"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-REW2WYW95H', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="bg-background text-foreground font-sans">
        <NavBar />
        <SocialLinks />
        <NoticeBubble />
        {children}
      <Footer />
      </body>
    </html>
  );
}
