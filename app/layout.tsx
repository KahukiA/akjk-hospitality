import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-[#F7F3EA] text-[#1E1E1E] antialiased">
        {children}
      </body>
    </html>
  );
}
