import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sudha Satpathy | Software Developer",
  description: "Software developer with experience in MERN stack development, enterprise software implementation, AI workflow automation, and business process optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={cn(inter.className, "antialiased selection:bg-blue-600/20 selection:text-blue-600 bg-slate-50 text-slate-900 transition-colors duration-300")}>
        {children}
      </body>
    </html>
  );
}
