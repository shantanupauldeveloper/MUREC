import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Preloader from "./components/Preloader";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MUREC | Madhusudan Urban Real Estate Collection",
  description:
    "For over seven decades, we stood for perseverance, integrity, and nation-building through enterprise. Discover the MUREC Collection.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-ink text-porcelain font-sans"
        suppressHydrationWarning
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
