/** @format */

import React from "react";

const OrderForm = () => {
  const labels = [
    "Academic level",
    "Type of paper",
    "Discipline",
    "Topic",
    "Paper Instructions",
    "Additional materials",
    "Paper format",
    "Deadline",
    "Pages",
    "Sources to be cited",
    "Charts",
    "PowerPoint Slides",
    "Writer category",
    "Additional services",
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
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Academic Level</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Type of Paper</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Discipline</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Topic</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Paper Instructions</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Additional Materials</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Paper Format</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Deadline</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Pages</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Sources bo be Cited</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Charts</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">PowerPoint Slides</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Writer Category</label>
            </div>
            <div className="col-span-6 border">
              <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2">
              <label className="block mt-4">Additional Services</label>
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
