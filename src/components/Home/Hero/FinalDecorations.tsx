// src/general/FinalDecorations.tsx
"use client";

import Image from "next/image";
import React from "react";

export const FinalHeroDecorations = () => {
  return (
    <>
      {/* Top-left "rain" / dashes with a float animation */}
      <div
        className="absolute hidden lg:block"
        style={{
          top: "2vh",
          left: "4vw",
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

      {/* Right-side "marker writing" */}
      <div
        className="absolute hidden lg:block rotate-45"
        style={{
          top: "15%",
          right: "36%",
        }}
      >
        <Image
          src={"/Hero/curve.png"}
          alt="Curve"
          width={100}
          height={100}
          className="h-full w-full"
        />
      </div>

      {/* Bottom-right "marker writing" */}
      <div
        className="absolute hidden lg:block"
        style={{
          bottom: "10vh",
          right: "13vw",
          animation: "floatY 4s ease-in-out infinite",
          animationDelay: "-1.5s",
        }}
      >
        <Image
          src={"/Hero/marker.png"}
          alt="Marker"
          width={100}
          height={100}
          className="h-full w-full"
        />
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
