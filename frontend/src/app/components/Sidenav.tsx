import React from 'react';

const SideNav = () => {
    return (
      <nav className="bg-gray-200 w-64 h-screen">
        <ul className="py-4">
          <li className="px-4 py-2 hover:bg-gray-300">
            <a href="/dashboard">My Dashboard</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-300">
            <a href="/dashboard/profile">My Profile</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-300">
            <a href="/dashboard/orders">My Orders</a>
          </li>
        </ul>
      </nav>
    );
};

export default SideNav;