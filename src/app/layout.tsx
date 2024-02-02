import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Air Tickets",
  description: "Book your tickets quickly and easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
