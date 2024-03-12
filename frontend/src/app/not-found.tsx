/** @format */
"use client";
import { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          404 - Page Not Found
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          The page you are looking for does not exist.
        </p>
        <div className="mt-5">
          <Link
            href="/home"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Return Home
          </Link>
        </div>
        <button
          onClick={async () => window.history.back()}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
