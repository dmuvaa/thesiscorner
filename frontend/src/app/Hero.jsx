/** @format */

import React from "react";

const HeroSection = () => {
  return (
    <div className="text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to our Writing Platform
        </h1>
        <p className="text-lg mb-10">
          Order high-quality writing services tailored to your needs.
        </p>
        <div className="flex">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 rounded mr-4">
            Order Now
          </button>
          <button className="text-white font-bold text-xl py-4 px-8 border-2 rounded">
            Free Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
