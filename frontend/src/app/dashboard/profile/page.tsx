/** @format */

import React from "react";
import Dashboard from "../Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Page",
};

const Profile: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <h1>Profile Page</h1>
      <p>Welcome to your profile page!</p>
      {/* Add your profile information here */}
      <Dashboard />
    </div>
  );
};

export default Profile;
