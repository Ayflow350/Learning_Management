// src/components/FeaturedCourses.tsx
import React from "react";
import FeaturedCourseCard from "./FeaturedCourseCard";

const featuredCoursesData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070",
    category: "Health & Fitness",
    categoryColor: "text-[#15711F] bg-[#E1F7E3]",
    title: "Investing In Stocks The Complete Course! (13 H...",
    instructor: {
      name: "Kevin Gilbert",
      avatarUrl: "https://i.pravatar.cc/32?img=1",
    },
    price: 14.0,
    originalPrice: 26.0,

    studentCount: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
    category: "Personal Development",
    categoryColor: "text-[#E34444] bg-[#FFEEE8]",
    title: "Google Analytics Certification - Learn How To...",
    instructor: {
      name: "Kevin Gilbert",
      avatarUrl: "https://i.pravatar.cc/32?img=1",
    },
    price: 14.0,
    originalPrice: 26.0,

    studentCount: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
    category: "Productivity",
    categoryColor: "text-gray-600 bg-gray-100",
    title: "Adobe XD for Web Design: Essential Principles",
    instructor: {
      name: "Kevin Gilbert",
      avatarUrl: "https://i.pravatar.cc/32?img=1",
    },
    price: 14.0,
    originalPrice: 26.0,

    studentCount: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070",
    category: "Music",
    categoryColor: "text-[#65390C] bg-[#FFF2E5]",
    title: "The Python Mega Course: Build 10 Real World ...",
    instructor: {
      name: "Kevin Gilbert",
      avatarUrl: "https://i.pravatar.cc/32?img=1",
    },
    price: 14.0,
    originalPrice: 26.0,

    studentCount: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
];

const FeaturedCourses = () => {
  return (
    // === THIS IS THE OVERLAY EFFECT ===
    // Using `bg-transparent` so we see the section below it,
    // `relative` for z-index, and a negative top margin `-mt-20`
    <section className="bg-transparent py-28 sm:py-24 relative z-10 -mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between  items-center lg:items-end mb-12">
          <h2 className=" text-2xl  md:text-4xl mb-0 md:mb-2 font-semibold text-[#1D2026]">
            Our feature courses
          </h2>
          <p className="text-[#4E5566] text-[14px] max-w-[424px] mt-4 md:mt-0 text-center lg:text-left">
            Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec
            varius purus et eleifend porta.
          </p>
        </div>

        {/* Responsive Grid for Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredCoursesData.map((course) => (
            <FeaturedCourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
