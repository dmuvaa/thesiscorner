// /** @format */

// export default function AdditionalServices({ items }: { items: any }) {
//   const ItemCard = ({ categoryData }: { categoryData: any }) => {
//     return (
//       <div className="group">
//         <div className="border rounded grid grid-cols-12 gap-2 group-hover:bg-blue-200">
//           <div className="col-span-2 justify-center p-8  ">
//             <input type="checkbox" name="" id="" className="group-hover:bg-teal-200" />
//           </div>
//           <div className="col-span-10">
//             <div className="flex justify-between my-2 ">
//               <h4 className="font-bold opacity-3">{categoryData.title}</h4>
//               <p className="ml-auto">{categoryData.price}</p>
//             </div>
//             <div>
//               <p className="my-2">{categoryData.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="grid grid-cols-1 gap-2 rounded-sm shadow-sm">
//       {Object.entries(items).map(([title, data]) => (
//         <ItemCard key={title} categoryData={{ title, ...data }} />
//       ))}
//     </div>
//   );
// }

// /** @format */

// interface CategoryData {
//   title: string;
//   price: number;
//   description: string;
// }

// interface ItemCardProps {
//   categoryData: CategoryData;
// }

// interface AdditionalServicesProps {
//   items: {[title: string]: CategoryData};
// }

// export default function AdditionalServices({ items }: AdditionalServicesProps) {
//   const ItemCard: React.FC<ItemCardProps> = ({ categoryData }) => {
//     return (
//       <div className="group">
//         <div className="border rounded grid grid-cols-12 gap-2 group-hover:bg-blue-200">
//           <div className="col-span-2 flex items-center justify-center p-8 ">
//             <input type="checkbox" name="services" id={`service-${categoryData.title}`} className="checkbox relative group-hover:bg-teal-200 hidden" />
//             <label htmlFor={`service-${categoryData.title}`} className="w-8 h-8 bg-white border border-gray-300 rounded cursor-pointer flex items-center justify-center group-hover:border-teal-200">
//               <span className="checkmark hidden w-4 h-4 bg-blue-500"></span>
//             </label>
//           </div>
//           <div className="col-span-10">
//             <div className="flex justify-between my-2">
//               <h4 className="font-bold">{categoryData.title}</h4>
//               <p className="ml-auto">{categoryData.price}</p>
//             </div>
//             <div>
//               <p className="my-2">{categoryData.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="grid grid-cols-1 gap-2 rounded-sm shadow-sm">
//       {Object.entries(items).map(([title, data]) => (
//         <ItemCard key={title} categoryData={{ title, ...data }} />
//       ))}
//     </div>
//   );
// }

// /** @format */

// export default function AdditionalServices({ items }) {
//   const ItemCard = ({ categoryData }) => {
//     return (
//       <div>
//         <input type="checkbox" name="services" id={`service-${categoryData.title}`} className="sr-only" />
//         <label htmlFor={`service-${categoryData.title}`} className="group block cursor-pointer">
//           <div className="border rounded grid grid-cols-12 gap-2 hover:bg-cyan-400 hover:text-white">
//             <div className="col-span-2 flex items-center justify-center p-8 ">
//               <svg className="hidden w-6 h-6 text-teal-500 group-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <div className="col-span-10">
//               <div className="flex justify-between my-2">
//                 <h4 className="font-bold">{categoryData.title}</h4>
//                 <p className="ml-auto">{categoryData.price}</p>
//               </div>
//               <div>
//                 <p className="my-2">{categoryData.description}</p>
//               </div>
//             </div>
//           </div>
//         </label>
//       </div>
//     );
//   };

//   return (
//     <div className="grid grid-cols-1 gap-2 rounded-sm shadow-sm">
//       {Object.entries(items).map(([title, data]) => (
//         <ItemCard key={title} categoryData={{ title, ...data }} />
//       ))}
//     </div>
//   );
// }

export default function AdditionalServices({ items }) {
  const ItemCard = ({ categoryData }) => {
    return (
      <div className="group cursor-pointer">
        <input type="checkbox" name="services" id={`service-${categoryData.title}`} className="opacity-0 absolute" />
          <label htmlFor={`service-${categoryData.title}`} className="border-1 rounded grid grid-cols-12 gap-2 w-full p-4 hover:bg-teal-600 ">
            <div className="col-span-2 flex items-center justify-center p-8 ">
              <svg className="hidden w-6 h-6 text-teal-500 group-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="col-span-10">
              <div className="flex justify-between my-2">
                <h4 className="font-bold">{categoryData.title}</h4>
                <p className="ml-auto">{categoryData.price}</p>
              </div>
              <div>
                <p className="my-2">{categoryData.description}</p>
              </div>
            </div>
          </label>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-2 rounded-sm shadow-sm">
      {Object.entries(items).map(([title, data]) => (
        <ItemCard key={title} categoryData={{ title, ...data }} />
      ))}
    </div>
  );
}