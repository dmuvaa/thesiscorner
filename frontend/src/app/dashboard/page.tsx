/** @format */
"use client"
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="">
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <div
        draggable={true}
        onDragStart={
          
          (e) => console.log("onDragStart")}
        onDragEnd={(e) => console.log("onDragEnd")}
      >
        Drag source
      </div>

      <div
        onDragEnter={(e) => console.log("onDragEnter")}
        onDragLeave={(e) => console.log("onDragLeave")}
        onDragOver={(e) => {
          e.preventDefault();
          console.log("onDragOver");
        }}
        onDrop={(e) => console.log("onDrop")}
      >
        Drop target
      </div>
    </div>
  );
};

export default Dashboard;
