// src/general/FinalDecorations.tsx
"use client";

import Image from "next/image";
import React from "react";

// A darker, more desaturated orange for the swoosh
const MutedOrangeSwoosh = () => (
  <svg
    width="108"
    height="38"
    viewBox="0 0 108 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M105.006 2.44141C89.349 12.3533 40.2312 34.0268 3.32715 35.5391"
      stroke="#D97706"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const FinalHeroDecorations = () => {
  return (
    <>
      {/* Top-left "rain" / dashes with a float animation */}
      <div
        className="absolute top-3 left-10 hidden lg:block"
        style={{
          animation: "floatY 3s ease-in-out infinite",
          animationDelay: "-1s",
        }}
      >
        <Image
          src={"/Hero/twist.png"}
          alt="Green Dashes"
          width={65}
          height={23}
          className="h-full w-full"
        />
      </div>

      {/* Right-side "marker writing" with a float animation */}
      <div
        className="absolute  top-[25%] right-[45%] hidden lg:block"
        style={{
          animation: "floatY 4s ease-in-out infinite",
          animationDelay: "-1.5s",
        }}
      >
        <Image
          src={"/Hero/thumb.png"}
          alt="Green Dashes"
          width={65}
          height={23}
          className="h-full w-full"
        />
      </div>

      {/* Right-side "marker writing" with a float animation */}
      <div
        className="absolute bottom-20 right-10 hidden lg:block"
        style={{
          animation: "floatY 4s ease-in-out infinite",
          animationDelay: "-1.5s",
        }}
      >
        <MutedOrangeSwoosh />
      </div>

      {/* Inline keyframes for floating animation */}
      <style jsx global>{`
        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
};
