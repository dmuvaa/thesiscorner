/** @format */

import React from "react";
import ButtonGroup from "./ButtonGroup";
import InputCounter from "./Incr";
import DivGroup from "./DivGroup";

import AdditionalServices from "./Checkbox";

import {additionalServices, deadline, writerCategory, paperFormat, academicLevel, paperType, discipline } from "./constants";


const OrderForm = () => {

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">PLACE AN ORDER</h2>
        <p className="text-gray-600 text-xl mb-2">
          It&apos;s fast, secure, and confidential
        </p>
      </div>
      <div className="">
        <h3 className="text-xl font-bold mb-2">Paper Details</h3>
        <div className="grid grid-flow-row auto-rows-auto mb-2">
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid place-items-end">
              <label>Academic Level</label>
            </div>
            <div className="col-span-6">
              <ButtonGroup items={academicLevel} />
            </div>
          </div>
          <div className="grid grid-cols-8 gap-6 my-2 py-1">
            <div className="col-span-2 grid justify-items-end">
              <label>Type of Paper</label>
            </div>
            <div className="col-span-6">
              <select className="p-2 focus:outline-none border w-full rounded shadow-sm">
                {paperType.map((option, index) => (
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
                {discipline.map((option, index) => (
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
          <div className="grid grid-cols-8 my-2 pt-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Paper Instructions</label>
            </div>
            <div className="col-span-6 border rounded">
              <textarea
                placeholder="Write anything you feel is important for the writer to consider. An outline, a grading scale, and other documents may be uploaded as additional materials."
                className="w-full p-2 rounded focus:outline-none focus-visible:ring focus:ring font-sans focus:ring-slate-400 mb-2"
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Additional Materials</label>
            </div>
            <div className="col-span-6 border border-dashed bg-yellow-500/10 p-4 rounded">
              <input type="file" className="w-full p-2" />
              <p className="mt-2 ml-2 font-extralight text-ellipsis">
                or Drop Files Here
              </p>
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Paper Format</label>
            </div>
            <div className="col-span-6">
              <ButtonGroup items={paperFormat} />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Deadline</label>
            </div>
            <div className="col-span-6">
              <ButtonGroup items={deadline} />
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
              <DivGroup items={writerCategory} />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Additional Services</label>
            </div>
            <div className="col-span-6 ">
              <AdditionalServices items={additionalServices} />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label>Coupons</label>
            </div>
            <div className="col-span-4 ">
              <button className="p-6 bg-blue-950 rounded text-white">
                Not Available
              </button>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Account</h3>
        <div className="bg-lime-500/10 p-4 rounded m-4 border border-green-600">
          <p className="text-lime-500">
            Your email is{" "}
            <span className="font-bold">.....................</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
