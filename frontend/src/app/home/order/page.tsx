/** @format */
"use client";

import React, { useState, useContext } from "react";
import OrderForm from "@/app/components/Order";
import Checkout from "@/app/components/Payment";
import {
  academicLevel,
  paperFormat,
  deadline,
} from "@/app/components/constants";

import {
  CalculatorContext,
  CalculatorContextType,
} from "@/app/components/calculator";
import { AdditionalServicesProvider } from "@/app/components/contexts/AdditionalServicesContext";


const Order: React.FC = () => {
  // context
  const { academiclevel, deadlinee, page } =
    useContext<CalculatorContextType>(CalculatorContext);
  
  const [selectedAcademicLevel, setSelectedAcademicLevel] = useState(
    academiclevel
  );
  const [selectedPaperFormat, setSelectedPaperFormat] = useState(
    paperFormat[1]
  );
  const [selectedDeadline, setSelectedDeadline] = useState(
    deadline[deadline.length - 1]
  );

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
  // page count
  const [pageCount, setPageCount] = useState(0);
  const [sources, setSources] = useState(0);
  const [charts, setCharts] = useState(0);
  const [slides, setSlides] = useState(0);

  const [selectedGroupItem, setSelectedGroupItem] = useState(null);

  return (
    <AdditionalServicesProvider>
    <div className="px-8 md:px-24 py-4 relative">
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
            pageCount={pageCount}
            setPageCount={setPageCount}
            sources={sources}
            setSources={setSources}
            charts={charts}
            setCharts={setCharts}
            slides={slides}
            setSlides={setSlides}
            selectedGroupItem={selectedGroupItem}
            setSelectedGroupItem={setSelectedGroupItem}
          />
        </div>
        <div className="md:col-span-2 ">
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
              pageCount={pageCount}
              sources={sources}
              charts={charts}
              slides={slides}
              selectedGroupItem={selectedGroupItem}
            />
          </div>
        </div>
      </div>
    </div>
    </AdditionalServicesProvider>
  );
};

export default Order;
