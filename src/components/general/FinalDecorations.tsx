// src/general/FinalDecorations.tsx
import React from "react";

// Green dashes extracted from the provided SVG
const GreenDashes = () => (
  <svg
    width="65"
    height="73"
    viewBox="0 0 65 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2588 3.51465L3.79999 10.9734"
      stroke="#FDBA74"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M22.0449 10.0576L14.5861 17.5164"
      stroke="#FDBA74"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32.8311 16.6006L25.3723 24.0594"
      stroke="#FDBA74"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M21.5869 24.5146L14.1281 31.9734"
      stroke="#FDBA74"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32.373 31.0576L24.9142 38.5164"
      stroke="#FDBA74"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M43.1592 37.6006L35.7004 45.0594"
      stroke="#FDBA74"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M42.7012 51.5146L35.2424 58.9734"
      stroke="#FDBA74"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M53.4873 58.0576L46.0285 65.5164"
      stroke="#FDBA74"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M64.2734 64.6006L56.8146 72.0594"
      stroke="#FDBA74"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

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
      {/* === THIS IS THE NEW ADDITION === */}
      {/* Top-left "rain" / dashes with a float animation */}
      <div className="absolute top-24 left-1/4 animate-float [animation-delay:-1s] hidden lg:block">
        <GreenDashes />
      </div>

      {/* Right-side "marker writing" */}
      <div className="absolute bottom-20 right-10 animate-float [animation-delay:-1.5s] hidden lg:block">
        <MutedOrangeSwoosh />
      </div>
    </>
  );
};
