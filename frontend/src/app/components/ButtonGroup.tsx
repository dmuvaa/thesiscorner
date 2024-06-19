// /** @format */
// import React from "react";

// interface ButtonGroupProps {
//   items: any[];
//   selectedItem: number;
//   handleClick: (item: String, event: React.MouseEvent<HTMLButtonElement>) => void;

// }

// const ButtonGroup: React.FC<ButtonGroupProps> = ({ items, selectedItem, handleClick }) => {

//   return (
//     <div className="flex flex-col sm:inline-flex sm:flex-row rounded-sm shadow-sm ">
//       {items.map((item: any, index: any) => (
//         <button
//           key={index}
//           className={`py-3 grow px-4 inline-flex items-center gap-1 md:gap-x-2 -mt-px -ms-px md:first:rounded-s-lg md:first:ms-0 md:last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200  shadow-sm hover:bg-blue-200 ${item === selectedItem ? "bg-cyan-900 text-white hover:bg-cyan-600" : "bg-white text-gray-800 "} 
//             `}
//           onClick={(event) => handleClick(item, event)}
//         >
//           {item}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ButtonGroup;

import React from 'react';
import '../globals.css'; // Make sure to import the CSS if you are adding custom styles

interface ButtonGroupProps {
  items: string[];
  selectedItem: string;
  handleClick: (item: string, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ items, selectedItem, handleClick }) => {
  return (
    <div className="flex flex-wrap justify-between w-full dynamic-button-group" style={{ '--button-count': items.length } as React.CSSProperties}>
      {items.map((item, index) => (
        <button
          key={index}
          className={`flex-1 py-3 px-4 text-center border border-gray-200 shadow-sm ${
            item === selectedItem ? "bg-cyan-900 text-white hover:bg-cyan-600" : "bg-white text-gray-800 hover:bg-gray-200"
          }`}
          onClick={(event) => handleClick(item, event)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
