"use client";

import React, { useState, useEffect } from "react";
import { Courses } from "@/types/course"; // Using your specified type name
import SimpleCourseCard from "./SimpleCourseCard";
import Pagination from "./Pagination";

// Custom Hook to get items per page based on screen size (no changes here)
const useItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(20);
  useEffect(() => {
    const getItems = () => {
      if (window.innerWidth < 640) {
        return 8;
      } else if (window.innerWidth < 1024) {
        return 12;
      }
      return 20;
    };
    const handleResize = () => {
      setItemsPerPage(getItems());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return itemsPerPage;
};

// Updated props interface to use `Courses`
interface CourseGridProps {
  courses: Courses[];
  gridCols?: {
    sm?: number;
    lg?: number;
    xl?: number;
  };
}

const CourseGrid = ({ courses, gridCols }: CourseGridProps) => {
  const itemsPerPage = useItemsPerPage();
  const [currentPage, setCurrentPage] = useState(1);

  // Dynamically build the grid class name
  const cols = {
    sm: gridCols?.sm || 2,
    lg: gridCols?.lg || 3,
    xl: gridCols?.xl || 4,
  };
  const gridClassName = `grid grid-cols-1 sm:grid-cols-${cols.sm} lg:grid-cols-${cols.lg} xl:grid-cols-${cols.xl} gap-8`;

  // Pagination logic remains the same
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  return (
    <div>
      <div className={gridClassName}>
        {currentCourses.map((course) => (
          <SimpleCourseCard
            key={course.id}
            course={course}
            // Add dummy props if your card still expects them
            // onMouseEnter={() => {}}
            // onMouseLeave={() => {}}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default CourseGrid;
