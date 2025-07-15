// src/components/CourseDetails/CourseRequirements.tsx

import React from "react";
import { Dot } from "lucide-react";

// Data for this specific section
const requirementsData = [
  "Nunc auctor consequat lorem, in posuere enim hendrerit sed.",
  "Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.",
  "Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.",
  "Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.",
  "Praesent eget consequat elit. Duis a pretium purus.",
  "Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.",
  "This course is for those who want to launch a Freelance Web Design career.",
];

// Reusable list item component for this section
const RequirementListItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2">
    <Dot className="h-6 w-6 flex-shrink-0 text-gray-500 -ml-1" />
    <span className="text-gray-700">{text}</span>
  </li>
);

const CourseRequirements = () => {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-dark-text">
        Course requirements
      </h3>
      <ul className="space-y-4">
        {requirementsData.map((item, index) => (
          <RequirementListItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default CourseRequirements;
