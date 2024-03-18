/** @format */

import React from "react";
import ButtonGroup from "./ButtonGroup";
import InputCounter from "./Incr";

const OrderForm = () => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 3", "Option 3"];

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
            <div className="col-span-6">
              <ButtonGroup items={options} />
              {/* <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select> */}
            </div>
          </div>
          <div className="grid grid-cols-8 gap-6 my-2 py-1">
            <div className="col-span-2 grid justify-items-end">
              <label>Type of Paper</label>
            </div>
            <div className="col-span-6">
              <select className="p-2 focus:outline-none border w-full rounded shadow-sm">
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Discipline</label>
            </div>
            <div className="col-span-6">
              <select className="p-2 focus:outline-none border w-full rounded shadow-sm">
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Topic</label>
            </div>
            <div className="col-span-6 border rounded">
              <input
                type="text"
                className="w-full p-2 rounded focus:outline-none focus-visible:ring focus:ring ring-slate-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Paper Instructions</label>
            </div>
            <div className="col-span-6 border rounded">
              <textarea
                placeholder="Write anything you feel is important for the writer to consider. An outline, a grading scale, and other documents may be uploaded as additional materials."
                className="w-full p-2 rounded focus:outline-none focus-visible:ring focus:ring-2 font-sans focus:ring-slate-400 mb-2"
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Additional Materials</label>
            </div>
            <div className="col-span-6 border border-dashed bg-yellow-500/10 p-4 rounded">
              <input
                type="file"
                              className="w-full p-2 rounded focus:outline-none focus-visible:ring focus:ring ring-slate-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Paper Format</label>
            </div>
            <div className="col-span-6">
              <ButtonGroup items={options} />
              {/* <select className="mt-1 block w-full border-gray-300 rounded shadow-sm"></select> */}
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Deadline</label>
            </div>
            <div className="col-span-6">
              <ButtonGroup items={options} />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Pages</label>
            </div>
            <div className="col-span-6">
              <InputCounter />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Sources bo be Cited</label>
            </div>
            <div className="col-span-6">
              <InputCounter />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Charts</label>
            </div>
            <div className="col-span-6">
              <InputCounter />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>PowerPoint Slides</label>
            </div>
            <div className="col-span-6 ">
              <InputCounter />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Writer Category</label>
            </div>
            <div className="col-span-6">
              <ButtonGroup items={options} />
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
