// src/components/FeaturedCourseCard.tsx
import React from "react";
import Image from "next/image";
import { Users, BarChart, Clock } from "lucide-react";

interface FeaturedCourseCardProps {
  imageUrl: string;
  category: string;
  categoryColor: string; // e.g., 'text-green-600 bg-green-100'
  title: string;
  instructor: {
    name: string;
    avatarUrl: string;
  };
  price: number;
  originalPrice?: number;

  studentCount: string;
  level: string;
  duration: string;
}

const FeaturedCourseCard = (props: FeaturedCourseCardProps) => {
  return (
    <div className="bg-white  border overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <a href="#" className="block md:flex">
        {/* Image Section */}
        <div className="md:w-1/3 relative h-48 md:h-auto">
          <Image
            src={props.imageUrl}
            alt={props.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-5 flex flex-col">
          {/* Top part: Category and Price */}
          <div className="flex justify-between items-center mb-2">
            <span
              className={`text-[11px] font-medium  uppercase px-2 py-1 rounded ${props.categoryColor}`}
            >
              {props.category}
            </span>
            <div className="text-right">
              <span className="text-xl font-medium text-[#1D2026]">
                ${props.price.toFixed(2)}
              </span>
              {props.originalPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">
                  ${props.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Title and Instructor */}
          <div className=" w-full">
            <h3 className="text-[15px] max-w-[380px]  font-medium text-[#1D2026] leading-tight mt-1">
              {props.title}
            </h3>
          </div>

          <div className="flex items-center text-sm text-gray-600 my-3">
            <Image
              src={props.instructor.avatarUrl}
              alt={props.instructor.name}
              width={24}
              height={24}
              className="rounded-full mr-2"
            />
            <span>{props.instructor.name}</span>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-200 mt-auto pt-3">
            {/* Bottom part: Stats */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1 text-[#564FFD]" />
                <h3>
                  {props.studentCount}
                  <span className="text-[#8C94A3] ml-0.5 text-[14px]">
                    students
                  </span>
                </h3>
              </div>
              <div className="flex items-center">
                <BarChart className="w-4 h-4 mr-1 transform -scale-x-100 text-[#E34444]" />
                <span>{props.level}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-[#23BD33]" />
                <span>{props.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FeaturedCourseCard;
