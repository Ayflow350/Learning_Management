import React from "react";
import Image from "next/image";
import { Star, Users } from "lucide-react";
import { Course } from "@/types/course";

interface SimpleCourseCardProps {
  course: Course;
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
}

const SimpleCourseCard = ({
  course,
  onMouseEnter,
  onMouseLeave,
}: SimpleCourseCardProps) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col"
    >
      <a href="#" className="block h-full flex flex-col">
        <div className="relative w-full h-44">
          <Image
            src={course.imageUrl}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-2">
            <span
              className={`text-xs font-semibold uppercase px-2 py-1 rounded ${course.categoryColor}`}
            >
              {course.category}
            </span>
            <span className="text-lg font-bold text-primary">
              ${course.price.toFixed(2)}
            </span>
          </div>
          <h3 className="text-md font-bold text-dark-text leading-tight flex-grow">
            {course.title}
          </h3>
          <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3 mt-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 mr-1" />
              <span>{course.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{course.students} students</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SimpleCourseCard;
