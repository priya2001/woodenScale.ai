import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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
          ${inter.variable}
          font-sans
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
