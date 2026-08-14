import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  metadataBase: new URL("https://portfolio-tan-one-84.vercel.app"),
  title: "Mihretu Hizkel | Full-Stack Web & Android Developer",
  description:
    "Portfolio of Mihretu Hizkel — Full-Stack Web & Android Developer specializing in Kotlin, Jetpack Compose, React, Next.js, Node.js, Java, and Database Architecture.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Mihretu Hizkel | Full-Stack Web & Android Developer",
    description:
      "Portfolio of Mihretu Hizkel — Full-Stack Web & Android Developer specializing in Kotlin, Jetpack Compose, React, Next.js, Node.js, Java, and Database Architecture.",
    url: "https://portfolio-tan-one-84.vercel.app/",
    siteName: "Mihretu Hizkel Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Mihretu Hizkel - Full-Stack Web & Android Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihretu Hizkel | Full-Stack Web & Android Developer",
    description:
      "Portfolio of Mihretu Hizkel — Full-Stack Web & Android Developer specializing in Kotlin, Jetpack Compose, React, Next.js, Node.js, Java, and Database Architecture.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        {/* FOUC prevention: apply theme class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');document.documentElement.classList.remove('dark')}else if(t==='dark'||!window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.classList.add('dark');document.documentElement.classList.remove('light')}else{document.documentElement.classList.add('light');document.documentElement.classList.remove('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-full flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
