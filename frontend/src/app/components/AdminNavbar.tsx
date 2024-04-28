'use client'
import React, { useState } from 'react';
// import { auth, signOut } from '@/auth'
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import UserAvatar from './userAvatar';


const AdminNavbar: React.FC<{ user: any }> = (user) => {
  const {data: session, status} = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  if (!session?.user) return null;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4 md:py-6 px-4 md:px-24">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <a href="/home">Thesis Corner</a>
          </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="/home/order" className='prose prose-md prose-fuchsia'>Order Now</a>
        </div>
        <div>
          <UserAvatar />
          </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
