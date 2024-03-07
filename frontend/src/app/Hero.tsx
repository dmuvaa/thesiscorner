/** @format */

import React from "react";

const HeroSection = () => {
  return (
    <div className="text-white">
      <div className="grid grid-rows-3 grid-flow-col gap-y-8 content-center mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Welcome to our Writing Platform
          </h1>
        </div>
        <div>
          <p className="text-lg mb-10">
            Order high-quality writing services tailored to your needs.
          </p>
        </div>
        <div className="flex">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 rounded mr-4">
            Order Now
          </button>
          <button className="text-white font-bold text-xl py-4 px-8 border-3 border-gray-900/10 rounded">
            Free Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
