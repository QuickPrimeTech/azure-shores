import type { Metadata } from "next";
import { Cinzel, Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/layouts/navbar";
import { Footer } from "@/layouts/footer";

const geistSans = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const geistMono = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azure Shores | Luxury Seafood Restaurant in Seychelles",
  description:
    "Dine at Azure Shores, a premier beachfront restaurant in Seychelles offering gourmet seafood, ocean views, and unforgettable coastal experiences.",
  openGraph: {
    title: "Azure Shores | Luxury Seafood Restaurant in Seychelles",
    description:
      "Experience luxury dining by the ocean with fresh seafood, water sports, and unforgettable coastal adventures.",
    url: "https://azure-shores.com",
    siteName: "Azure Shores",
    images: [
      {
        url: "https://res.cloudinary.com/dhlyei79o/image/upload/v1750620816/the-wedding-photographer-seychelles-laurent-levy-mahe-studio-digifot-A-720x720_qbiitb.jpg",
        width: 1200,
        height: 630,
        alt: "Azure Shores Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azure Shores",
    description:
      "Experience luxury dining by the ocean with fresh seafood, water sports, and unforgettable coastal adventures.",
    images: [
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750620816/the-wedding-photographer-seychelles-laurent-levy-mahe-studio-digifot-A-720x720_qbiitb.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-secondary`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
