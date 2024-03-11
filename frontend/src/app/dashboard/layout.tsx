/** @format */

import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Metadata } from "next";

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
      <AdminNavbar user={user}/>
      <nav>
        <ul>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/dashboard/profile">Profile</a>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
