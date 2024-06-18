// 'use client'
// import React, { useState } from 'react';

// const ProfilePage: React.FC = () => {
//   const [name, setName] = useState('');
//   const [avatar, setAvatar] = useState('');

//   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setName(event.target.value);
//   };

//   const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       // Handle file upload logic here
//       setAvatar(URL.createObjectURL(file));
//     }
//   };

//   const handleSaveProfile = () => {
//     // Handle save profile logic here
//   };

//   const handleAddWallet = () => {
//     // Handle add wallet logic here
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-2xl font-bold mb-4">Profile</h1>
//       <div className="flex flex-col items-center">
//         <label htmlFor="avatar" className="mb-2">
//           <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full mb-2" />
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-gray-400 cursor-pointer"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//             />
//           </svg>
//           <input
//             type="file"
//             id="avatar"
//             accept="image/*"
//             className="hidden"
//             onChange={handleAvatarChange}
//           />
//         </label>
//         <input
//           type="text"
//           value={name}
//           onChange={handleNameChange}
//           placeholder="Name"
//           className="border border-gray-300 rounded px-2 py-1 mb-2"
//         />
//         <button
//           onClick={handleSaveProfile}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Save Profile
//         </button>
//       </div>
//       <div className="mt-4">
//         <button
//           onClick={handleAddWallet}
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Add Wallet
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import Profile from "@/app/components/component/profile";

export default function Prof() {
  return <Profile />;
}