import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/styles/index.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shopify Premium Development Services - Tech Integrations",
  description: "Explore Shopify Premium Development in the USA. Elevate online presence with expert web design, store configuration, and module development.",
  icons: {
    icon: "/favicon.ico",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
