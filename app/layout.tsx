import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const minimaxDisplayFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const minimaxBodyFont = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const minimaxMonoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manuel Jimenez FL | MiniMax",
  description: "MiniMax edition and digital business card for Manuel Jimenez FL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${minimaxDisplayFont.variable} ${minimaxBodyFont.variable} ${minimaxMonoFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
