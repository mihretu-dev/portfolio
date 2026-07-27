import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mihretu Hizkel | Full-Stack Web & Software Developer",
  description:
    "Portfolio of Mihretu Hizkel — Full-Stack Web & Software Developer specializing in React, Next.js, Node.js, Java, C++, Database Architecture, and AI Integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="bg-slate-950 text-slate-100 min-h-full flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
