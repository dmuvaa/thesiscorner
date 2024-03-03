/** @format */

import Calculator from './calculator';
import PriceCalculator from './Form';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-24">
      <div className="col-span-1 mx-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to our website
        </h1>
        <p className="text-lg text-white">
          We are a team of professionals who will help you with your academic
          papers. We have been in this business for many years and have
          successfully completed thousands of papers. We have a team of
          professional writers who are ready to help you with your papers. We
          are always ready to help you with your papers.
        </p>
      </div>
      <div className="p-4">
        <PriceCalculator />
      </div>
    </div>
  );
}
