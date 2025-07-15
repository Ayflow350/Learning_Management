import React from "react";
import { allCourses } from "@/data/courses";
import FilterBar from "@/components/Courses/FilterBar";
import CourseGrid from "@/components/Courses/CourseGrid";

import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Header/Navbar";
import Footer from "@/components/Home/Footer/Footer";

const CourseListPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <FilterBar />
          <div className="my-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"></div>
          <CourseGrid courses={allCourses} />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default CourseListPage;
