/** @format */

import React from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <div>
          <button>Dashboard</button>
          <button>Profile</button>
          <button>Settings</button>
        </div>
      </nav>

      {children}
    </section>
  );
}
