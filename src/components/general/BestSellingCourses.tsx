// src/components/BestSellingCourses.tsx
"use client"; // Required for useState

import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button"; // Adjust the import path as necessary

// --- Helper Hook to check for mobile screen size ---
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // 640px is the 'sm' breakpoint in Tailwind
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return isMobile;
};

// Mock data remains the same
const coursesData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=2070",
    category: "Design",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 57,
    rating: 5.0,
    students: "265.7K",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    category: "Developments",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "The Complete 2021 Web Development Bootcamp",
    price: 57,
    rating: 5.0,
    students: "265.7K",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070",
    category: "Business",
    categoryColor: "text-[#15711F] bg-[#E1F7E3]",
    title: "Learn Python Programming Masterclass",
    price: 57,
    rating: 5.0,
    students: "265.7K",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070",
    category: "Marketing",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    price: 57,
    rating: 5.0,
    students: "265.7K",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
    category: "IT & Software",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "Reiki Level I, II and Master/Teacher Program",
    price: 57,
    rating: 5.0,
    students: "265.7K",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1887",
    category: "Music",
    categoryColor: "text-[#65390C] bg-[#FFF2E5]",
    title: "The Complete Foundation Stock Trading Course",
    price: 57,
    rating: 5.0,
    students: "265.7K",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070",
    category: "Marketing",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "Beginner to Pro in Excel: Financial Modeling and Valuati...",
    price: 57,
    rating: 5.0,
    students: "265.7K",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
    category: "Health & Fitness",
    categoryColor: "text-[#15711F] bg-[#E1F7E3]",
    title: "The Python Mega Course: Build 10 Real World Applications",
    price: 57,
    rating: 5.0,
    students: "265.7K",
  },
];

const BestSellingCourses = () => {
  const isMobile = useIsMobile();
  // Only limit the count if we are on a mobile device
  const initialCount = isMobile ? 4 : coursesData.length;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  // This effect ensures that if the user resizes from desktop to mobile,
  // the list correctly truncates.
  useEffect(() => {
    setVisibleCount(isMobile ? 4 : coursesData.length);
  }, [isMobile]);

  const showMoreCourses = () => {
    setVisibleCount(coursesData.length); // Show all courses
  };

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#1D2026]">
            Best selling courses
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {/* We slice the array based on the visibleCount state */}
          {coursesData.slice(0, visibleCount).map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>

        {/* Show the "Load More" button ONLY on mobile AND if there are more items to show */}
        {isMobile && visibleCount < coursesData.length && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={showMoreCourses}
              className="w-full"
            >
              Load More Courses
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellingCourses;
