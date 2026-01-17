import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans", 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WoodenScale AI - Your AI Investment Banker",
  description:
    "AI-powered fundraising platform that handles the heavy lifting of fundraising — from pitch decks to investor matching",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${manrope.variable}
          ${geistSans.variable}
          ${geistMono.variable}
          font-sans
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
