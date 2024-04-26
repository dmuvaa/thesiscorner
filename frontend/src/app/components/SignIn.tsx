'use client'
import React, { useState } from 'react';
import SignInButton from './SignInProvider';
import { authenticate } from "@/app/lib/actions";

const LoginForm = () => (
  <form action={authenticate}>
    <input
      className="block w-full mb-4 p-2 border border-gray-300 rounded"
      type="text"
      placeholder="Username"
    />
    <input
      className="block w-full mb-4 p-2 border border-gray-300 rounded"
      type="password"
      placeholder="Password"
    />
    <button
      className="block w-full p-2 text-white bg-blue-500 rounded"
      type="submit"
    >
      Login
    </button>
  </form>
);

const SignUpForm = () => (
  <form>
    <input
      className="block w-full mb-4 p-2 border border-gray-300 rounded"
      type="text"
      placeholder="Username"
    />
    <input
      className="block w-full mb-4 p-2 border border-gray-300 rounded"
      type="password"
      placeholder="Password"
    />
    <button
      className="block w-full p-2 text-white bg-green-500 rounded"
      type="submit"
    >
      Sign Up
    </button>
  </form>
);

const SignInPage = () => {
  const [tab, setTab] = useState('login');

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-75">dsdsd</div>
      <div className="bg-white p-8 rounded shadow-lg z-10 w-[600px] h-[400px]">
        <div className="flex justify-center space-x-4 mb-4 ">
          <button
            className={`px-4 py-2 ${tab === 'login' ? 'text-white bg-blue-500' : 'text-blue-500'}`}
            onClick={() => setTab('login')}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 ${tab === 'signup' ? 'text-white bg-blue-500' : 'text-blue-500'}`}
            onClick={() => setTab('signup')}
          >
            Sign Up
          </button>
        </div>
        {tab === 'login' ? <LoginForm /> : <SignUpForm />}
        <p className='my-2 w-full flex justify-center'>or</p>
        <SignInButton />
      </div>
      
    </div>
  );
};



export default SignInPage;
