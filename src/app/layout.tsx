"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import React, { useEffect, useState } from "react";
import {SessionProvider} from "next-auth/react";
import {NextUIProvider} from '@nextui-org/react'
import ToasterContext from "@/app/api/contex/ToasetContex";

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
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light">
              <NextUIProvider>
                <ToasterContext />
                <Header />
                {children}
                <ScrollToTop />
                <Footer />
                <ScrollToTop />
              </NextUIProvider>
            </ThemeProvider>
          </SessionProvider>
      </body>
    </html>
  );
}
