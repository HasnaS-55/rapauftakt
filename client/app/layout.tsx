// src/app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/src/components/shared/header"
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const nohemi = localFont({
  src: [
    { path: "./fonts/Nohemi-Thin.woff",      weight: "100", style: "normal" },
    { path: "./fonts/Nohemi-Light.woff",     weight: "200", style: "normal" },
    { path: "./fonts/Nohemi-Regular.woff",   weight: "400", style: "normal" },
    { path: "./fonts/Nohemi-Medium.woff",    weight: "500", style: "normal" },
    { path: "./fonts/Nohemi-SemiBold.woff",  weight: "600", style: "normal" },
    { path: "./fonts/Nohemi-Bold.woff",      weight: "700", style: "normal" },
    { path: "./fonts/Nohemi-ExtraBold.woff", weight: "800", style: "normal" },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`font-sans ${geist.variable} ${nohemi.variable}`}>
      <body>
        <Header />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}