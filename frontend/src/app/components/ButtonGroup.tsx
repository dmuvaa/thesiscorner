/** @format */
import React from "react";

const ButtonGroup = ({ items, selectedItem, handleClick }: { items: any[], selectedItem: number, handleClick: (index: number, event: React.MouseEvent<HTMLButtonElement>) => void}) => {


  return (
    <div className="flex flex-col sm:inline-flex sm:flex-row rounded-sm shadow-sm ">
      {items.map((item: any, index: any) => (
        <button
          key={index}
          className={`py-3 grow px-4 inline-flex items-center gap-1 md:gap-x-2 -mt-px -ms-px md:first:rounded-s-lg md:first:ms-0 md:last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-blue-200 ${index === selectedItem ? "bg-lime-950 text-white " : ""} 
            `}
          onClick={(event) => handleClick(item, event)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;

// const ButtonGroup = ({ items, selectedItem, handleClick }: { items: any[], selectedItem: number, handleClick: (index: number, event: React.MouseEvent<HTMLButtonElement>) => void }) => {
//   return (
//     <div className="flex flex-col sm:inline-flex sm:flex-row rounded-sm shadow-sm ">
//       {items.map((item: any, index: any) => (
//         <button
//           key={index}
//           className={`py-3 grow px-4 inline-flex items-center gap-1 md:gap-x-2 -mt-px -ms-px md:first:rounded-s-lg md:first:ms-0 md:last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-blue-200 ${index === selectedItem ? "bg-lime-950 text-white " : ""} 
//               `}
//           onClick={(event) => handleClick(index, event)}
//         >
//           {item}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ButtonGroup;
