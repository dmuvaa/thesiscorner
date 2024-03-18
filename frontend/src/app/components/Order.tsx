/** @format */

import React from "react";
import ButtonGroup from "./ButtonGroup";

const OrderForm = () => {
    const options = [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 3",
      "Option 3",
    ];

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">PLACE AN ORDER</h2>
        <p className="text-gray-600 text-xl mb-2">
          It&apos;s fast, secure, and confidential
        </p>
      </div>
      <div className="rounded border shadow">
        <h3 className="text-xl font-bold mb-2">Paper Details</h3>
        <div className="grid grid-flow-row auto-rows-auto mb-2">
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid place-items-end">
              <label>Academic Level</label>
            </div>
            <div className="col-span-6 border p-12">
              <ButtonGroup items={options}/>
              {/* <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select> */}
            </div>
          </div>
          <div className="grid grid-cols-8 gap-6 my-2 py-1">
            <div className="col-span-2 grid justify-items-end">
              <label>Type of Paper</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Discipline</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Topic</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Paper Instructions</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Additional Materials</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Paper Format</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Deadline</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Pages</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Sources bo be Cited</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Charts</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>PowerPoint Slides</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Writer Category</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Additional Services</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
