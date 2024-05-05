import React from 'react';
import { signProvider } from '../lib/actions';
import { GrGoogle} from "react-icons/gr";

const SignInButton: React.FC = () => {
    return (
      <form action={signProvider}>
        <button type="submit" className="py-3 w-full flex gap-2 border border-slate-300 rounded hover:border-red-500  justify-center items-center hover:text-red-400 text-red-500">
          <GrGoogle/>
          <p className=''>Sign in with Google</p>
        </button>
      </form>
    );
};

export default SignInButton;