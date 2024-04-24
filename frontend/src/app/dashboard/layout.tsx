/** @format */

import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Metadata } from "next";
import SideNav from "../components/Sidenav";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    default: "Dashboard",
    absolute: "Dashboard",
  },
};
export default function DashboardLayout({
  children,
  params: { session, ...params },
}: {
  children: React.ReactNode;
  params: {
    session: any; // Replace 'any' with the actual type of 'session'
    [key: string]: any;
  };
}) {
  const user = {
    name: "John Doe",
    email: "john@gmail.com",
    role: "admin",
  };

  
  return (
  <SessionProvider session={session}>
    <section>
      <AdminNavbar user={user} />
      <div className="max-h-screen grid grid-cols-1 md:grid-cols-4 gap-4 mx-12 ">
        <div className="">
          <SideNav />
        </div>
        <div className="col-span-3 p-6  md:p-12 border md:min-h-screen mx-8 my-8">
          
            {children}
          
        </div>
      </div>
    </section>
    </SessionProvider >
  );
}
