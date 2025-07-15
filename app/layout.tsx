import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
