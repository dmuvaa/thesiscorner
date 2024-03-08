/** @format */
"use client"
import React from "react";


const HeroSection = () => {
  const click: () => void = () => {
    console.log("clicked");
  };

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
        <div className="flex gap-24">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 rounded mr-4">
            &nbsp;Order Now
          </button>
          <button className="text-white hover:bg-gray-500 font-bold text-xl py-4 px-8 border-2 rounded" onClick={click}>
            &nbsp;Free Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
