// src/components/DecorativeSvgs.tsx
import React from "react";

const GreenSquiggle = () => (
  <svg
    width="61"
    height="37"
    viewBox="0 0 61 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.37891 35.1387C11.5332 29.5694 28.5332 10.1387 37.0332 6.63867C45.5332 3.13867 55.6875 0.638672 59.5332 1.63867"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M1.37891 21.1387C11.5332 15.5694 28.5332 -3.86133 37.0332 -7.36133C45.5332 -10.8613 55.6875 -13.3613 59.5332 -12.3613"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const GreenDashes = () => (
  <svg
    width="80"
    height="75"
    viewBox="0 0 80 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2588 3.51465L3.79999 10.9734"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M22.0449 10.0576L14.5861 17.5164"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M32.8311 16.6006L25.3723 24.0594"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M21.5869 24.5146L14.1281 31.9734"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M32.373 31.0576L24.9142 38.5164"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M43.1592 37.6006L35.7004 45.0594"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M42.7012 51.5146L35.2424 58.9734"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M53.4873 58.0576L46.0285 65.5164"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M64.2734 64.6006L56.8146 72.0594"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const DottedGrid = () => (
  <svg
    width="88"
    height="40"
    viewBox="0 0 88 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" fill="#6366F1" fillOpacity="0.3" />
    <circle cx="24" cy="4" r="4" fill="#6366F1" fillOpacity="0.3" />
    <circle cx="44" cy="4" r="4" fill="#6366F1" fillOpacity="0.3" />
    <circle cx="64" cy="4" r="4" fill="#6366F1" fillOpacity="0.3" />
    <circle cx="84" cy="4" r="4" fill="#6366F1" fillOpacity="0.3" />
    <circle cx="4" cy="20" r="4" fill="#6366F1" fillOpacity="0.5" />
    <circle cx="24" cy="20" r="4" fill="#6366F1" fillOpacity="0.5" />
    <circle cx="44" cy="20" r="4" fill="#6366F1" fillOpacity="0.5" />
    <circle cx="64" cy="20" r="4" fill="#6366F1" fillOpacity="0.5" />
    <circle cx="84" cy="20" r="4" fill="#6366F1" fillOpacity="0.5" />
    <circle cx="4" cy="36" r="4" fill="#6366F1" />
    <circle cx="24" cy="36" r="4" fill="#6366F1" />
    <circle cx="44" cy="36" r="4" fill="#6366F1" />
    <circle cx="64" cy="36" r="4" fill="#6366F1" />
    <circle cx="84" cy="36" r="4" fill="#6366F1" />
  </svg>
);

const BrownSwoosh = () => (
  <svg
    width="98"
    height="38"
    viewBox="0 0 98 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M95.0347 2.33301C81.4427 11.385 36.3157 32.553 3.00019 35.003"
      stroke="#A16207"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const HeroDecorations = () => {
  return (
    <>
      <div className="absolute top-8 left-8 animate-float hidden lg:block">
        <GreenSquiggle />
      </div>
      <div className="absolute top-24 right-1/4 animate-float [animation-delay:-1s] hidden lg:block">
        <GreenDashes />
      </div>
      <div className="absolute bottom-16 left-8 animate-float [animation-delay:-2s] hidden lg:block">
        <DottedGrid />
      </div>
      <div className="absolute bottom-20 right-10 animate-float [animation-delay:-1.5s] hidden lg:block">
        <BrownSwoosh />
      </div>
    </>
  );
};
