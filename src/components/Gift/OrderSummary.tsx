// src/components/Gift/OrderSummary.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OrderSummary = () => {
  return (
    <div className="rounded-lg border border-gray-200  p-6 w-auto md:max-w-[700px] lg:max-w-[648px] ">
      {/* Course Details */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-dark-text">Course</h3>
        <div className="flex items-start gap-4">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070"
            alt="Graphic Design Course Thumbnail"
            width={80}
            height={80}
            className=""
          />
          <div>
            <p className="text-sm text-gray-500">Course by: Courtney Henry</p>
            <h4 className="text-sm text-[#1D2026] w-full">
              Graphic Design Masterclass - Learn GREAT Design
            </h4>
            <p className="mt-1 font-bold text-primary">$13.00</p>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-6 border-t pt-6">
        <h3 className="mb-4 text-lg font-semibold text-dark-text">
          Order Summery
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$61.97 USD</span>
          </div>
          <div className="flex justify-between">
            <span>Coupon Discount</span>
            <span>8%</span>
          </div>
        </div>
        <div className="mt-4 flex justify-between border-t pt-4 font-bold text-dark-text">
          <span className="text-lg">Total:</span>
          <span className="text-xl">$75.00 USD</span>
        </div>
      </div>

      <Button
        size="lg"
        className="mt-6 h-14 w-full bg-primary text-lg hover:bg-orange-700"
      >
        Complete Payment
      </Button>
    </div>
  );
};

export default OrderSummary;
