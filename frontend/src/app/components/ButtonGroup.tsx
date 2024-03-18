/** @format */
'use client'
import React, { useState } from "react";

const ButtonGroup = ({ items }: { items: any[] }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index: any) => {
    setSelectedItem(index);
  };

  return (
    <div className="flex flex-col sm:inline-flex sm:flex-row rounded-sm shadow-sm">
      {items.map((item: any, index: any) => (
        <button
          key={index}
          className={`py-3 px-4 inline-flex items-center gap-x-2 -mt-px -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-blue-200 ${index === selectedItem ? "bg-blue-500 text-red" : ""} 
            `}
          onClick={() => handleClick(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
