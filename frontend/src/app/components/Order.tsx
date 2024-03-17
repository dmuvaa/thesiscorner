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
      <div className="rounded border shadow">
        <h3 className="text-xl font-bold mb-2">Paper details</h3>
        <div className="grid grid-flow-row auto-rows-auto mb-2">
          <div className="grid grid-cols-6">
            <div className="col-span-2">
              <label className="block mt-4">Academic level</label>
            </div>
            <div className="col-span-4 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span 1">
              <label className="block mt-4">
                Academic level
                <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
