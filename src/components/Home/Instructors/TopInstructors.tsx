import React from "react";
import InstructorProfileCard from "./InstructorProfileCard";
import { ArrowRight } from "lucide-react";

const instructorsData = [
  {
    imageUrl: "Instructors/image1.svg",
    name: "Devon Lane",
    title: "Senior Developer",
    rating: 4.6,
    studentCount: "854",
  },
  {
    imageUrl: "Instructors/image2.svg",
    name: "Darrell Steward",
    title: "Digital Product Designer",
    rating: 4.9,
    studentCount: "451,444",
  },
  {
    imageUrl: "Instructors/image3.svg",
    name: "Jane Cooper",
    title: "UI/UX Designer",
    rating: 4.8,
    studentCount: "435,671",
  },
  {
    imageUrl: "Instructors/image4.svg",
    name: "Albert Flores",
    title: "Adobe Instructor",
    rating: 4.7,
    studentCount: "511,123",
  },
  {
    imageUrl: "Instructors/image5.svg",
    name: "Kathryn Murphy",
    title: "Lead Developer",
    rating: 4.2,
    studentCount: "2,711",
  },
];

const TitleWithDashedLine = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mb-12 text-center">
    <h2 className="relative inline-block  px-8 text-3xl font-extrabold text-dark-text">
      {children}
    </h2>
  </div>
);

const TopInstructors = () => {
  return (
    <section className=" py-24 sm:py-32 xl:-mt-80">
      <div className="container mx-auto px-6  xl:bg-white xl:border xl:p-[80px]">
        <TitleWithDashedLine>Top instructor of the month</TitleWithDashedLine>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {instructorsData.map((instructor) => (
            <InstructorProfileCard key={instructor.name} {...instructor} />
          ))}
        </div>

        <div className="mt-12 rounded-lg p-4 text-center">
          <p className="text-gray-600">
            Thousands of students waiting for a instructor. Start teaching &
            earning now!{" "}
            <a
              href="#"
              className="group inline-flex items-center font-semibold text-primary transition-colors hover:text-orange-700"
            >
              Become Instructor
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
