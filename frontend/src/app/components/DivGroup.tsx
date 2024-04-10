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
        className={"py-3 px-4 flex-col inline-flex items-center gap-x-2 -mt-px -ms-px md:first:rounded-s-lg md:first:ms-0 md:last:rounded-e-lg text-sm  focus:z-10 border border-gray-200  shadow-sm hover:bg-blue-200 divide-y divide-dashed " + (categoryData.title === selectedItem ? "bg-cyan-900 text-white hover:bg-cyan-600" : "bg-white text-gray-800")}
        onClick={() => handleClick(categoryData.title)}
      >
        <div className="flex flex-row justify-between gap-2 font-medium">
          <div className="whitespace-nowrap">
            {categoryData.title}
          </div>
          <div className="ml-auto">{categoryData.percentage}</div>
        </div>

        <hr />
        <p className="font-light">{categoryData.description}</p>
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
