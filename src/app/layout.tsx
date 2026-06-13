/**
 * Prompt: improve overall GUI design — fonts, metadata, chunk recovery shell.
 */
import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { ChunkRecovery } from "@/components/ChunkRecovery";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BME — Brainmaster Engine",
  description: "Brain tissue selector and knowledge-graph pipeline for drug and disease research",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className={sans.className}>
        <ChunkRecovery />
        {children}
      </body>
    </html>
  );
}
