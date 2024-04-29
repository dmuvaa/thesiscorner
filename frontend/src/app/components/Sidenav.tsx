/** @format */

import React from "react";
import { auth } from "@/auth";

const SideNav = async () => {
  return (
    <nav>
      <div className="border rounded mx-4 mt-8">
        <div className="grid grid-rows-3 gap-4 grid-flow-col md:grid-rows-none">
          <div className="py-4">
            <div className="px-4 py-2 hover:bg-gray-300">
              <a href="/dashboard/profile">My Profile</a>
            </div>
            <div className="px-4 py-2 hover:bg-gray-300">
              <a href="/dashboard/orders">My Orders</a>
            </div>
            <div className="px-4 py-2 hover:bg-gray-300">
              <a href="/dashboard/settings">My Settings</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
