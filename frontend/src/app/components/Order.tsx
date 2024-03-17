/** @format */

import React from "react";

const OrderForm = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">PLACE AN ORDER</h2>
        <p className="text-gray-600 text-xl mb-2">
          It&apos;s fast, secure, and confidential
        </p>
      </div>

      <div className=" py-4 px-4 bg-white rounded border shadow">
        <div className="border-l-4 border-blue-500 pl-4 mb-6">
          <h3 className="text-xl font-bold">1. Paper details</h3>

          {/* Academic Level */}
          <label className="block mt-4">
            Academic level
            <select className="mt-1 block w-full border-gray-300 rounded shadow-sm">
              {/* Options */}
            </select>
          </label>

          {/* Other form fields */}
          {/* ... */}
        </div>

        {/* Paper Format */}
        <label className="block mt-4">
          Paper format
          <select className="mt-1 block w-full border-gray-300 rounded shadow-sm">
            {/* Options */}
          </select>
        </label>
        <label className="block mt-4">
          Paper format
          <select className="mt-1 block w-full border-gray-300 rounded shadow-sm">
            {/* Options */}
          </select>
        </label>
        <label className="block mt-4">
          Paper format
          <select className="mt-1 block w-full border-gray-300 rounded shadow-sm">
            {/* Options */}
          </select>
        </label>
        <label className="block mt-4">
          Paper format
          <select className="mt-1 block w-full border-gray-300 rounded shadow-sm">
            {/* Options */}
          </select>
        </label>
        <label className="block mt-4">
          Paper format
          <select className="mt-1 block w-full border-gray-300 rounded shadow-sm">
            {/* Options */}
          </select>
        </label>
        <label className="block mt-4">
          Paper format
          <select className="mt-1 block w-full border-gray-300 rounded shadow-sm">
            {/* Options */}
          </select>
        </label>
        <label className="block mt-4">
          Paper format
          <select className="mt-1 block w-full border-gray-300 rounded shadow-sm">
            {/* Options */}
          </select>
        </label>

        {/* Deadline */}
        {/* ... */}
      </div>
    </div>
  );
};

export default OrderForm;
