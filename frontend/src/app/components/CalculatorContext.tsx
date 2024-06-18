'use client';
import React, { createContext, useContext, useState, ReactNode } from "react";

type CalculatorContextType = {
  paperType: string;
  setPaperType: (value: string) => void;
  academicLevel: string;
  setAcademicLevel: (value: string) => void;
  deadline: number;
  setDeadline: (value: number) => void;
  pages: number;
  setPages: (value: number) => void;
  price: string;
  setPrice: (value: string) => void;
};

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [paperType, setPaperType] = useState("essay");
  const [academicLevel, setAcademicLevel] = useState("high_school");
  const [deadline, setDeadline] = useState(14);
  const [pages, setPages] = useState(1);
  const [price, setPrice] = useState("");

  return (
    <CalculatorContext.Provider value={{ paperType, setPaperType, academicLevel, setAcademicLevel, deadline, setDeadline, pages, setPages, price, setPrice }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error("useCalculatorContext must be used within a CalculatorProvider");
  }
  return context;
};
