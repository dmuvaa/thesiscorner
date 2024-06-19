/** @format */

import React from "react";

const DivGroup = ({ items, selectedItem, handleClick }: { items: any; selectedItem: any; handleClick: any }) => {

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
        className={"py-3 px-4 flex flex-col gap-x-2 -mt-px -ms-px md:first:rounded-s-lg md:first:ms-0 md:last:rounded-e-lg text-sm  focus:z-10 border border-gray-200  shadow-sm hover:bg-teal-200 divide-y divide-solid " + (categoryData.title === selectedItem ? "bg-teal-900 text-white hover:bg-teal-600" : "bg-white text-gray-800")}
        onClick={() => handleClick(categoryData.title)}
      >
        <div className="flex p-1 justify-between font-medium">
          <div className="whitespace-nowrap flex-auto">
            {categoryData.title}
          </div>
          <div className="flex-auto justify-items-end ">
            <div>
              {categoryData.percentage}
            </div>
          </div>
        </div>

        {/* <hr /> */}
        <p className="font-light">{categoryData.description}</p>
      </div>
    );
  };

  return (
    <div className="flex-1 flex-col sm:inline-flex sm:flex-row rounded-sm shadow-sm">
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
