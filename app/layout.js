import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Book Tracker",
  description: "App that tracks the books you've read",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen antialiased ${inter.variable} font-sans`}
      >
        {/* Animated mesh gradient background */}
        <div className="mesh-gradient" />
        
        {/* Main content */}
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
