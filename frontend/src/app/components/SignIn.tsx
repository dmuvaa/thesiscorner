'use client'
import React, { useState } from 'react';
import SignInButton from './SignInProvider';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';


const SignInPage = () => {
  const [tab, setTab] = useState('login');

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-75"></div>
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
