// src/app/layout.tsx
import localFont from "next/font/local";

const nohemi = localFont({
  src: [
    { path: "./fonts/Nohemi-Thin.woff",  weight: "100", style: "normal" },
    { path: "./fonts/Nohemi-Light.woff",  weight: "200", style: "normal" },
    { path: "./fonts/Nohemi-Regular.woff",  weight: "400", style: "normal" },
    { path: "./fonts/Nohemi-Medium.woff",   weight: "500", style: "normal" },
    { path: "./fonts/Nohemi-SemiBold.woff", weight: "600", style: "normal" },
    { path: "./fonts/Nohemi-Bold.woff",     weight: "700", style: "normal" },
    { path: "./fonts/Nohemi-ExtraBold.woff",  weight: "800", style: "normal" },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nohemi.variable}>
      <body>{children}</body>
    </html>
  );
}