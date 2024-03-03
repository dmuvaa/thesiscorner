/** @format */

"use client";
import React, { useState } from "react";

// Pricing factors based on academic level
const academicLevelPricing: { [key: string]: number } = {
  high_school: 1.0,
  college: 1.2,
  undergraduate: 1.4,
  masters: 1.6,
  phd: 2.0,
};

// Pricing factors based on deadline
const deadlinePricing = {
  "8_hours": 2.5,
  "12_hours": 2.3,
  "24_hours": 2.0,
  "36_hours": 1.8,
  "48_hours": 1.6,
  "3_days": 1.4,
  "5_days": 1.2,
  "7_days": 1.1,
  "14_days": 1.0,
};
const basePricePerPage = 6;

function Calculator() {
  const [pageCount, setPageCount] = useState(1);
  const [academicLevel, setAcademicLevel] = useState("high_school");
  const [deadline, setDeadline] = useState<
    | "8_hours"
    | "12_hours"
    | "24_hours"
    | "36_hours"
    | "48_hours"
    | "3_days"
    | "5_days"
    | "7_days"
    | "14_days"
  >("14_days");

  function changePageCount(amount: number) {
    setPageCount(Math.max(pageCount + amount, 1));
  }

  function calculatePrice() {
    const academicLevelFactor = academicLevelPricing[academicLevel];
    const deadlineFactor = deadlinePricing[deadline];
    const calculatedPrice =
      basePricePerPage * pageCount * academicLevelFactor * deadlineFactor;
    return `$${calculatedPrice.toFixed(2)}`;
  }

  return (
    <form className="mx-4 container p-4 flex flex-1 justify-content-between align-content-start border-2 rounded shadow">
      <div>
        <div className="flex-auto w-full text-lg">
          <h1>Calculate your paper price</h1>
        </div>
        <div className="mt-4 w-full grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="paperType"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Type of paper
            </label>
            <div className="mt-2">
              <select
                id="paperType"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="argumentative">Argumentative essays</option>
                <option value="analytical">Analytical essays</option>
                <option value="dissertation">
                  Dissertation/Dissertation Chapter
                </option>
                <option value="journal">Journal</option>
                <option value="bookreview">Book Review</option>
                <option value="literature">Literature Analysis/Review</option>
                <option value="businessplan">Business Plan</option>
                <option value="article">Article</option>
                <option value="general">General Task</option>
                <option value="thesis">Thesis/Thesis Chapter</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <label
        htmlFor="academicLevel"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Academic level
      </label>
      <select id="academicLevel">
        <option value="high_school">High school</option>
        <option value="college">College</option>
        <option value="undergraduate">Undergraduate</option>
        <option value="masters">Master's</option>
        <option value="phd">PhD</option>
      </select>

      <label htmlFor="deadline">Deadline</label>
      <select id="deadline">
        <option value="8_hours">8 Hours</option>
        <option value="12_hours">12 Hours</option>
        <option value="24_hours">24 Hours</option>
        <option value="36_hours">36 Hours</option>
        <option value="48_hours">48 Hours</option>
        <option value="3_days">3 days</option>
        <option value="5_days">5 days</option>
        <option value="7_days">7 Days</option>
        <option value="14_days">14 Days</option>
      </select>

      <label htmlFor="pages">Pages</label>
      <div className="page-counter">
        <button type="button" id="decreasePageCount">
          -
        </button>
        <input type="number" id="pageCount" value="1" min="1" readOnly />
        <button type="button" id="increasePageCount">
          +
        </button>
        (275 words)
      </div>

      <div className="price-display">
        Approximate price: <span id="price">$12</span>
      </div>

      <button type="button" id="continueToOrder">
        CONTINUE TO ORDER
      </button>
    </form>
  );
}

export default Calculator;
//
