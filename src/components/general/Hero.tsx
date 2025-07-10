// src/components/Hero.tsx
import React from "react";
import Image from "next/image"; // Import the Next.js Image component
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Learn with expert <br /> anytime anywhere
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              Our mision is to help people to find the best course online and
              learn with expert anytime, anywhere.
            </p>
            <div className="mt-8">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                Create Account
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px]">
              <Image
                // A great, free-to-use placeholder image from Unsplash
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
                alt="A group of diverse people learning online with laptops"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
