import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface InstructorProfileCardProps {
  imageUrl: string;
  name: string;
  title: string;
  rating: number;
  studentCount: string;
}

const InstructorProfileCard = (props: InstructorProfileCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white text-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl">
      <a href="#" className="block">
        <div className="relative aspect-square w-full bg-gray-100">
          <Image
            src={props.imageUrl}
            alt={`Photo of ${props.name}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-dark-text">{props.name}</h3>
          <p className="mb-3 text-sm text-gray-500">{props.title}</p>
          <div className="flex items-center justify-between border-t border-gray-200 pt-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{props.rating.toFixed(1)}</span>
            </div>
            <span>{props.studentCount} students</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default InstructorProfileCard;
