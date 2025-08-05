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
  title: "Konexión K2",
  description: "Afiliación, productos y monedas con inteligencia de red.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClass =
    `${geistSans?.variable || ""} ${geistMono?.variable || ""} antialiased`;

  return (
    <html lang="es">
      <body className={fontClass}>{children}</body>
    </html>
  );
}
