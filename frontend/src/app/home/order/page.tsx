/** @format */

import React from "react";
import OrderForm from "@/app/components/Order";
import Checkout from "@/app/components/Payment";

const Order: React.FC = () => {
  return (
    //   <div className="grid grid-cols-8 gap-4 px-24 py-4 h-screen overflow-y-auto">
    //     <div className="col-span-6 bg-gray-200">
    //       <OrderForm />
    //     </div>
    //     <div className="col-span-2 bg-gray-300 sticky top-0">
    //       <Checkout />
    //     </div>
    //   </div>
    <div className="px-24 py-4">
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-6 ">
          {/* Adds margin-left to accommodate side navigation */}
          <OrderForm />
        </div>
        <div className="sticky top-4 col-span-2 size-66 overflow-x-auto">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Order;
