import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "creadev.",
  description: "Fərdi proqram həlləri — saytlar, funksional platformalar, mobil tətbiqlər.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
    <body className={`${poppins.variable} antialiased`}>
    <Navbar/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
