import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layouts/AppSidebar";

import { Inter, Merriweather, Merriweather_Sans, Norican } from "next/font/google";
import Footer from "@/components/layouts/Footer";

const fontSerif = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
});

export const fontSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
});

const norican = Norican({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-norican",
});

const inter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Pofferman",
  description: "Moving from the Netherlands to Australia was a big adventure. It inspired me to start my own poffertjes business! Now, I bring this delicious Dutch treat to your local farmers market, and can’t wait to share the taste of home with you.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <head>
        <ThemeProvider/>
      </head>
      <body
            className={`${norican.variable} ${inter.variable} ${fontSerif.variable} ${fontSans.variable} antialiased w-screen css-selector dark:dark-css-selector`}
            >
        <SidebarProvider>
          <main className="w-full">
            <AppSidebar/>
            <Navbar/>
            {children}
            <Footer/>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
