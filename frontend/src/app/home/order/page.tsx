/** @format */
'use client';

import React, {useState} from "react";
import OrderForm from "@/app/components/Order";
import Checkout from "@/app/components/Payment";

const Order: React.FC = () => {
  const [selectedAcademicLevel, setSelectedAcademicLevel] = useState(0);
  const [selectedPaperFormat, setSelectedPaperFormat] = useState(0);
  const [selectedDeadline, setSelectedDeadline] = useState(0);

  // topic and settopic
  const [topic, setTopic] = useState("Writer's Choice");

  return (
    <div className="px-24 py-4">
      <div className="grid frid-cols-1 md:grid-cols-8 gap-4">
        <div className="md:col-span-6 ">
          <OrderForm
            selectedAcademicLevel={selectedAcademicLevel}
            setSelectedAcademicLevel={setSelectedAcademicLevel}
            selectedPaperFormat={selectedPaperFormat}
            setSelectedPaperFormat={setSelectedPaperFormat}
            selectedDeadline={selectedDeadline}
            setSelectedDeadline={setSelectedDeadline}
            topic={topic}
            setTopic={setTopic}
          />
        </div>
        <div className="relative md:col-span-2 ">
          <div className="top-4 left-0 sticky">
            <Checkout
              selectedAcademicLevel={selectedAcademicLevel}
              selectedPaperFormat={selectedPaperFormat}
              selectedDeadline={selectedDeadline}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Order;
