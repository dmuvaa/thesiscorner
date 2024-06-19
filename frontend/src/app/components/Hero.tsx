/** @format */
"use client";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  const click: () => void = () => {
    console.log("clicked");
  };

  return (
    <div className="grid grid-flow-row auto-rows-max gap-y-8 content-center">
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
      <div className="">
        <Link
          href="/home/order"
          className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 rounded mr-4 "
        >
          Order Now
        </Link>
        <Link
          href="/home"
          className="text-black hover:bg-gray-500 font-bold text-xl py-4 px-8 border-2 rounded"
          onClick={click}
        >
          Free Inquiry
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
