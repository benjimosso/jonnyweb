import type { Metadata } from "next";
import {  EB_Garamond } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const garamond = EB_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  title: "Dr. Lavie",
  description: "Website del Doctor Lavie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
