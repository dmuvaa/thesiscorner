/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Thesis Corner",
    default: "Thesis Corner",
    absolute: "Thesis Corner",
  },
  description: "Your one-stop shop for all things Writing and Editing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <SessionProvider >
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    // </SessionProvider>
  );
}
// className={inter.className}
