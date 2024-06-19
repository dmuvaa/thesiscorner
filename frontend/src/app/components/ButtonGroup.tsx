import React from "react";
import "../globals.css"; // Make sure to import the CSS if you are adding custom styles

interface ButtonGroupProps {
  items: string[];
  selectedItem: string;
  handleClick: (
    item: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  items,
  selectedItem,
  handleClick,
}) => {
  return (
    <div className="flex flex-wrap justify-between w-full">
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <button
            key={index}
            className={`flex-1 py-3 px-4 text-center border border-gray-200 shadow-sm ${
              isFirst ? "rounded-t-lg sm:rounded-l-lg" : ""
            } 
            ${isLast ? "rounded-b-lg sm:rounded-r-lg" : ""}  ${
              item === selectedItem
                ? "bg-cyan-900 text-white hover:bg-cyan-600"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
            onClick={(event) => handleClick(item, event)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
