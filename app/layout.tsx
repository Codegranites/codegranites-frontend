import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/navs/Navbar";
import Footer from "@/components/footer/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Code Granites",
  description: "Illuminating Ideas and Forging Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className={workSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
