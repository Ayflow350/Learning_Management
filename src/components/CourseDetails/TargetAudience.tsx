// src/components/CourseDetails/TargetAudience.tsx

import React from "react";
import { ArrowRight } from "lucide-react";

// Data for this specific section
const audienceData = [
  "This course is for those who want to launch a Freelance Web Design career.",
  "Praesent eget consequat elit. Duis a pretium purus.",
  "Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.",
  "Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.",
  "Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.",
  "Nunc auctor consequat lorem, in posuere enim hendrerit sed.",
  "Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.",
];

// Reusable list item component for this section
const AudienceListItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-4">
    <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
    <span className="text-gray-700">{text}</span>
  </li>
);

const TargetAudience = () => {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-dark-text">
        Who this course is for:
      </h3>
      <ul className="space-y-4">
        {audienceData.map((item, index) => (
          <AudienceListItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default TargetAudience;
