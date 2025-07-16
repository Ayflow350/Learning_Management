"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Star, Users, PlayCircle } from "lucide-react";

interface InstructorBioCardProps {
  imageUrl: string;
  name: string;
  title: string;
  rating: number;
  studentCount: string;
  courseCount: number;
  bio: string;
}

// === THIS IS THE CORRECTED COMPONENT ===
const StatItem = ({
  icon,
  text,
  className,
}: {
  icon: React.ReactNode;
  text: string;
  className?: string; // Added className to the type definition
}) => (
  <div
    className={`flex items-center gap-x-2 rounded-full px-3 py-1 text-sm ${className}`}
  >
    {icon}
    <span>{text}</span>
  </div>
);
// =======================================

const InstructorBioCard = (props: InstructorBioCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortBio = props.bio.slice(0, 200);

  return (
    <div className=" border border-gray-200 p-6">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="flex-shrink-0">
          <Image
            src={props.imageUrl}
            alt={`Photo of ${props.name}`}
            width={128}
            height={128}
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-[#1D2026]">{props.name}</h4>
          <p className="text-[#6E7485] text-[14px] mt-1">{props.title}</p>
          <div className="my-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <StatItem
              icon={<Star size={16} className="text-amber-500" />}
              text={`${props.rating} Course rating`}
              className="bg-amber-100 text-amber-800"
            />
            <StatItem
              icon={<Users size={16} className="text-blue-500" />}
              text={`${props.studentCount} Students`}
              className="bg-blue-100 text-blue-800"
            />
            <StatItem
              icon={<PlayCircle size={16} className="text-green-500" />}
              text={`${props.courseCount} Courses`}
              className="bg-green-100 text-green-800"
            />
          </div>
          <div className="text-[#6E7485] text-[14px] leading-relaxed">
            <p>
              {isExpanded ? props.bio : `${shortBio}... `}
              {!isExpanded && (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="font-bold text-dark-text hover:underline"
                >
                  READ MORE
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorBioCard;
