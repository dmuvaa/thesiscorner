import React from 'react';
import { signProvider } from '../lib/actions';
import { FaG } from "react-icons/fa6";

const SignInButton: React.FC = () => {
    return (
      <form action={signProvider}>
        <button type="submit" className="block w-full py-3 border border-slate-300 rounded hover:border-red-500 hover:text-red-400 text-red-500">
          <FaG /> Sign in with Google
        </button>
      </form>
    );
};

export default SignInButton;