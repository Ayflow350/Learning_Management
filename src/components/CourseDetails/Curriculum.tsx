import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

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
    <AccordionTrigger className="hover:no-underline font-semibold  text-dark-text">
      <div className="flex md:flex-row flex-col  w-full text-left  space-y-1 md:items-center md:justify-between">
        <span className=" ">{title}</span>
        <div className="flex items-center gap-4 text-sm font-normal text-gray-500">
          <div className=" flex gap-x-2  justify-center items-center">
            <span>
              <Image
                src="/Video/PlayCircle.svg"
                alt=""
                width={20}
                height={20}
              />
            </span>
            <span className=" ">{lectures} lectures</span>
          </div>

          <div className=" flex gap-x-2 items-center">
            <span>
              <Image src="/Video/Clock.svg" alt="" width={20} height={20} />
            </span>
            <span>{duration}</span>
          </div>
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
      <div className="mb-4 flex flex-col md:flex-row  md:items-center  justify-between">
        <h3 className=" text-2xl font-semibold text-[#1D2026] mbb-2">
          Curriculum
        </h3>
        <div className="flex items-center gap-4 text-sm font-normal text-gray-500">
          <div className=" flex gap-x-1 items-center">
            <span>
              <Image
                src="/Video/FolderOpen.svg"
                alt=""
                width={20}
                height={20}
              />
            </span>
            6 Sections
          </div>
          <div className=" flex gap-x-1 items-center">
            <span>
              <Image
                src="/Video/PlayCircle.svg"
                alt=""
                width={20}
                height={20}
              />
            </span>
            202 lectures
          </div>

          <div className=" flex gap-x-1 items-center">
            <span>
              <Image src="/Video/Clock.svg" alt="" width={20} height={20} />
            </span>
            <span>19h 37m</span>
          </div>
        </div>
      </div>
      <Accordion type="multiple" className="w-full  p-5 border">
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
