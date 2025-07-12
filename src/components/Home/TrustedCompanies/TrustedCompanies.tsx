// src/components/TrustedCompanies.tsx

import React from "react";
import Image from "next/image";

// Data for the company logos
const companies = [
  { name: "Netflix", logoUrl: "/Companies/Logo6.svg" },
  { name: "YouTube", logoUrl: "/Companies/Logo2.svg" },
  { name: "Google", logoUrl: "/Companies/Logo3.svg" },
  { name: "Lenovo", logoUrl: "/Companies/Logo4.svg" },
  { name: "Slack", logoUrl: "/Companies/Logo5.svg" },
  { name: "Verizon", logoUrl: "/Companies/Logo7.svg" },
  { name: "Lexmark", logoUrl: "/Companies/Logo8.svg" },
  { name: "Microsoft", logoUrl: "/Companies/Logo9.svg" },
];

// Reusable component for each logo card
const LogoCard = ({ name, logoUrl }: { name: string; logoUrl: string }) => (
  <div className="flex h-32 items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
    <div className="relative h-8 w-full">
      <Image
        src={logoUrl}
        alt={`${name} logo`}
        layout="fill"
        objectFit="contain"
        className="h-full w-full"
      />
    </div>
  </div>
);

const TrustedCompanies = () => {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        {/* Main Grid: Text on left, logos on right for desktop */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-3">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold text-dark-text">
              6.3k trusted companies
            </h2>
            <p className="mt-4 text-gray-600">
              Nullam egestas tellus at enim ornare tristique. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>

          {/* Right Column: Logo Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {companies.map((company) => (
                <LogoCard key={company.name} {...company} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
