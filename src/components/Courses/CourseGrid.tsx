"use client";

import React, { useState, useEffect } from "react";
import { Course } from "@/types/course";
import SimpleCourseCard from "./SimpleCourseCard";
import Pagination from "./Pagination";

// --- START: Custom Hook to get items per page based on screen size ---
const useItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(20); // Default to 20 for desktop

  useEffect(() => {
    const getItems = () => {
      if (window.innerWidth < 640) {
        // Mobile (sm breakpoint)
        return 8;
      } else if (window.innerWidth < 1024) {
        // Tablet (lg breakpoint)
        return 12;
      }
      return 20; // Desktop
    };

    const handleResize = () => {
      setItemsPerPage(getItems());
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return itemsPerPage;
};
// --- END: Custom Hook ---

const CourseGrid = ({ courses }: { courses: Course[] }) => {
  // Use our new dynamic hook
  const itemsPerPage = useItemsPerPage();

  const [currentPage, setCurrentPage] = useState(1);

  // All calculations are now based on the dynamic itemsPerPage value
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  // When the number of items per page changes (due to resize), reset to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentCourses.map((course) => (
          // The SimpleCourseCard props need to be updated if you still have the hover logic
          <SimpleCourseCard
            key={course.id}
            course={course}
            // Add dummy props if your card expects them
          />
        ))}
      </div>

      {/* Only show pagination if there is more than one page */}
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
