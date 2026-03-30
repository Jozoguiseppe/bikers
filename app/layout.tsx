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

const metaTitle =
  "Bikers Cafe Dubrovnik | Best Biker Cafe & Motorcycle Stop in Dubrovnik";
const metaDescription =
  "Visit Bikers Cafe Dubrovnik, the best biker-friendly cafe in Dubrovnik. A premium motorcycle stop with great coffee, biker atmosphere, amazing bikes, and a legendary road vibe.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0A0A0C] text-[#F5F5F5] antialiased">
        {children}
      </body>
    </html>
  );
}
