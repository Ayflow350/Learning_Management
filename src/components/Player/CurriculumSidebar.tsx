// src/components/Player/CurriculumSidebar.tsx

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, PlayCircle } from "lucide-react";
import { CourseSection, Lesson } from "@/data/video";

interface CurriculumSidebarProps {
  curriculum: CourseSection[];
  onLessonClick: (lesson: Lesson) => void;
  currentLessonId: number | null;
}

const CurriculumSidebar = ({
  curriculum,
  onLessonClick,
  currentLessonId,
}: CurriculumSidebarProps) => {
  return (
    <div className="rounded-lg border bg-white">
      <div className="p-4">
        <h2 className="text-lg font-bold text-dark-text">Course Contents</h2>
        <p className="text-sm text-green-600 font-semibold mt-1">
          16% Completed
        </p>
      </div>
      <Accordion
        type="multiple"
        defaultValue={["section-1"]}
        className="w-full"
      >
        {curriculum.map((section) => (
          <AccordionItem value={`section-${section.id}`} key={section.id}>
            <AccordionTrigger className="bg-gray-50 hover:bg-gray-100 px-4 py-3 text-sm font-bold">
              <div className="flex-1 text-left">{section.title}</div>
              <div className="text-xs text-gray-500 font-normal ml-4">
                {section.totalLectures} lectures • {section.totalDuration}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="divide-y divide-gray-200">
                {section.lessons.map((lesson) => (
                  <li
                    key={lesson.id}
                    className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 ${
                      currentLessonId === lesson.id ? "bg-primary-light" : ""
                    }`}
                    onClick={() => onLessonClick(lesson)}
                  >
                    <div className="flex items-start gap-3">
                      {lesson.isCompleted ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      ) : (
                        <PlayCircle
                          className={`h-5 w-5 mt-0.5 ${
                            currentLessonId === lesson.id
                              ? "text-primary"
                              : "text-gray-400"
                          }`}
                        />
                      )}
                      <div>
                        <p
                          className={`text-sm font-medium ${
                            currentLessonId === lesson.id
                              ? "text-primary"
                              : "text-dark-text"
                          }`}
                        >
                          {lesson.title}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {lesson.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CurriculumSidebar;
