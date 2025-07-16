"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  Clock,
  BarChart3,
  Users,
  Languages,
  Captions,
  Infinity,
  FileText,
  Trophy,
  Smartphone,
  Layers,
  Heart,
  Gift,
  Copy,
  Facebook,
  Twitter,
  Mail,
  MessageSquare,
  AlarmClock,
} from "lucide-react";

// Reusable component for the course stats
const StatItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex  items-center justify-between text-sm ">
    <div className="flex items-center gap-3">
      <span className="text-[#A1A5B3]">{icon}</span>
      <span className="text-[#1D2026] text-[14px]">{label}</span>
    </div>
    <span className="text-[14px] text-[#6E7485]">{value}</span>
  </div>
);

// Reusable component for the "includes" list
const IncludesItem = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <li className="flex items-center gap-3">
    <div className="">{icon}</div>
    <span className="text-[#4E5566] text-[14px]">{children}</span>
  </li>
);

const PurchaseCard = () => {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow-lg">
      {/* Price and Countdown */}
      <div className="p-5">
        <div className="flex items-baseline gap-3">
          <p className="text-[24px]  text-[#1D2026]">$14.00</p>
          <p className="text-base text-[#8C94A3] line-through">$26.00</p>
          <div className="ml-auto rounded bg-primary-light px-2 py-1">
            <p className="font-medium bg-[#FFEEE8] py-[8px] text-[14px] line-through px-[12px] text-primary">
              56% OFF
            </p>
          </div>
        </div>
        <p className="mt-2 text-sm text-[#E34444] flex items-center gap-1.5">
          <AlarmClock size={16} /> 2 days left at this price!
        </p>
      </div>

      {/* Course Stats */}
      <div className="border-t px-[24px] py-[24px] space-y-[16px]">
        <StatItem
          icon={<Clock size={18} />}
          label="Course Duration"
          value="6 Month"
        />
        <StatItem
          icon={<BarChart3 size={18} />}
          label="Course Level"
          value="Beginner and Intermediate"
        />
        <StatItem
          icon={<Users size={18} />}
          label="Students Enrolled"
          value="69,419,618"
        />
        <StatItem
          icon={<Languages size={18} />}
          label="Language"
          value="Mandarin"
        />
        <StatItem
          icon={<Captions size={18} />}
          label="Subtitle Language"
          value="English"
        />
      </div>

      {/* Action Buttons */}
      <div className="border-t p-5 space-y-3">
        <Button
          size="lg"
          className="h-12 w-full bg-primary  rounded-none text-lg hover:bg-orange-700"
        >
          Add To Cart
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="h-12 w-full bg-primary-light rounded-none bg-[#FFEEE8] text-primary text-lg hover:bg-orange-200/60"
        >
          Buy Now
        </Button>
        <div className="grid grid-cols-2 gap-3">
          {/* === THIS IS THE CHANGE: Using Heart and Gift icons === */}
          <Button
            variant="outline"
            className="h-12 w-full text-[#4E5566] rounded-none font-semibold"
          >
            <Heart className="mr-2 h-4 w-4" /> Add To Wishlist
          </Button>
          <Button
            variant="outline"
            className="h-12 w-full text-[#4E5566] rounded-none font-semibold"
          >
            <Gift className="mr-2 h-4 w-4" /> Gift Course
          </Button>
        </div>
        <p className="text-center text-xs text-gray-500">
          Note: all course have 30-days money-back guarantee
        </p>
      </div>

      {/* Course Includes */}
      <div className="border-t p-5">
        <h4 className="font-medium text-[#1D2026] mb-4">
          This course includes:
        </h4>
        <ul className="space-y-[12px] text-sm text-gray-600 ">
          {/* === THIS IS THE CHANGE: Using the Infinity icon === */}
          <IncludesItem
            icon={<Infinity size={24} className="text-[#FF6636]" />}
          >
            Lifetime access
          </IncludesItem>
          <IncludesItem
            icon={<FileText size={24} className="text-[#FF6636]" />}
          >
            Free exercises file & downloadable resources
          </IncludesItem>
          <IncludesItem icon={<Trophy size={24} className="text-[#FF6636]" />}>
            <span className="">Shareable certificate of completion</span>
          </IncludesItem>
          <IncludesItem
            icon={<Smartphone size={24} className="text-[#FF6636]" />}
          >
            Access on mobile, tablet and TV
          </IncludesItem>
          <IncludesItem icon={<Layers size={24} className="text-[#FF6636]" />}>
            100% online course
          </IncludesItem>
        </ul>
      </div>

      {/* Share Section */}
      <div className="border-t p-5">
        <h4 className="font-medium text-[#1D2026] mb-3">Share this course:</h4>
        <div className="grid grid-cols-5 gap-2">
          <Button
            variant="outline"
            className="h-12  rounded-none text-[#4E5566]"
          >
            <Copy size={18} />
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-none text-[#4E5566]"
          >
            <Facebook size={18} />
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-none text-[#4E5566]"
          >
            <Twitter size={18} />
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-none text-[#4E5566]"
          >
            <Mail size={18} />
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-none text-[#4E5566]"
          >
            <MessageSquare size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
