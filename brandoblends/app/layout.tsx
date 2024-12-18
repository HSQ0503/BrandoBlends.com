import type { Metadata } from "next";
import { Source_Sans_3 } from 'next/font/google';
import "./globals.css";
import { Navbar } from "./_Components/Navbar";
import Footer from "./_Components/Footer";

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BrandoBlends",
  description: "Style and Confidence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans3.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
