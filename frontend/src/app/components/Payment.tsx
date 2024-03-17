import React from 'react';
const Checkout = () => {
    return (
        <div className="p-4 bg-blue-200 rounded border shadow-lg">
            <h2 className="text-2xl font-bold mb-2">PAYMENT SUMMARY</h2>
            <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-800 font-bold">$ 0.00</p>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">Discount</p>
                <p className="text-gray-800 font-bold">$ 0.00</p>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">Total</p>
                <p className="text-gray-800 font-bold">$ 0.00</p>
            </div>
            <button className="w-full bg-blue-500 text-white rounded py-2">Proceed to checkout</button>
        </div>
    );
};

export default Checkout;