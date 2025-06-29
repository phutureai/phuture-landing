import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "phuture",
  description: "Landing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/phutureB.jpg" />
      <body
        className={`antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
