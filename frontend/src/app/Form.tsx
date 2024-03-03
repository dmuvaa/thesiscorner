'use client'
import React, {useState} from 'react';

function PriceCalculator() {
  const [paperType, setPaperType] = useState('essay'); // Initial paper type
  const [academicLevel, setAcademicLevel] = useState('highSchool'); // Initial academic level
  const [deadline, setDeadline] = useState(14); // Initial deadline
  const [pages, setPages] = useState(1); // Initial number of pages
  const [price, setPrice] = useState(6); // Initial price

  const handlePaperTypeChange = (event) => {
    setPaperType(event.target.value);
  };

  const handleAcademicLevelChange = (event) => {
    setAcademicLevel(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const handlePagesChange = (event) => {
    setPages(event.target.value);
    // Update price based on pages (assuming a base price and additional cost per page)
    setPrice(6 + (event.target.value - 1) * 0.5); // Adjust the calculation as needed
  };

  return (
    <div className="container flex flex-col mx-auto p-4 bg-gray-100 rounded-md space-y-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">Calculate your paper price</h2>

      <div className="grid grid-cols-1 mb-4">
        <label
          htmlFor="paperType"
          className="text-sm font-medium mr-2 mb-1 w-full"
        >
          Type of paper
        </label>
        <select
          id="paperType"
          value={paperType}
          onChange={handlePaperTypeChange}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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

      <div className="flex flex-wrap mb-4">
        <label
          htmlFor="academicLevel"
          className="text-sm font-medium mr-2 mb-1 w-full"
        >
          Academic level
        </label>
        <select
          id="academicLevel"
          value={academicLevel}
          onChange={handleAcademicLevelChange}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="high_school">High school</option>
            <option value="college">College</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="masters">Master&rsquo;s</option>
            <option value="phd">PhD</option>
        </select>
      </div>

      <div className="flex flex-wrap mb-4">
        <label
          htmlFor="deadline"
          className="text-sm font-medium mr-2 mb-1 w-full"
        >
          Deadline
        </label>
        <select
          id="deadline"
          value={deadline}
          onChange={handleDeadlineChange}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
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
      </div>
      <div className="flex flex-wrap mb-4">
        <label
          htmlFor="pages"
          className="text-sm font-medium mr-2 mb-1 w-full"
        >
          Pages
        </label>
        <input
          type="number"
          id="pages"
          min="1" // Prevent negative pages
          value={pages}
          onChange={handlePagesChange}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="text-xl font-bold mb-2">Total Price: ${price}</div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Order Now
      </button>
    </div>
  );
}

export default PriceCalculator;
