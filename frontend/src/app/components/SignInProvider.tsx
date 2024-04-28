import React from 'react';
import { signProvider } from '../lib/actions';
import { FaG } from "react-icons/fa6";

const SignInButton: React.FC = () => {
    return (
      <form action={signProvider}>
        <button type="submit" className="py-3 w-full flex gap-2 border border-slate-300 rounded hover:border-red-500 hover:text-red-400 text-red-500">
          <FaG className='align-items-center' /> Sign in with Google
        </button>
      </form>
    );
};

export default SignInButton;