// src/components/CategoryCard.tsx
import React from "react";

// Define the props the card will accept
interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  courseCount: string;
  backgroundColor: string; // e.g., 'bg-cat-lavender'
  iconColor: string; // e.g., 'text-indigo-500'
  iconBgColor: string; // e.g., 'bg-indigo-100'
}

const CategoryCard = ({
  icon,
  title,
  courseCount,
  backgroundColor,
  iconColor,
}: CategoryCardProps) => {
  return (
    <a
      href="#"
      className={`group flex max-w-[412px] items-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${backgroundColor}`}
    >
      <div
        className={`flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg transition-colors duration-300 bg-white`}
      >
        <div className={`h-8 w-8 transition-colors duration-300 ${iconColor}`}>
          {icon}
        </div>
      </div>
      <div className="ml-6">
        <h3 className="text-base font-medium text-[#1D2026]">{title}</h3>
        <p className="text-sm text-[#6E7485]">{courseCount}</p>
      </div>
    </a>
  );
};

export default CategoryCard;
