// src/components/Step.tsx
import React from "react";

interface StepProps {
  number: number;
  text: string;
  color: string; // e.g., 'bg-indigo-100 text-indigo-600'
}

const Step = ({ number, text, color }: StepProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${color}`}
      >
        {number}
      </div>
      <p className="text-md text-gray-700">{text}</p>
    </div>
  );
};

export default Step;
