/** @format */
'use client'
import React, { useState } from "react";

const InputCounter = (props: any) => {
  

  return (
    <div className="flex items-center ">
      <button
        className="py-2 px-3 border border-gray-200 bg-white text-gray-800 hover:bg-gray-100 rounded-s-lg"
      >
        -
      </button>
      <input
        type="text"
        className="w-12 text-center border py-2 text-black border-gray-200 focus:outline-none"
      />
      <button
        className="py-2 px-3 border border-gray-200 bg-white text-gray-800 hover:bg-gray-100 rounded-e-lg"
      >
        +
      </button>
    </div>
  );
};

export default InputCounter;
