import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vrushal Patil | AI & Systems Developer",
  description: "Personal portfolio of Vrushal Patil, AI & Systems Developer based in Pune, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-accent/30 selection:text-text-hi">{children}</body>
    </html>
  );
}
