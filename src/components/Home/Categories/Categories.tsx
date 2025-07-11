// src/components/Categories.tsx
import React from "react";
import CategoryCard from "./CategoryCard";
import {
  Cpu,
  Handshake,
  Landmark,
  Laptop,
  HardHat,
  Briefcase,
  Megaphone,
  Camera,
  Palette,
  Box,
  HeartPulse,
  Music,
  ArrowRight,
} from "lucide-react";

const categoryData = [
  {
    title: "Label",
    count: "63,478 Courses",
    icon: <Cpu />,
    bgColor: "bg-[#EBEBFF]",
    iconColor: "text-[#564FFD]",
    iconBgColor: "bg-indigo-100",
  },
  {
    title: "Business",
    count: "52,822 Courses",
    icon: <Handshake />,
    bgColor: "bg-[#E1F7E3]",
    iconColor: "text-green-500",
    iconBgColor: "bg-green-100",
  },
  {
    title: "Finance & Accounting",
    count: "33,841 Courses",
    icon: <Landmark />,
    bgColor: "bg-[#FFF2E5]",
    iconColor: "text-[#FD8E1F]",
    iconBgColor: "bg-amber-100",
  },
  {
    title: "IT & Software",
    count: "22,649 Courses",
    icon: <Laptop />,
    bgColor: "bg-[#FFF0F0]",
    iconColor: "text-[#E34444]",
    iconBgColor: "bg-rose-100",
  },
  {
    title: "Personal Development",
    count: "20,126 Courses",
    icon: <HardHat />,
    bgColor: "bg-[#E1F7E3]",
    iconColor: "text-green-500",

    iconBgColor: "bg-orange-200",
  },
  {
    title: "Office Productivity",
    count: "13,932 Courses",
    icon: <Briefcase />,
    bgColor: "bg-[#F5F7FA]",
    iconColor: "text-gray-600",
    iconBgColor: "bg-gray-200",
  },
  {
    title: "Marketing",
    count: "12,098 Courses",
    icon: <Megaphone />,
    bgColor: "bg-[#EBEBFF]",
    iconColor: "text-indigo-500",
    iconBgColor: "bg-indigo-100",
  },
  {
    title: "Photography & Video",
    count: "6,196 Courses",
    icon: <Camera />,
    bgColor: "bg-gray-100",
    iconColor: "text-[#1D2026]",
    iconBgColor: "text-[#1D2026]",
  },
  {
    title: "Lifestyle",
    count: "2,736 Courses",
    icon: <Box />,
    bgColor: "bg-[#FFF2E5]",
    iconColor: "text-amber-500",
    iconBgColor: "bg-amber-100",
  },
  {
    title: "Design",
    count: "2,600 Courses",
    icon: <Palette />,
    bgColor: "bg-[#FFEEE8]",
    iconColor: "text-rose-500",
    iconBgColor: "bg-rose-100",
  },
  {
    title: "Health & Fitness",
    count: "1,678 Courses",
    icon: <HeartPulse />,
    bgColor: "bg-[#E1F7E3]",
    iconColor: "text-green-500",
    iconBgColor: "bg-green-100",
  },
  {
    title: "Music",
    count: "959 Courses",
    icon: <Music />,
    bgColor: "bg-[#FFF2E5]",
    iconColor: "text-amber-500",
    iconBgColor: "bg-amber-100",
  },
];

const Categories = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#1D2026]">
            Browse top category
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryData.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              courseCount={category.count}
              icon={category.icon}
              backgroundColor={category.bgColor}
              iconColor={category.iconColor}
              iconBgColor={category.iconBgColor}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="text-primary font-semibold inline-flex items-center group"
          >
            <span className="text-[#4E5566] text-sm mr-2">
              We have more category & subcategory.
            </span>{" "}
            Browse All
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
