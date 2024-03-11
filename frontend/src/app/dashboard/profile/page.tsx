/** @format */

import React from "react";
import Dashboard from "../Dashboard";

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
