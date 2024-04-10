/** @format */
"use client"
import React from "react";
import Link from "next/link";


const HeroSection = () => {
  const click: () => void = () => {
    console.log("clicked");
  };

  return (
    <div className="text-black">
      <div className="grid grid-rows-3 grid-flow-col gap-y-8 content-center mx-auto">
        <div>
          <h1 className="text-4xl text-white font-bold mb-6">
            Welcome to our Writing Platform
          </h1>
        </div>
        <div>
          <p className="text-lg text-white mb-10">
            Order high-quality writing services tailored to your needs.
          </p>
        </div>
        <div className="inline-flex justify-between">
          <Link href="/home/order" className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 rounded mr-4 align-items-center">
            &nbsp;Order Now
          </Link>
          <Link href="/home" className="text-black hover:bg-gray-500 font-bold text-xl py-4 px-8 border-2 rounded" onClick={click}>
            &nbsp;Free Inquiry
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
