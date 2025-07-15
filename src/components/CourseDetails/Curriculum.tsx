import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlayCircle } from "lucide-react";

const CurriculumSection = ({
  title,
  lectures,
  duration,
  children,
}: {
  title: string;
  lectures: number;
  duration: string;
  children: React.ReactNode;
}) => (
  <AccordionItem value={title}>
    <AccordionTrigger className="hover:no-underline font-bold text-dark-text">
      <div className="flex w-full items-center justify-between">
        <span>{title}</span>
        <div className="flex items-center gap-4 text-sm font-normal text-gray-500">
          <span>{lectures} lectures</span>
          <span>{duration}</span>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <ul className="space-y-2 pt-2">{children}</ul>
    </AccordionContent>
  </AccordionItem>
);

const CurriculumLesson = ({
  title,
  duration,
}: {
  title: string;
  duration: string;
}) => (
  <li className="flex items-center justify-between text-gray-700 hover:text-primary cursor-pointer p-2">
    <div className="flex items-center gap-3">
      <PlayCircle size={18} />
      <span className="text-sm">{title}</span>
    </div>
    <span className="text-sm text-gray-500">{duration}</span>
  </li>
);

const Curriculum = () => {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-bold text-dark-text">Curriculum</h3>
      <Accordion type="multiple" className="w-full rounded-lg border">
        <CurriculumSection
          title="Getting Started"
          lectures={4}
          duration="1h 5m"
        >
          <CurriculumLesson title="What is Webflow?" duration="07:31" />
          <CurriculumLesson title="Sign up to Webflow" duration="12:00" />
          <CurriculumLesson
            title="Webflow Terms & Conditions"
            duration="15:00"
          />
        </CurriculumSection>
        <CurriculumSection
          title="Secret of Good Design"
          lectures={12}
          duration="6h 4m"
        >
          <CurriculumLesson title="Principles of Design" duration="20:00" />
          <CurriculumLesson title="Color Theory Basics" duration="15:30" />
        </CurriculumSection>
        <CurriculumSection
          title="Web Development (Webflow)"
          lectures={132}
          duration="10h 6m"
        >
          <>{/* ... add lessons here ... */}</>
        </CurriculumSection>
      </Accordion>
    </div>
  );
};

export default Curriculum;
