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
      className="flex h-full  flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
    >
      <a href="#" className="flex h-full flex-col">
        <div className="relative h-52 w-full flex-shrink-0">
          <Image
            src={course.imageUrl}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-grow flex-col p-4  lg:h-[170px]">
          <div className="mb-2 lg:mb-4 flex items-center justify-between">
            <span
              className={`rounded px-2 py-1 text-xs font-semibold uppercase ${course.categoryColor}`}
            >
              {course.category}
            </span>
            <span className="text-lg font-medium text-primary">
              ${course.price.toFixed(2)}
            </span>
          </div>

          <h3 className="flex-grow text-[15px] font-medium leading-tight text-[#1D2026]">
            {course.title}
          </h3>

          <div className="mt-3 flex items-center justify-between border-t pt-3 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{course.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4  text-[#564FFD]" />
              <div className="text-[#4E5566]">
                {course.students}{" "}
                <span className="text-[#8C94A3]">students</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SimpleCourseCard;
