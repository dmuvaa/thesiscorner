// /** @format */

// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import { useCalculatorContext } from "./CalculatorContext";
// import { useRouter } from "next/navigation";
// import {
//   paperType as paperTypes,
//   academicLevel as academicLevels,
//   deadline as deadlines,
// } from "./constants";

// function PriceCalculator() {
//   // const [paperType, setPaperType] = useState("essay"); // Initial paper type
//   // const [academicLevel, setAcademicLevel] = useState("high_school"); // Initial academic level
//   // const [deadline, setDeadline] = useState(14); // Initial deadline
//   // const [pages, setPages] = useState(1); // Initial number of pages
//   // const [price, setPrice] = useState(); // Initial price
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const {
//     paperType,
//     setPaperType,
//     academicLevel,
//     setAcademicLevel,
//     deadline,
//     setDeadline,
//     pages,
//     setPages,
//     price,
//     setPrice,
//   } = useCalculatorContext();

//   const router = useRouter();

//   const handlePaperTypeChange = (event: any) => {
//     // React.ChangeEvent<HTMLSelectElement>
//     setPaperType(event.target.value);
//   };

//   const handleAcademicLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setAcademicLevel(event.target.value);
//     // React.ChangeEvent<HTMLSelectElement>
//   };

//   const handleDeadlineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     console.log("deadline change", event.target.value);
//     setDeadline(event.target.value);
//   };

//   const handlePagesChange = (event: any) => {
//     const value = parseInt(event.target.value, 10);
//     setPages(isNaN(value) ? 1 : value);
//     // Update price based on pages (assuming a base price and additional cost per page)
//     setPrice(6 + (event.target.value - 1) * 0.5); // Adjust the calculation as needed
//   };

//   const basePricePerPage = 6;

//   const calcPrice = useCallback(
//     function calculatePrice() {
//       const academicLevelPricing: { [key: string]: number } = {
//         high_school: 1.0,
//         college: 1.2,
//         undergraduate: 1.4,
//         masters: 1.6,
//         phd: 2.0,
//       };

//       const deadlinePricing: { [key: string]: number } = {
//         "8_hours": 2.5,
//         "12_hours": 2.3,
//         "24_hours": 2.0,
//         "36_hours": 1.8,
//         "48_hours": 1.6,
//         "3_days": 1.4,
//         "5_days": 1.2,
//         "7_days": 1.1,
//         "14_days": 1.0,
//       };
//       const academicLevelFactor = academicLevelPricing[academicLevel];
//       const deadlineFactor = deadlinePricing[String(deadline)];

//       // Add checks to ensure factors are defined and pages is a number
//       if (!academicLevelFactor || !deadlineFactor || isNaN(pages)) {
//         setError("Invalid inputs detected for calculation");
//         return "NaN";
//       }

//       console.log("DEBUG:", {
//         academicLevelFactor,
//         deadline,
//         deadlineFactor,
//         calculated: basePricePerPage * pages * academicLevelFactor * deadlineFactor
//       });

//       const calculatedPrice =
//         basePricePerPage * pages * academicLevelFactor * deadlineFactor;
//       return `$${calculatedPrice.toFixed(2)}`;
//     },
//     [academicLevel, deadline, pages]
//   );

//   useEffect(() => {
//     function finalPrice() {
//       setIsLoading(true);
//       try {
//         const calculatedPrice = calcPrice();
//         setPrice(calculatedPrice); // Convert the calculated price to a number before setting it as the new price state
//       } catch (error) {
//         setError(error as null); // Explicitly type the setError state setter function to accept null as its argument
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     finalPrice();
//   }, [paperType, academicLevel, deadline, pages, calcPrice, setPrice]);

//   // const handleSubmit = (event: any) => {
//   //   // Handle form submission
//   //   event.preventDefault();
//   //   try {
//   //     router.push("/order");
//   //   } catch (error) {
//   //     throw new Error("An error occurred while processing your order");
//   //   }

//   //   console.log(
//   //     `Paper type: ${paperType}, Academic level: ${academicLevel}, Deadline: ${deadline}, Pages: ${pages}, Price: ${price}`
//   //   );
//   // };
//   const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     router.push("/home/order");
//   };

//   console.log("Academic Level:", academicLevel);
//   console.log("Academic Level:", typeof academicLevel);
//   console.log("Deadline:", deadline);
//   console.log("Pages:", pages);
//   console.log("Price:", price);
//   console.log("Initial Deadline:", typeof deadline);
//   console.log("Initial pages:", typeof pages);
//   console.log("Initial price:", typeof price);

//   return (
//     <form>
//       <div className="container flex flex-col mx-auto p-4 bg-gray-100 rounded-md space-y-4 shadow-md">
//         <h2 className="text-xl font-bold mb-4">Calculate your paper price</h2>

//         <div className="grid grid-cols-1 mb-4">
//           <label
//             htmlFor="paperType"
//             className="text-sm font-medium mr-2 mb-1 w-full"
//           >
//             Type of paper
//           </label>
//           <select
//             id="paperType"
//             value={paperType}
//             onChange={handlePaperTypeChange}
//             className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           >
//             {/* <option value="argumentative">Argumentative essays</option>
//             <option value="analytical">Analytical essays</option>
//             <option value="dissertation">
//               Dissertation/Dissertation Chapter
//             </option>
//             <option value="journal">Journal</option>
//             <option value="bookreview">Book Review</option>
//             <option value="literature">Literature Analysis/Review</option>
//             <option value="businessplan">Business Plan</option>
//             <option value="article">Article</option>
//             <option value="general">General Task</option>
//             <option value="thesis">Thesis/Thesis Chapter</option> */}

//             {paperTypes.map((type, index) => (
//               <option key={index} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex flex-wrap mb-4">
//           <label
//             htmlFor="academicLevel"
//             className="text-sm font-medium mr-2 mb-1 w-full"
//           >
//             Academic level
//           </label>
//           <select
//             id="academicLevel"
//             value={academicLevel}
//             onChange={handleAcademicLevelChange}
//             className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           >
//             {/* <option value="high_school">High school</option>
//             <option value="college">College</option>
//             <option value="undergraduate">Undergraduate</option>
//             <option value="masters">Master&rsquo;s</option>
//             <option value="phd">PhD</option> */}
//             {academicLevels.map((level, index) => (
//               <option key={index} value={level}>
//                 {level}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex flex-wrap mb-4">
//           <label
//             htmlFor="deadline"
//             className="text-sm font-medium mr-2 mb-1 w-full"
//           >
//             Deadline
//           </label>
//           <select
//             id="deadline"
//             value={deadline}
//             onChange={handleDeadlineChange}
//             className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           >
//             {/* <option value="8_hours">8 Hours</option>
//             <option value="12_hours">12 Hours</option>
//             <option value="24_hours">24 Hours</option>
//             <option value="36_hours">36 Hours</option>
//             <option value="48_hours">48 Hours</option>
//             <option value="3_days">3 days</option>
//             <option value="5_days">5 days</option>
//             <option value="7_days">7 Days</option>
//             <option value="14_days">14 Days</option> */}
//             {deadlines.map((time, index) => (
//               <option key={index} value={time}>
//                 {time}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex flex-wrap mb-4">
//           <label
//             htmlFor="pages"
//             className="text-sm font-medium mr-2 mb-1 w-full"
//           >
//             Pages
//           </label>
//           <input
//             type="number"
//             id="pages"
//             min="1" // Prevent negative pages
//             value={pages}
//             onChange={handlePagesChange}
//             className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div className="text-xl font-bold mb-2">
//           Total Price: {isLoading ? "Calculating..." : error ? error : price}
//         </div>

//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={
//             handleSubmit
//             // () => router.push("/home/order")
//           }
//         >
//           Order Now
//         </button>
//       </div>
//     </form>
//   );
// }

// export default PriceCalculator;
'use client';
/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { useCalculatorContext } from "./CalculatorContext";
import { useRouter } from "next/navigation";
import {
  paperType as paperTypes,
  academicLevel as academicLevels,
  deadline as deadlines,
} from "./constants";

function PriceCalculator() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    paperType,
    setPaperType,
    academicLevel,
    setAcademicLevel,
    deadline,
    setDeadline,
    pages,
    setPages,
    price,
    setPrice,
  } = useCalculatorContext();

  const router = useRouter();

  const handlePaperTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPaperType(event.target.value);
  };

  const handleAcademicLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAcademicLevel(event.target.value);
  };

  const handleDeadlineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDeadline(event.target.value);
  };

  const handlePagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setPages(isNaN(value) ? 1 : value);
  };

  const basePricePerPage = 6;

  const calcPrice = useCallback(() => {
    // Pricing factors based on academic levels
    const academicLevelPricing: { [key: string]: number } = {
      high_school: 1.0,
      college: 1.2,
      undergraduate: 1.4,
      masters: 1.6,
      phd: 2.0,
    };

    // Pricing factors based on deadlines
    const deadlinePricing: { [key: string]: number } = {
      "8_hours": 2.5,
      "12_hours": 2.3,
      "24_hours": 2.0,
      "36_hours": 1.8,
      "48_hours": 1.6,
      "3_days": 1.4,
      "5_days": 1.2,
      "7_days": 1.1,
      "14_days": 1.0,
    };

    // Get the factors from pricing dictionaries
    const academicLevelFactor = academicLevelPricing[academicLevel];
    const deadlineFactor = deadlinePricing[deadline];

    console.log("DEBUG:", {
      academicLevel,
      academicLevelFactor,
      deadline,
      deadlineFactor,
      pages,
      calculated: basePricePerPage * pages * academicLevelFactor * deadlineFactor
    });

    // Add checks to ensure factors are defined and pages is a number
    if (!academicLevelFactor || !deadlineFactor || isNaN(pages)) {
      setError("Invalid inputs detected for calculation");
      return "NaN";
    }

    // Calculate the price based on the factors and number of pages
    const calculatedPrice = basePricePerPage * pages * academicLevelFactor * deadlineFactor;
    return `$${calculatedPrice.toFixed(2)}`;
  }, [academicLevel, deadline, pages]);

  useEffect(() => {
    setIsLoading(true);
    try {
      const calculatedPrice = calcPrice();
      setPrice(calculatedPrice); // Set the calculated price
    } catch (error) {
      setError(error as null); // Set error if any
    } finally {
      setIsLoading(false);
    }
  }, [paperType, academicLevel, deadline, pages, calcPrice, setPrice]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/home/order");
  };

  console.log(`State check -- Academic: ${academicLevel}, Deadline: ${deadline}, Pages: ${pages}, Price: ${price}`);

  return (
    <form onSubmit={handleSubmit}>
      <div className="container flex flex-col mx-auto p-4 bg-gray-100 rounded-md space-y-4 shadow-md">
        <h2 className="text-xl font-bold mb-4">Calculate your paper price</h2>
        
        <div className="grid grid-cols-1 mb-4">
          <label htmlFor="paperType" className="text-sm font-medium mb-1 w-full">Type of paper</label>
          <select id="paperType" value={paperType} onChange={handlePaperTypeChange} className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            {paperTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 mb-4">
          <label htmlFor="academicLevel" className="text-sm font-medium mb-1 w-full">Academic level</label>
          <select id="academicLevel" value={academicLevel} onChange={handleAcademicLevelChange} className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            {academicLevels.map((level, index) => (
              <option key={index} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 mb-4">
          <label htmlFor="deadline" className="text-sm font-medium mb-1 w-full">Deadline</label>
          <select id="deadline" value={deadline} onChange={handleDeadlineChange} className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            {deadlines.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 mb-4">
          <label htmlFor="pages" className="text-sm font-medium mb-1 w-full">Pages</label>
          <input type="number" id="pages" min="1" value={pages} onChange={handlePagesChange} className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="text-xl font-bold mb-2">Total Price: {isLoading ? "Calculating..." : error ? error : price}</div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Order Now</button>
      </div>
    </form>
  );
}

export default PriceCalculator;