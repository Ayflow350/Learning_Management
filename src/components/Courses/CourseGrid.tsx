"use client";
import React, { useState } from "react";
import { Course } from "@/types/course";
import SimpleCourseCard from "./SimpleCourseCard";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 8;

const CourseGrid = ({ courses }: { courses: Course[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCourses = courses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentCourses.map((course) => (
          <SimpleCourseCard key={course.id} course={course} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
export default CourseGrid;
