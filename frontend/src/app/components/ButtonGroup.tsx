import React from 'react';
import '../globals.css'; // Make sure to import the CSS if you are adding custom styles

interface ButtonGroupProps {
  items: string[];
  selectedItem: string;
  handleClick: (item: string, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ items, selectedItem, handleClick }) => {
  return (
    <div className="flex flex-wrap justify-between w-full">
      {items.map((item, index) => {
        return(
        <button
          key={index}
          className={`flex-1 py-3 px-4 text-center border border-gray-200 shadow-sm ${
            index === 0 ? 'md:rounded-l-lg' : ''} ${index === items.length - 1 ? 'md:rounded-r-lg' : ''} ${
            item === selectedItem ? "bg-teal-900 text-white hover:bg-teal-600" : "bg-white text-gray-800 hover:bg-gray-200"
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