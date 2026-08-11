import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import CursorGlow from "@/components/effects/CursorGlow";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yared Abebe — Software Engineer",
  description:
    "Portfolio of Yared Abebe, a software engineer building modern digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
  <CursorGlow />
  {children}
</body>
    </html>
  );
}