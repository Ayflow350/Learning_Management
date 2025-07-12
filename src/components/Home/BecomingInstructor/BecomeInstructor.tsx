// src/components/BecomeInstructor.tsx

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Adjust the import path as necessary
import { ArrowRight } from "lucide-react";
import Step from "./Step"; // Assuming you have this component from before

const BecomeInstructor = () => {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        {/* Main container with shadow and rounded corners */}
        <div className="overflow-hidden rounded-lg bg-white shadow-xl">
          {/* Main Grid: 2 columns on desktop, 1 on mobile */}
          <div className="grid lg:grid-cols-2">
            {/* --- LEFT COLUMN (Orange with Text and Image) --- */}
            <div className="relative overflow-hidden bg-primary p-10 lg:p-16">
              {/* Content Layer (sits on top) */}
              <div className="relative z-10 flex h-full flex-col justify-center">
                <div className="max-w-sm text-white">
                  <h2 className="mb-4 text-4xl font-extrabold">
                    Become an instructor
                  </h2>
                  <p className="mb-8 text-lg opacity-90">
                    Instructors from around the world teach millions of students
                    on Udemy. We provide the tools and skills to teach what you
                    love.
                  </p>
                  <Button
                    variant="outline"
                    className="h-14 bg-white px-8 text-lg font-semibold text-primary hover:bg-gray-100"
                  >
                    Start Teaching <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Image Layer (positioned absolutely to bleed out) */}
              <div className="absolute -right-16 bottom-0 z-0 hidden h-auto w-[320px] md:block lg:w-[420px] lg:-right-24">
                <Image
                  src="/instructors.png" // Use your transparent PNG image
                  alt="A smiling instructor pointing towards the text content"
                  width={420}
                  height={630}
                  priority
                />
              </div>
            </div>

            {/* --- RIGHT COLUMN (White with Steps) --- */}
            <div className="flex flex-col justify-center bg-white p-10 lg:p-16">
              <h3 className="mb-8 text-3xl font-extrabold text-dark-text">
                Your teaching & earning steps
              </h3>
              <div className="space-y-6">
                <Step
                  number={1}
                  text="Apply to become instructor"
                  color="bg-indigo-100 text-indigo-600"
                />
                <Step
                  number={2}
                  text="Build & edit your profile"
                  color="bg-rose-100 text-rose-600"
                />
                <Step
                  number={3}
                  text="Create your new course"
                  color="bg-orange-100 text-orange-600"
                />
                <Step
                  number={4}
                  text="Start teaching & earning"
                  color="bg-green-100 text-green-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstructor;
