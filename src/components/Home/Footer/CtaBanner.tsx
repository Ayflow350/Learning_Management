import React from "react";
import { Button } from "@/components/ui/button";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center lg:text-left">
    <p className="text-4xl lg:text-[40px] font-semibold text-white">{value}</p>
    <p className="text-sm text-[#B7BAC7] mt-1">{label}</p>
  </div>
);

const CtaBanner = () => {
  return (
    <div className="bg-[#1D2026]">
      <div className="container mx-auto px-6 py-16 lg:py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Main Text and Buttons */}
          <div className="lg:col-span-7 text-center md:text-left">
            <h2 className="text-3xl lg:text-[40px] font-semibold text-white leading-tight">
              Start learning with 67.1k students around the world.
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center  md:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-orange-400  rounded-none h-14 px-8 text-base"
              >
                Join The Family
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base bg-black/25 text-white rounded-none border-transparent hover:bg-white/10 hover:text-white"
              >
                Browse All Courses
              </Button>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatItem value="6.3k" label="Online courses" />
            <StatItem value="26k" label="Certified Instructor" />
            <StatItem value="99.9%" label="Success Rate" />
          </div>
        </div>
      </div>

      <div className=" border-t border-[#363B47]/50"></div>
    </div>
  );
};

export default CtaBanner;
