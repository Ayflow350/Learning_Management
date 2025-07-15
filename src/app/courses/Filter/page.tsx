import React from "react";
import { allCourses } from "@/data/courses";
import CourseGrid from "@/components/Courses/CourseGrid";
import FilterSidebar from "@/components/Courses/FilterSidebar";
import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Header/Navbar";
import Footer from "@/components/Home/Footer/Footer";
import FilterBar from "@/components/Courses/FilterBar";

const FilteredCoursePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="bg-white  min-h-screen">
        <div className="container mx-auto  px-6 py-12">
          {/* The FilterBar now sits above the two-column grid */}
          <div className="mb-8">
            <FilterBar />
          </div>

          {/* === THIS IS THE CORRECTED STRUCTURE === */}
          <div className="grid grid-cols-1 lg:grid-cols-12  items-start">
            {/* --- LEFT COLUMN: Filter Sidebar --- */}
            {/* The sticky container is now a direct child of the grid, which is better for positioning */}
            <div className="hidden lg:block  lg:col-span-3">
              <div className="sticky top-28">
                <FilterSidebar />
              </div>
            </div>

            {/* --- RIGHT COLUMN: Course Grid --- */}
            {/* This column now correctly takes up the full width on mobile, and 8/12 on desktop */}
            <div className="col-span-1 lg:col-span-9">
              <CourseGrid
                courses={allCourses}
                gridCols={{ sm: 2, lg: 3, xl: 3 }} // This setup is perfect for this layout
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FilteredCoursePage;
