import React from "react";
import InstructorBioCard from "./InstructorBioCard";

const instructorsData = [
  {
    imageUrl: "/Video/image1.svg",
    name: "Vako Shvili",
    title: "Web Designer & Best-Selling Instructor",
    rating: 4.9,
    studentCount: "236,568",
    courseCount: 9,
    bio: "One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup. He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed. This path led him to become a top-rated instructor, sharing his passion for design and entrepreneurship with hundreds of thousands of students worldwide.",
  },
  {
    imageUrl: "/Video/image2.svg",
    name: "Nima Tahami",
    title: "Entrepreneur & Designer • Founder of ShiftRide",
    rating: 4.6,
    studentCount: "5,342",
    courseCount: 1,
    bio: "I'm an entrepreneur & designer with a high passion for building products of all sorts and seeing ideas come to life. As a serial entrepreneur, I've designed and built projects in fields ranging from fashion to technology. I have over 10 years of experience in both product design and development, helping startups and established companies launch successful products.",
  },
];

const Instructors = () => {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-semibold text-[#1D2026]">
        Course instructor
      </h3>
      <div className="space-y-6">
        {instructorsData.map((instructor) => (
          <InstructorBioCard key={instructor.name} {...instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
