/** @format */

import React from "react";
import Dashboard from "../Dashboard";
import { Metadata } from "next";
import Button from "@/app/components/Button";

export const metadata: Metadata = {
  title: "Profile Page",
};

const Profile: React.FC = () => {
  return (
    <div className="">
      <h1>Profile Page</h1>
      <p>Welcome to your profile page!</p>
      {/* Add your profile information here */}
      <Dashboard />
      <Button variant="success" backgroundColor={"#F05F3B"} text={"hellojg hfffffffffffffffffffffffffffffgjdf gfh"}/>

    </div>
  );
};

export default Profile;
