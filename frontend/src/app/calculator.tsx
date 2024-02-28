'use client';
import React, { useState } from 'react';

// Pricing factors based on academic level
const academicLevelPricing = {
    'high_school': 1.0,
    'college': 1.2,
    'undergraduate': 1.4,
    'masters': 1.6,
    'phd': 2.0
};

// Pricing factors based on deadline
const deadlinePricing = {
    '8_hours': 2.5,
    '12_hours': 2.3,
    '24_hours': 2.0,
    '36_hours': 1.8,
    '48_hours': 1.6,
    '3_days': 1.4,
    '5_days': 1.2,
    '7_days': 1.1,
    '14_days': 1.0
};
const basePricePerPage = 6;

function Calculator() {
    const [pageCount, setPageCount] = useState(1);
    const [academicLevel, setAcademicLevel] = useState('high_school');
    const [deadline, setDeadline] = useState('14_days');

    function changePageCount(amount) {
        setPageCount(Math.max(pageCount + amount, 1));
    }

    function calculatePrice() {
        const academicLevelFactor = academicLevelPricing[academicLevel];
        const deadlineFactor = deadlinePricing[deadline];
        const calculatedPrice = basePricePerPage * pageCount * academicLevelFactor * deadlineFactor;
        return `$${calculatedPrice.toFixed(2)}`;
    };

    function continueToOrder() {
        // Store the selections in localStorage
        localStorage.setItem('paperType', paperType);
        localStorage.setItem('academicLevel', academicLevel);
        localStorage.setItem('deadline', deadline);
        localStorage.setItem('pageCount', pageCount);
        localStorage.setItem('price', calculatePrice());

        // Redirect to the order form page
        window.location.href = '/order-form'; // Update this to the URL of your order form
    };

    // return (
    //     <>
    //     <form>
    //     <div className="p-2">
    //         <div>
    //             <h1>Calculate your paper price</h1>
    //         </div>
            
    //         <label htmlFor="paperType">Type of paper</label>
    //             <select id="paperType">
    //                 <option value="argumentative">Argumentative essays</option>
    //                 <option value="analytical">Analytical essays</option>
    //                 <option value="dissertation">Dissertation/Dissertation Chapter</option>
    //                 <option value="journal">Journal</option>
    //                 <option value="bookreview">Book Review</option>
    //                 <option value="literature">Literature Analysis/Review</option>
    //                 <option value="businessplan">Business Plan</option>
    //                 <option value="article">Article</option>
    //                 <option value="general">General Task</option>
    //                 <option value="thesis">Thesis/Thesis Chapter</option>
    //             </select>
    //         <label htmlFor="academicLevel">Academic level</label>
    //             <select id="academicLevel">
    //                 <option value="high_school">High school</option>
    //                 <option value="college">College</option>
    //                 <option value="undergraduate">Undergraduate</option>
    //                 <option value="masters">Master's</option>
    //                 <option value="phd">PhD</option>
                    
    //             </select>
            
    //             <label htmlFor="deadline">Deadline</label>
    //             <select id="deadline">
    //                 <option value="8_hours">8 Hours</option>
    //                 <option value="12_hours">12 Hours</option>
    //                 <option value="24_hours">24 Hours</option>
    //                 <option value="36_hours">36 Hours</option>
    //                 <option value="48_hours">48 Hours</option>
    //                 <option value="3_days">3 days</option>
    //                 <option value="5_days">5 days</option>
    //                 <option value="7_days">7 Days</option>
    //                 <option value="14_days">14 Days</option>
                    
    //             </select>
            
    //             <label htmlFor="pages">Pages</label>
    //             <div className="page-counter">
    //                 <button type="button" id="decreasePageCount">-</button>
    //                 <input type="number" id="pageCount" value="1" min="1">
    //                 <button type="button" id="increasePageCount">+</button>
    //                 (275 words)
    //             </div>
    //             <div className="price-display">
    //                 Approximate price: <span id="price">$12</span>
    //             </div>
            
    //             <button type="button" id="continueToOrder">CONTINUE TO ORDER</button>
            
    //     </div>
    //     </form>
    //     </>
    // );
    return (
  <>
    <form>
      <div className="p-2">
        <div>
          <h1>Calculate your paper price</h1>
        </div>

        <label htmlFor="paperType">Type of paper</label>
        <select id="paperType">
          <option value="argumentative">Argumentative essays</option>
          <option value="analytical">Analytical essays</option>
          <option value="dissertation">Dissertation/Dissertation Chapter</option>
          <option value="journal">Journal</option>
          <option value="bookreview">Book Review</option>
          <option value="literature">Literature Analysis/Review</option>
          <option value="businessplan">Business Plan</option>
          <option value="article">Article</option>
          <option value="general">General Task</option>
          <option value="thesis">Thesis/Thesis Chapter</option>
        </select>

        <label htmlFor="academicLevel">Academic level</label>
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
          <button type="button" id="decreasePageCount">-</button>
          <input type="number" id="pageCount" value="1" min="1" />
          <button type="button" id="increasePageCount">+</button>
          (275 words)
        </div>

        <div className="price-display">
          Approximate price: <span id="price">$12</span>
        </div>

        <button type="button" id="continueToOrder">CONTINUE TO ORDER</button>
      </div>
    </form>
  </>
);
}

export default Calculator;
