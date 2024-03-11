/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thesis Corner",
  description: "Your one-stop shop for all things Writing and Editing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </>
    // <html>
    //   <head>
    //     <Navbar />
    //   </head>
    //   <body>
    //     <div className="flex flex-col min-h-screen items-stretch">
    //       <div className="flex-grow bg-gradient-to-r from-[#6c00c8] from-10% to-[#19d6e1] to-98% ">
    //         <main className="flex-shrink-0 flex items-center justify-center mt-20">
    //           {children}
    //         </main>
    //       </div>
    //       <div className="flex-shrink-0">
    //         <Navbar />
    //       </div>
    //     </div>
    //   </body>
    // </html>
  );
}
// className={inter.className}
