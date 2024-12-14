import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SectionProvider from "../contexts/SectionProvider";
import ProjectProvider from "../contexts/ProjectContext";
import { SanityLive } from "@/sanity/lib/live";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tawsif's Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        suppressHydrationWarning
      >
        <SectionProvider>
          <ProjectProvider>{children}</ProjectProvider>
        </SectionProvider>
        <SanityLive />
      </body>
    </html>
  );
}
