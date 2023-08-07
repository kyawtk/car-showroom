import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MortorCycle Showroom",
  description: "Find your dream bike here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar></Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
