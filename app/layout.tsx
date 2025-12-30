import "./globals.css";
import { Lato } from "next/font/google";
import NavBar from "../components/NavBar";
import NoticeBubble from "../components/NoticeBubble";
import Footer from "../components/Footer";


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
      <body className="bg-background text-foreground font-sans">
        <NavBar />
        <NoticeBubble />
        {children}
      <Footer />
      </body>
    </html>
  );
}
