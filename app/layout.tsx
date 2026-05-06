import type { Metadata } from "next";
import { Inter, Share_Tech, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const labelFont = Share_Tech({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Manuel Jiménez | Realtor",
  description: "Tarjeta digital de Manuel Jiménez, Realtor en My Realty Group.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${displayFont.variable} ${bodyFont.variable} ${labelFont.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
