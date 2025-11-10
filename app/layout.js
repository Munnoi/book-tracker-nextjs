import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Tracker",
  description: "App that tracks the books you've read",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`h-full min-h-screen bg-linear-to-br from-primary to-secondary bg-no-repeat ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
