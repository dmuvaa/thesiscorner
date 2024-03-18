/** @format */
'use client'
import React, { useState } from "react";

const InputCounter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(Math.max(0, count - 1)); // Prevent going below 0
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      // Check for valid numbers
      setCount(value);
    }
  };

  return (
    <div className="flex items-center ">
      <button
        className="py-2 px-3 border border-gray-200 bg-white text-gray-800 hover:bg-gray-100 rounded-s-lg"
        onClick={handleDecrement}
        disabled={count === 0}
      >
        -
      </button>
      <input
        type="text"
        value={count}
        className="w-12 text-center border py-2 text-black border-gray-200 focus:outline-none"
        onChange={handleInputChange}
      />
      <button
        className="py-2 px-3 border border-gray-200 bg-white text-gray-800 hover:bg-gray-100 rounded-e-lg"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default InputCounter;
