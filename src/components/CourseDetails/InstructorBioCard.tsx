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

const StatItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-sm text-gray-600">
    {icon}
    <span>{text}</span>
  </div>
);

const InstructorBioCard = (props: InstructorBioCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortBio = props.bio.slice(0, 200); // Show first 200 characters

  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Image
            src={props.imageUrl}
            alt={`Photo of ${props.name}`}
            width={128}
            height={128}
            className="rounded-full"
          />
        </div>
        {/* Details */}
        <div className="flex-1">
          <h4 className="text-xl font-bold text-dark-text">{props.name}</h4>
          <p className="text-primary font-medium mt-1">{props.title}</p>

          {/* Stats */}
          <div className="my-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <StatItem
              icon={<Star size={16} className="text-amber-500" />}
              text={`${props.rating} Course rating`}
            />
            <StatItem
              icon={<Users size={16} />}
              text={`${props.studentCount} Students`}
            />
            <StatItem
              icon={<PlayCircle size={16} />}
              text={`${props.courseCount} Courses`}
            />
          </div>

          {/* Bio with Read More */}
          <div className="text-gray-600 leading-relaxed">
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
