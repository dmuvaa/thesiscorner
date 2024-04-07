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
  // page count
  const [pageCount, setPageCount] = useState(0);
  const [sources, setSources] = useState(0);
  const [charts, setCharts] = useState(0);
  const [slides, setSlides] = useState(0);

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
            pageCount={pageCount}
            setPageCount={setPageCount}
            sources={sources}
            setSources={setSources}
            charts={charts}
            setCharts={setCharts}
            slides={slides}
            setSlides={setSlides}
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
              pageCount={pageCount}
              sources={sources}
              charts={charts}
              slides={slides}

            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Order;
