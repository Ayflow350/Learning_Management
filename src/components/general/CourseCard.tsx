// src/components/CourseCard.tsx
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface CourseCardProps {
  imageUrl: string;
  category: string;
  categoryColor: string;
  title: string;
  price: number;
  rating: number;
  students: string;
}

const CourseCard = ({
  imageUrl,
  category,
  categoryColor,
  title,
  price,
  rating,
  students,
}: CourseCardProps) => {
  return (
    // === THIS IS THE CHANGE ===
    // Added `w-full max-w-[333px] justify-self-center` to control width and center it
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-[333px] justify-self-center">
      <a href="#" className="block">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span
              className={`text-[10px] font-medium uppercase px-2 py-1 rounded ${categoryColor}`}
            >
              {category}
            </span>
            <span className="text-base font-semibold text-[#FF6636]">
              ${price}
            </span>
          </div>
          <h3 className="text-sm font-medium text-[#1D2026] leading-tight mb-3 h-14 overflow-hidden">
            {title}
          </h3>
          <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 mr-1" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <span>{students} students</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CourseCard;
