"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/types/course";
import SimpleCourseCard from "./SimpleCourseCard";
import CoursePreviewCard from "./CoursePreviewCard";

const coursesData: Course[] = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
    category: "Design",
    categoryColor: "text-pink-600 bg-pink-100",
    title: "The Python Mega Course: Build 10 Real World Applications",
    price: 57,
    rating: 5.0,
    ratingCount: "357k",
    students: "265.7K",
    level: "Beginner",
    duration: "6h",
    instructor: {
      name: "Kevin Gilbert",
      avatarUrl: "https://i.pravatar.cc/32?img=1",
    },
    whatYoullLearn: [
      "Learn to use Python professionally",
      "Create games with Python",
      "Build 10 real-world applications",
    ],
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
    category: "IT & Software",
    categoryColor: "text-red-600 bg-red-100",
    title: "Facebook Ads & Facebook Marketing MASTERY 2021",
    price: 57,
    rating: 4.8,
    ratingCount: "201k",
    students: "192.1K",
    level: "Intermediate",
    duration: "12h",
    instructor: {
      name: "Jonas S.",
      avatarUrl: "https://i.pravatar.cc/32?img=2",
    },
    whatYoullLearn: [
      "Master Facebook Ads from scratch",
      "Optimize for conversions",
      "Advanced targeting techniques",
    ],
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    category: "Developments",
    categoryColor: "text-blue-600 bg-blue-100",
    title: "2021 Complete Python Bootcamp From Zero to Hero",
    price: 14.0,
    originalPrice: 26.0,
    rating: 5.0,
    ratingCount: "410k",
    students: "301.5K",
    level: "All Levels",
    duration: "22h",
    instructor: {
      name: "Angela Yu",
      avatarUrl: "https://i.pravatar.cc/32?img=3",
    },
    whatYoullLearn: [
      "Go from beginner to expert in Python",
      "Understand advanced features",
      "Create a portfolio of Python projects",
    ],
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1580894732444-8ecded794825?q=80&w=2070",
    category: "Lifestyle",
    categoryColor: "text-purple-600 bg-purple-100",
    title: "Google Analytics Certification - Learn How To Pass The Exam",
    price: 57,
    rating: 5.0,
    ratingCount: "189k",
    students: "150.2K",
    level: "Beginner",
    duration: "8h",
    instructor: {
      name: "Darrel Wilson",
      avatarUrl: "https://i.pravatar.cc/32?img=4",
    },
    whatYoullLearn: [
      "Understand GA4 from scratch",
      "Set up conversion tracking",
      "Build professional reports",
    ],
  },
];

const RecentlyAddedCourses = () => {
  const [hoveredCourse, setHoveredCourse] = useState<Course | null>(null);
  // State now includes direction for positioning
  const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({});
  const gridRef = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<number | null>(null);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    course: Course
  ) => {
    if (timeoutId.current) window.clearTimeout(timeoutId.current);

    const cardElement = e.currentTarget;
    const grid = gridRef.current;
    if (!grid) return;

    const gridRect = grid.getBoundingClientRect();
    const cardRect = cardElement.getBoundingClientRect();

    // Calculate the vertical position (align with the top of the hovered card)
    const top = cardRect.top - gridRect.top;

    // === THIS IS THE NEW LOGIC ===
    // Determine if the card is in the left or right half of the grid
    const cardCenter = cardRect.left + cardRect.width / 2;
    const gridCenter = gridRect.left + gridRect.width / 2;

    const style: React.CSSProperties = { top: `${top}px` };

    if (cardCenter < gridCenter) {
      // Card is on the left, show popover on the right
      style.left = `${cardRect.right - gridRect.left + 16}px`;
    } else {
      // Card is on the right, show popover on the left
      style.right = `${gridRect.right - cardRect.left + 16}px`;
    }

    setPopoverStyle(style);
    setHoveredCourse(course);
  };

  const handleMouseLeave = () => {
    timeoutId.current = window.setTimeout(() => {
      setHoveredCourse(null);
    }, 150);
  };

  const onPreviewEnter = () => {
    if (timeoutId.current) window.clearTimeout(timeoutId.current);
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-dark-text">
            Recently added courses
          </h2>
        </div>

        <div className="relative" onMouseLeave={handleMouseLeave}>
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coursesData.map((course) => (
              <SimpleCourseCard
                key={course.id}
                course={course}
                onMouseEnter={(e) => handleMouseEnter(e, course)}
                onMouseLeave={() => {}}
              />
            ))}
          </div>

          <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none">
            <AnimatePresence>
              {hoveredCourse && (
                <motion.div
                  onMouseEnter={onPreviewEnter}
                  onMouseLeave={handleMouseLeave}
                  className="absolute pointer-events-auto"
                  // Apply the dynamically calculated style
                  style={popoverStyle}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <CoursePreviewCard course={hoveredCourse} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="secondary"
            className="h-12 px-6 bg-primary-light text-primary hover:bg-orange-200/60"
          >
            Browse All Course
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedCourses;
