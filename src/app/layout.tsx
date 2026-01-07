import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Studio One — Tattoo Studio & Artist Portfolio Template",
  description:
    "Studio One is a modern, dark-mode tattoo portfolio template built with Next.js. Showcase your work, display pricing, and accept booking requests with a clean, conversion-focused design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
