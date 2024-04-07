/** @format */

"use client";
/** @format */

import React, { ChangeEvent, useState } from "react";
import ButtonGroup from "./ButtonGroup";
import InputCounter from "./Incr";
import DivGroup from "./DivGroup";
// import { getSession, useSession } from "next-auth/react";

import AdditionalServices from "./Checkbox";

import {
  additionalServices,
  deadline,
  writerCategory,
  paperFormat,
  academicLevel,
  paperType,
  discipline,
} from "./constants";

const OrderForm: React.FunctionComponent<any> = props => {
  const {
    selectedAcademicLevel,
    setSelectedAcademicLevel,
    selectedPaperFormat,
    setSelectedPaperFormat,
    selectedDeadline,
    setSelectedDeadline,
    topic,
    setTopic,
  } = props;

  const handleTopicChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setTopic(event.target.value);
  }

  const handleClickAcademicLevel = (item: any, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectedAcademicLevel(item);
  };

  const handleClickPaperFormat = (index: any, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectedPaperFormat(index);
  };

  const handleClickDeadline = (index: any, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectedDeadline(index);
  };

  const [textArea, setTextArea] = useState("");
  const [error, setError] = useState<null | Error>(null);

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    event.preventDefault();
    try {
      setTextArea(event.target.value);
    } catch (err) {
      setError(err as Error);
    }
  }

  // const { data: session, status} = useSession();
  // const data = JSON.stringify(session)
  // const dat = JSON.parse(data)
  // try {
  //   if (typeof(session) === object) {
  //   console.log(`session is ${session.user.name}`);
  // }
  // }catch (e) {
  //   console.error(`session error ${e}`)
  // }

  return (
    <form>
      <div>
        <h2 className="text-2xl font-bold">PLACE AN ORDER</h2>
        <p className="text-gray-600 text-xl mb-2">
          It&apos;s fast, secure, and confidential
        </p>
      </div>
      <div className="">
        <h3 className="text-xl font-bold mb-2">Paper Details</h3>
        <div className="grid grid-flow-row auto-rows-auto mb-2">
          <div className="grid grid-cols-1 md:grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid md:place-items-end">
              <label className="font-semibold">Academic Level</label>
            </div>
            <div className="col-span-6">
              <ButtonGroup items={academicLevel} selectedItem={selectedAcademicLevel} handleClick={handleClickAcademicLevel} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-8 gap-6 my-2 py-1">
            <div className="col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Type of Paper</label>
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
          <div className="grid grid-cols-1 md:grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Discipline</label>
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
          <div className="grid grid-cols-1 md:grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Topic</label>
            </div>
            <div className="col-span-6 rounded">
              <input
                type="text"
                defaultValue={topic}
                onChange={handleTopicChange}
                className="w-full p-2 border rounded focus:outline-none focus-visible:ring focus:ring ring-slate-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-8 my-2 pt-1 gap-6">
            <div className="col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Paper Instructions</label>
            </div>
            <div className="col-span-1 md:col-span-6 border rounded">
              <textarea
                placeholder="Write anything you feel is important for the writer to consider. An outline, a grading scale, and other documents may be uploaded as additional materials."
                className="w-full p-2 rounded focus:outline-none focus-visible:ring focus:ring font-sans focus:ring-slate-400 mb-2"
                onChange={handleTextareaChange}
              ></textarea>
              {error !== null && (
                <p className="p-2 bg-red-600 rounded w-full text-white">
                  {error.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Additional Materials</label>
            </div>
            <div className="col-span-6 border border-dashed bg-yellow-500/10 p-4 rounded">
              <input type="file" className="w-full p-2" />
              <p className="mt-2 ml-2 font-extralight text-ellipsis">
                or Drop Files Here
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Paper Format</label>
            </div>
            <div className="col-span-6">
              <ButtonGroup items={paperFormat} selectedItem={selectedPaperFormat} handleClick={handleClickPaperFormat} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-8 my-2 py-1 gap-6">
            <div className="md:col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Deadline</label>
            </div>
            <div className="md:col-span-6">
              <ButtonGroup items={deadline} selectedItem={selectedDeadline} handleClick={handleClickDeadline} />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Pages</label>
            </div>
            <div className="col-span-6">
              <InputCounter />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Sources to be Cited</label>
            </div>
            <div className="col-span-6">
              <InputCounter />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Charts</label>
            </div>
            <div className="col-span-6">
              <InputCounter />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label className="font-semibold">PowerPoint Slides</label>
            </div>
            <div className="col-span-6">
              <InputCounter />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-8 my-2 py-1 gap-6">
            <div className="md:col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Writer Category</label>
            </div>
            <div className="md:col-span-6">
              <DivGroup items={writerCategory} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid md:justify-items-end">
              <label className="font-semibold">Additional Services</label>
            </div>
            <div className="col-span-6 ">
              <AdditionalServices items={additionalServices} />
            </div>
          </div>
          <div className="grid grid-cols-8 my-2 py-1 gap-6">
            <div className="col-span-2 grid justify-items-end">
              <label className="font-semibold">Coupons</label>
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
            Your email is <span className="font-bold">,.,,,,,,,,</span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
