import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AK&JK Hospitality | Elevating African Hospitality Excellence",
  description:
    "Hospitality consulting, restaurant management, hotel operations, hospitality training, SOP development and luxury guest experience across Africa.",
  keywords: [
    "Hospitality",
    "Restaurant Consulting",
    "Hotel Consulting",
    "Hospitality Training",
    "AK&JK Hospitality",
    "Africa",
    "Luxury Hospitality",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#F7F3EA] text-[#1E1E1E] font-[var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}