import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SectionProvider from "../contexts/SectionProvider";
import ProjectProvider from "../contexts/ProjectProvider";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import NavigationProvider from "@/contexts/NavigationProvider";
import TopNavigation from "@/components/TopNavigation";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Tawsif's Portfolio",
  description: "Personal portfolio website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${outfit.variable} antialiased min-h-screen`}
        suppressHydrationWarning
      >
        <SectionProvider>
          <NavigationProvider>
            <ProjectProvider>
              <TopNavigation />
  
                {children}
  
            </ProjectProvider>
          </NavigationProvider>
        </SectionProvider>
        <SanityLive />
      </body>
    </html>
  );
}
