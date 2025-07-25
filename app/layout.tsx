import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "phuture.",
  description: "landing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/phuture7.jpg" />
      <body
        className={`antialiased bg-black`}
      >
        {children}
        <GoogleAnalytics gaId="G-KPKNEZS214" /> 
      </body>
    </html>
  );
}
