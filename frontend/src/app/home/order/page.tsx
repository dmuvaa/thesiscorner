/** @format */
'use client';

import React, {useState, useEffect} from "react";
import OrderForm from "@/app/components/Order";
import Checkout from "@/app/components/Payment";
import { academicLevel, paperFormat, deadline } from "@/app/components/constants";

const Order: React.FC = () => {
  const [selectedAcademicLevel, setSelectedAcademicLevel] = useState(academicLevel[1]);
  const [selectedPaperFormat, setSelectedPaperFormat] = useState(paperFormat[1]);
  const [selectedDeadline, setSelectedDeadline] = useState(deadline[deadline.length - 1]);

  // topic and settopic
  const [topic, setTopic] = useState("Writer's Choice");

  // type of paper
  const [paper, setPaper] = useState("");

  // discipline
  const [selectedDiscipline, setSelectedDiscipline] = useState("");

  // PAPER instruction
  const [paperInstructions, setPaperInstructions] = useState("");

  // file upload
  const [file, setFile] = useState<File | null>(null);

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
            paper={paper}
            setPaper={setPaper}
            selectedDiscipline={selectedDiscipline}
            setSelectedDiscipline={setSelectedDiscipline}
            paperInstructions={paperInstructions}
            setPaperInstructions={setPaperInstructions}
            file={file}
            setFile={setFile}
          />
        </div>
        <div className="relative md:col-span-2 ">
          <div className="top-4 left-0 sticky">
            <Checkout
              selectedAcademicLevel={selectedAcademicLevel}
              selectedPaperFormat={selectedPaperFormat}
              selectedDeadline={selectedDeadline}
              topic={topic}
              paper={paper}
              selectedDiscipline={selectedDiscipline}
              paperInstructions={paperInstructions}
              file={file}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Order;
