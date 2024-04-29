/** @format */
'use client'
import React, { useState } from "react";

interface InputCounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    handleDecrement: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleIncrement: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
const InputCounter: React.FC<InputCounterProps> = ({ count, setCount, handleDecrement, handleIncrement, handleInputChange }) => {
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
