// src/app/gift-course/page.tsx
import React from "react";

import GiftForm from "@/components/Gift/GiftForm";
import OrderSummary from "@/components/Gift/OrderSummary";
import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Header/Navbar";
import Footer from "@/components/Home/Footer/Footer";

const Breadcrumb = () => (
  <nav
    className="mb-8 flex text-sm text-center justify-center text-gray-500"
    aria-label="Breadcrumb"
  >
    <ol className="inline-flex items-center text-[12px] md:text-[14px]  space-x-1 md:space-x-2">
      <li className="inline-flex items-center ">
        <a href="#" className="hover:text-primary">
          Home
        </a>
      </li>
      <li>
        <div className="flex items-center">
          /
          <a href="#" className="ml-1 hover:text-primary md:ml-2">
            Course
          </a>
        </div>
      </li>
      <li>
        <div className="flex items-center">
          /
          <a href="#" className="ml-1 hover:text-primary md:ml-2">
            Complete Web...esign
          </a>
        </div>
      </li>
      <li aria-current="page">
        <div className="flex items-center">
          /
          <span className="ml-1 font-medium text-gray-700 md:ml-2">
            Gift Course
          </span>
        </div>
      </li>
    </ol>
  </nav>
);

const GiftCoursePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main
        className="relative bg-fixed  bg-white py-12 bg-repeat h-[150px] bg-center bg-cover"
        style={{ backgroundImage: "url('/Video/BG.svg')" }}
      >
        <div className="container mx-auto px-6 ">
          <h1 className="mb-2 text-3xl font-semibold text-center text-[#1D2026]">
            Gift Course
          </h1>
          <Breadcrumb />

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4  pt-[80px]">
            {/* Left Column: Form */}

            <div className="lg:col-span-2 ">
              <h1 className="mb-[40px] text-3xl    font-semibold text-[#1D2026]">
                Gift Course
              </h1>
              <GiftForm />
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-2  justify-center items-center">
              <div className="sticky   container mx-auto lg:px-20 top-28 justify-center items-center">
                <OrderSummary />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default GiftCoursePage;
