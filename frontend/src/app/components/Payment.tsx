import React from 'react';
const Checkout = () => {
  return (
    <div className="p-4 bg-blue-200 rounded shadow-cyan-200 shadow-lg divide-y divide-gray-400 divide-solid">
      <div>
        <h2 className="text-xl font-semibold mb-2">Writer&apos;s choice</h2>
        <h3>Masters</h3>
      </div>

      <div className="text-pretty font-sans">
        <div className='flex justify-between items-center mb-4'>
          <p className="text-gray-600">4 pages × $15.00
          </p>
          <p className="text-gray-800 font-bold">$ 60.00</p>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <p className="text-gray-600 ">Category of the writer</p>
          <p className="text-gray-800 font-bold">$ 0.00</p>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <p className="text-gray-600">Copy of sources used</p>
          <p className="text-gray-800 font-bold">$ 0.00</p>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <p className="text-gray-600">VIP support</p>
          <p className="text-gray-800 font-bold">$ 0.00</p>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <p className="text-gray-600">Plagiarism report</p>
          <p className="text-gray-800 font-bold">$ 0.00</p>
        </div>
        


      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600 font-bold">Total</p>
        <p className="text-gray-800 font-bold">$ 0.00</p>
      </div>
      <button className="w-full bg-blue-500 text-white rounded py-2">
        Proceed to checkout
      </button>
    </div>
  );
};

export default Checkout;