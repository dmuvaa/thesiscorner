/** @format */

import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Metadata } from "next";
import SideNav from "../components/Sidenav";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    default: "Dashboard",
    absolute: "Dashboard",
  },
};
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const user = {
    name: "John Doe",
    email: "john@gmail.com",
    role: "admin",
  };
  return (
    <section>
      <AdminNavbar user={user} />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </section>
  );
}
