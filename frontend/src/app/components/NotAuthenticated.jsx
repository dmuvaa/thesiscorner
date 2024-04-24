/** @format */

import React from "react";
import Link from "next/link";

const NotAuthenticated = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Not Authenticated</h1>
      <p className="text-lg text-gray-600 mb-8">
        You need to sign in or sign up to access this page.
      </p>
      <div className="flex space-x-4">
        <Link
          href="/signin"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NotAuthenticated;
