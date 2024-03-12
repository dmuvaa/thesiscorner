/** @format */

import React from "react";

const SideNav = () => {
  return (
    <nav>
      <div className="border rounded w-64 mx-4 mt-8 md:h-screen">
        <div className="grid grid-rows-3 gap-4 grid-flow-col md:grid-rows-none">
          <div className="py-4">
            <div className="px-4 py-2 row-span-3 auto-rows-max hover:bg-gray-300">
              <a href="/dashboard">My </a>
            </div>
            <div className="px-4 py-2 hover:bg-gray-300">
              <a href="/dashboard/profile">My Profile</a>
            </div>
            <div className="px-4 py-2 hover:bg-gray-300">
              <a href="/dashboard/orders">My Orders</a>
            </div>
            <div className="px-4 py-2 hover:bg-gray-300">
              <a href="/dashboard/orders">My Orders</a>
            </div>
            <div className="px-4 py-2 hover:bg-gray-300">
              <a href="/dashboard/orders">My Orders</a>
            </div>
            <div className="px-4 py-2 hover:bg-gray-300">
              <a href="/dashboard/orders">My Orders</a>
            </div>
            <div className="px-4 py-2 hover:bg-gray-300">
              <a href="/dashboard/orders">My Orders</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
