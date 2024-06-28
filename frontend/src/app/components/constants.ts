import { Chathura } from "next/font/google";
import { getParsedType } from "zod";

export const additionalServices = {
  "Expert Proofreading": {
    price: "$3.75",
    description:
      "Get your paper checked by an expert proofreader: no grammatical and spelling mistakes, a perfect match with your requirements, and correspondence with the chosen academic level.",
  },
  "VIP Support": {
    price: "$9.99",
    description:
      "Personal 24/7 VIP manager responsible for tracking your order until final delivery, alongside personalized communication via call and text.",
  },
  "Get Plagarism Report": {
    price: "$9.99",
    description:
      "All papers are checked for plagiarism but if you'd like an official report alongside your paper please choose this option.",
  },
  "Get Copy of Sources": {
    price: "$14.95",
    description:
      "Selection of related articles and books, cited in your paper, Get excerpts of the articles and e- books or the links to these excerpts cited in the paper.",
  },
};

// export const deadline = ["8 Hours", "24 Hours", "48 Hours", "3 Days", "5 Days", "7 Days", "14 Days"];
export const deadline = [
  "8_hours",
  "24_hours",
  "48_hours",
  "3_days",
  "5_days",
  "7_days",
  "14_days",
];
export const writerCategory = {
  "Best Available": {
    percentage: "",
    description: "Standard Price",
  },
  Advanced: {
    percentage: "+25%",
    description:
      "High-rank professional writer, proficient in the requested field of study",
  },
  ENL: {
    percentage: "+30%",
    description: "English as a native language writer (UK, US, CA, Au writers)",
  },
};

export const paperFormat = [
  "APA",
  "Chicago/Turibian",
  "MLA",
  "Not Applicable",
  "Other",
];

// export const academicLevel = [
//   "High School",
//   "Undergrad.(yrs 1-2)",
//   "Undergrad.(yrs 3-4)",
//   "Master's",
//   "PhD",
// ];
export const academicLevel = [
  "high_school",
  "college",
  "undergraduate",
  "masters",
  "phd",
];

export const paperType = [
  "Choose type",
  "Essay(any type)",
  "Discussion Essay",
  "Analysis(any type)",
  "Argumentative essays",
  "Research Paper",
  "Coursework",
  "Case Study",
  "Book Report",
  "Term Paper",
  "Article",
  "Assignment",
  "Article Critique",
  "Annotated Bibliography",
  "Reasearch Paper",
  "Speech",
  "Admission Essay",
  "Application Letter",
  "Personal Statement",
  "Multiple Choice Questions",
  "Group Project",
  "PowerPoint Presentation",
  "Lab Report",
  "Statistics Project",
  "Math/Physics/Economics/Statistics Problems",
  "Other",
];

export const discipline = [
  "Choose type",
  "Nursing",
  "Business Studies",
  "Psychology",
  "Philosophy",
  "Marketing",
  "Literature",
  "English",
  "History",
  "Law",
  "Economics",
  "Chemistry",
  "Biology",
  "Physics",
  "Mathematics",
  "Computer Science",
  "Engineering",
  "Other",
];

export const academicLevelPricing: { [key: string]: number } = {
  high_school: 1.0,
  college: 1.2,
  undergraduate: 1.4,
  masters: 1.6,
  phd: 2.0,
};

// Pricing factors based on deadlines
export const deadlinePricing: { [key: string]: number } = {
  "8_hours": 2.5,
  "12_hours": 2.3,
  "24_hours": 2.0,
  "36_hours": 1.8,
  "48_hours": 1.6,
  "3_days": 1.4,
  "5_days": 1.2,
  "7_days": 1.1,
  "14_days": 1.0,
};

export const highschoolChartPricing = {
  "8_hours": "$7.50",
  "24_hours": "$10.00",
  "48_hours": "$6.00",
  "3_days": "$5.75",
  "5_days": "$4.50",
  "7_days": "$3.75",
  "14_days": "$3.00",
};
export const collegeChartPricing = {
  "8_hours": "$8.00",
  "24_hours": "$7.50",
  "48_hours": "$6.75",
  "3_days": "$6.25",
  "5_days": "$5.25",
  "7_days": "$4.50",
  "14_days": "$3.75",
};

export const undergrdChartPricing = {
  "8_hours": "$8.75",
  "24_hours": "$8.25",
  "48_hours": "$7.50",
  "3_days": "$6.75",
  "5_days": "$6.25",
  "7_days": "$5.50",
  "14_days": "$5.00",
};

export const mastersChartPricing = {
  "8_hours": "$11.00",
  "24_hours": "$9.50",
  "48_hours": "$8.00",
  "3_days": "$7.50",
  "5_days": "$7.00",
  "7_days": "$6.50",
  "14_days": "$5.50",
};

export const phdChartPricing = {
  "8_hours": "$17.50",
  "24_hours": "$12.00",
  "48_hours": "$11.00",
  "3_days": "$9.50",
  "5_days": "$8.50",
  "7_days": "$8.00",
  "14_days": "$7.00",
};

// pages pricing 
export const highschoolPagePricing = {
  "8_hours": "$16.00",
  "24_hours": "$15.00",
  "48_hours": "$20.00",
  "3_days": "$12.00",
  "5_days": "$11.50",
  "7_days": "$3.75",
  "14_days": "$3.00",
};

// export const highschoolPagePricing = {
//   "8_hours": "$7.50",
//   "24_hours": "$10.00",
//   "48_hours": "$6.00",
//   "3_days": "$5.75",
//   "5_days": "$4.50",
//   "7_days": "$3.75",
//   "14_days": "$3.00",
// };

// export const highschoolPagePricing = {
//   "8_hours": "$7.50",
//   "24_hours": "$10.00",
//   "48_hours": "$6.00",
//   "3_days": "$5.75",
//   "5_days": "$4.50",
//   "7_days": "$3.75",
//   "14_days": "$3.00",
// };

// export const highschoolPagePricing = {
//   "8_hours": "$7.50",
//   "24_hours": "$10.00",
//   "48_hours": "$6.00",
//   "3_days": "$5.75",
//   "5_days": "$4.50",
//   "7_days": "$3.75",
//   "14_days": "$3.00",
// };