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
      <div className="grid frid-cols-1 md:grid-cols-8 gap-4">
        <div className="md:col-span-6 ">
          <OrderForm />
        </div>
        <div className="relative md:col-span-2 ">
          <div className="absolute top-4 left-0 sticky"><Checkout /></div>
          
        </div>
      </div>
    </div>
  );
};

export default Order;
