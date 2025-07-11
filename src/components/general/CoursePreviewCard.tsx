// src/components/CoursePreviewCard.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Users,
  BarChart3,
  Clock,
  Heart,
  Check,
  ShoppingCart,
} from "lucide-react";
import { Course } from "@/types/course";

const CoursePreviewCard = ({ course }: { course: Course }) => {
  const discount = course.originalPrice
    ? Math.round(
        ((course.originalPrice - course.price) / course.originalPrice) * 100
      )
    : 0;
  return (
    <div className="w-[380px] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 flex flex-col gap-4">
      <span
        className={`text-xs font-semibold uppercase px-2 py-1 rounded self-start ${course.categoryColor}`}
      >
        {course.category}
      </span>
      <h3 className="text-lg font-medium text-dark-text leading-tight">
        {course.title}
      </h3>
      <div className="flex items-center text-sm text-gray-600">
        <span>Course by</span>
        <Image
          src={course.instructor.avatarUrl}
          alt={course.instructor.name}
          width={24}
          height={24}
          className="rounded-full mx-2"
        />
        <span className="font-semibold text-gray-700">
          {course.instructor.name}
        </span>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Users size={16} className="text-[#564FFD]" />
          {course.students} students
        </div>
        <div className="flex items-center gap-1.5">
          <BarChart3 size={16} className="text-[#E34444]" />
          {course.level}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={16} className="text-[#23BD33]" />
          {course.duration}
        </div>
      </div>
      <div className="flex items-end gap-4 mb-2">
        <span className="text-2xl font-normal text-dark-text">
          ${course.price.toFixed(2)}
        </span>
        {course.originalPrice && (
          <span className="text-lg text-gray-400 line-through">
            ${course.originalPrice.toFixed(2)}
          </span>
        )}
        {discount > 0 && (
          <span className="text-sm font-bold text-primary bg-[#FFEEE8] px-2 py-1 rounded-md">
            {discount}% OFF
          </span>
        )}
        <Button
          variant="outline"
          size="icon"
          className="ml-auto border-primary/50 text-primary hover:bg-primary-light hover:text-primary"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase text-gray-500 mb-2">
          What you&apos;ll learn
        </h4>
        <ul className="space-y-2">
          {course.whatYoullLearn.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <Check
                size={16}
                className="text-green-500 mt-0.5 flex-shrink-0"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <hr className="py-2" />
      <div className="mt-auto flex flex-col gap-2">
        <Button size="lg" className="w-full bg-primary hover:bg-orange-700">
          <ShoppingCart size={18} className="mr-2" /> Add To Cart
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="w-full bg-primary-light text-primary hover:bg-orange-200/60"
        >
          Course Detail
        </Button>
      </div>
    </div>
  );
};
export default CoursePreviewCard;
