import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageTransition } from "@/src/components/PageTransition";
import { PageRail } from "@/src/components/PageRail";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Portifolio | Front-end Developer",
  description: "Portifolio pessoal com foco em desenvolvimento front-end.",
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
      <body className="min-h-full flex flex-col">
        <PageRail />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
