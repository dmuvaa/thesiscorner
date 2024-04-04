/** @format */
"use client";
import React, { useState } from "react";

const DivGroup = ({ items }: { items: any }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index: any) => {
    setSelectedItem(index);
  };
  const WriterCategoryCard = ({
    categoryData,
    selectedItem,
    handleClick,
  }: {
    categoryData: any;
    selectedItem: any;
    handleClick: (index: any) => void;
  }) => {
    return (
      <div
        className={`py-3 px-4 md:flex-col inline-flex items-center gap-x-2 -mt-px -ms-px md:first:rounded-s-lg md:first:ms-0 md:last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-blue-200 divide-y divide-dashed ${
          categoryData.title === selectedItem ? "bg-lime-950 text-white" : ""
        }`}
        onClick={() => handleClick(categoryData.title)}
      >
        <div className="grid grid-cols-2 gap-2">
          <div className="justify-items-start">{categoryData.title}</div>
          <div className="ml-auto">{categoryData.percentage}</div>
        </div>

        <hr />
        <p>{categoryData.description}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col sm:inline-flex sm:flex-row rounded-sm shadow-sm">
      {Object.entries(items).map(([title, data]) => (
        <WriterCategoryCard
          key={title}
          categoryData={{ title, ...data }}
          selectedItem={selectedItem}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default DivGroup;
