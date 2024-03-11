/** @format */

"use client";
import React, { useState } from "react";


const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label>
          Dark Mode:
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeChange}
          />
        </label>
      </div>
      <div>
        <label>
          Notifications:
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationsChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Settings;
