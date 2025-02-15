"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import React from "react";
import {SessionProvider} from "next-auth/react";
import {HeroUIProvider} from "@heroui/react";
import ToasterContext from "@/app/api/contex/ToasetContex";
import {StartBBMain} from "@/components/startupBB";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">

      <head><title>Best Brain</title>
        <link rel="icon" href="/images/favicon.ico"/>
      </head>

      <body className={`dark:bg-[#000000] w-full bg-zumthor ${inter.className}`} suppressHydrationWarning={true}>
        <script src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US"></script>

        <gen-search-widget
          configId="328514e9-37ca-4b93-9cf4-001ec97a271f"
          triggerId="searchWidgetTrigger">
        </gen-search-widget>

        <input placeholder="Search here" id="searchWidgetTrigger" />
      <SessionProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light">
              <HeroUIProvider>
                <StartBBMain></StartBBMain>
              </HeroUIProvider>
            </ThemeProvider>
          </SessionProvider>
      </body>
    </html>
  );
}

/*
<ToasterContext />
                <Header />
                {children}
                <ScrollToTop />
                <Footer />
                <ScrollToTop />
 */