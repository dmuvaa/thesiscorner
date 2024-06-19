/** @format */

import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Navbar";
import { Mulish } from "next/font/google";
// import { SessionProvider } from "next-auth/react";

// const inter = Inter({ subsets: ["latin"] });
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ['400', '500', '600', '700', '800', '900'],
});

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
    <html lang="en" className={mulish.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
    // </SessionProvider>
  );
}
// className={inter.className}
