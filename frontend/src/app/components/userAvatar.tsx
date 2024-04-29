/** @format */

"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
// import { UserCircleIcon } from "@heroicons/react/16/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { signUserOut } from "../lib/actions";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserAvatar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    if (isModalOpen) {
      handleModalClose();
    } else {
      handleModalOpen();
    }
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isModalOpen && event.target === event.currentTarget) {
      handleModalClose();
    }
    };
const { data: session } = useSession();

  return (
    <div className="relative">
      {session?.user?.image ? (
        <Image
          className="rounded-full"
          src={session.user.image}
          alt="User Avatar"
          width={40}
          height={40}
          onClick={handleButtonClick}
        />
      ) : (
        <button
          className="block items-center justify-center w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-300 focus:outline-none focus:border-gray-600"
          onClick={handleButtonClick}
        >
          <UserCircleIcon />
        </button>
          )}

      {isModalOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
          <div className="px-4 py-2">
            <h4 className="text-gray-800 prose-h4 italic">Welcome </h4>
            <p className="font-semibold prose-p">
              {session?.user?.name ?? "Unknown"}!
            </p>
          </div>
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="/dashboard" className="block">
                Dashboard
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <form action={signUserOut}>
                <button>Sign Out</button>
              </form>
            </li>
          </ul>
          <button
            className="w-full py-2 text-left text-gray-600 hover:bg-gray-100"
            onClick={handleModalClose}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
