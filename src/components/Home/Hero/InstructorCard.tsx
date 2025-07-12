// src/components/InstructorCard.tsx
"use client";

import React from "react";
import Image from "next/image";

const InstructorCard = () => {
  return (
    <div
      className="relative w-max"
      style={{
        animation: "floatY 3.5s ease-in-out infinite",
      }}
    >
      <div className="relative z-10 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center space-x-4">
        <div className="flex -space-x-3">
          <Image
            src="https://i.pravatar.cc/40?img=11"
            alt="Instructor 1"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="https://i.pravatar.cc/40?img=32"
            alt="Instructor 2"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="https://i.pravatar.cc/40?img=45"
            alt="Instructor 3"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border-2 border-white">
            <span className="text-white font-bold text-sm">+</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-800">Instructor</h4>
          <p className="text-sm text-gray-500">200+ Instructor</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/20 rounded-2xl blur-2xl -z-10 transform translate-y-4"></div>

      {/* Inline float animation */}
      <style jsx global>{`
        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
};

export default InstructorCard;
