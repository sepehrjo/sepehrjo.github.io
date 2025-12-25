import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sepehr Jokanian | AI Developer & ML Specialist",
  description: "Portfolio of Sepehr Jokanian, an AI/ML specialist and Computer Science graduate specializing in Artificial Intelligence, Computer Vision, and NLP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
          <p>© {new Date().getFullYear()} Sepehr Jokanian. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
