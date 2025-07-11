// src/components/Hero.tsx

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Pencil } from "lucide-react";
import InstructorCard from "./InstructorCard";
import AcadiaBlob from "./AcadiaBlob";
import { FinalHeroDecorations } from "./FinalDecorations";

// --- Local SVG Components for this Hero Section ---
const OrangeSwoosh = () => (
  <svg
    width="220"
    height="16"
    viewBox="0 0 220 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -bottom-2 left-0"
  >
    <path
      d="M2.35312 13.5656C36.6438 6.08437 137.969 -5.28438 217.647 6.08437"
      stroke="#FF6636"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const DarkOutline = () => (
  <svg
    width="223"
    height="248"
    viewBox="0 0 223 248"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M221 247C138.5 242.5 3.49997 185.5 2.00001 2"
      stroke="#4A5568"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const Hero = () => {
  return (
    <section className="bg-secondary pt-24 pb-12 overflow-hidden relative">
      <FinalHeroDecorations />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="py-12 text-center lg:text-left animate-in fade-in slide-in-from-left duration-700">
            <Badge
              variant="outline"
              className="bg-white border-gray-200 py-2 px-4 text-primary font-medium"
            >
              <Pencil className="w-4 h-4 mr-2 text-primary" />
              World Class Education
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 leading-tight">
              Get{" "}
              <span className="text-primary relative">
                2500+
                <OrangeSwoosh />
              </span>{" "}
              Best Online Courses From E-tutor
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Acquire global knowledge and build your professional skills
            </p>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <Button variant="default" size="lg" className="h-14 px-8 text-lg">
                Find Courses <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-14 w-14 rounded-full border-2 border-primary/50 bg-white hover:bg-secondary"
              >
                <Play className="w-6 h-6 text-primary fill-primary ml-1" />
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-[500px] md:h-[700px] lg:h-full animate-in fade-in slide-in-from-bottom-12 duration-700">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] md:w-[700px] z-10">
              <AcadiaBlob className="text-primary" />
            </div>
            <div className="absolute bottom-0 right-1/2 translate-x-[70%] hidden md:block z-20">
              <DarkOutline />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[450px] h-auto z-30">
              <Image
                src="/student.png"
                alt="Happy student"
                width={450}
                height={560}
                priority
              />
            </div>
            <div className="absolute bottom-10 left-0 hidden md:block z-40 animate-in fade-in slide-in-from-bottom-16 delay-300 duration-1000">
              <InstructorCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
