import React from "react";
import { allCourses } from "@/data/courses";
import CourseGrid from "@/components/Courses/CourseGrid";
import FilterSidebar from "@/components/Courses/FilterSidebar";
import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Header/Navbar";
import Footer from "@/components/Home/Footer/Footer";

const FilteredCoursePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-extrabold text-dark-text mb-8">
            Filter Courses
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Filter Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-28">
                <FilterSidebar />
              </div>
            </div>
            {/* Right Column: Course Grid */}
            <div className="lg:col-span-9">
              {/* === THIS IS THE CHANGE: We pass a prop to force 3 columns === */}
              <CourseGrid
                courses={allCourses}
                gridCols={{ sm: 2, lg: 3, xl: 3 }}
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
