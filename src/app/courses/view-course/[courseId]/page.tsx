"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, FileText, Download } from "lucide-react";
import VideoPlayer from "@/components/Player/VideoPlayer";
import CurriculumSidebar from "@/components/Player/CurriculumSidebar";
import CommentsSection from "@/components/Player/CommentsSection";
import { allCourses, Lesson } from "@/data/video";

// Define the type for the video.js options object
type VideoJsOptions = NonNullable<
  Parameters<typeof import("video.js").default>[1]
>;

// 1. DEFINE THE PROPS INTERFACE FOR THE TABBUTTON COMPONENT
interface TabButtonProps {
  text: string;
  count?: string; // '?' makes this prop optional
  isActive: boolean;
  onClick: () => void;
}

// 2. APPLY THE INTERFACE TO THE COMPONENT'S PROPS
const TabButton = ({ text, count, isActive, onClick }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`relative whitespace-nowrap py-4 px-1 text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-primary" : "text-gray-500 hover:text-dark-text"
    }`}
  >
    {text}{" "}
    {/* This conditional rendering works perfectly with an optional prop */}
    {count && (
      <span className="ml-1.5 rounded-full bg-gray-200 px-2 py-0.5 text-xs">
        {count}
      </span>
    )}
    {isActive && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
    )}
  </button>
);

const ViewCoursePage = ({ params }: { params: { courseId: string } }) => {
  const [activeTab, setActiveTab] = useState("description");

  const course = allCourses.find((c) => c.id === parseInt(params.courseId, 10));

  const initialLesson =
    course?.curriculum.flatMap((s) => s.lessons).find((l) => l.isCompleted) ||
    course?.curriculum[0]?.lessons[0];

  const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(
    initialLesson
  );

  if (!course || !currentLesson) {
    return (
      <div className="flex items-center justify-center h-screen">
        Course or lesson not found.
      </div>
    );
  }

  const videoJsOptions: VideoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: currentLesson.videoUrl,
        type: "video/mp4",
      },
    ],
    tracks: [
      {
        src: "/captions.vtt",
        kind: "captions",
        srclang: "en",
        label: "English",
        default: true,
      },
    ],
  };

  const handleLessonClick = (lesson: Lesson) => {
    setCurrentLesson(lesson);
  };

  return (
    <div className="bg-white">
      {/* Top Bar */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft />
            </button>
            <div className="h-8 border-l border-gray-200"></div>
            <p className="text-sm font-semibold text-dark-text truncate">
              {course.title}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Write a Review</Button>
            <Button className="bg-primary hover:bg-orange-700">
              Next Lecture
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-8">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
              <VideoPlayer options={videoJsOptions} />
            </div>

            <div className="mt-6">
              <h1 className="text-2xl font-bold text-dark-text">
                {currentLesson.id}. {currentLesson.title}
              </h1>
              <div className="mt-4 border-b border-gray-200">
                <nav className="-mb-px flex space-x-6 overflow-x-auto">
                  {/* These calls are now valid because 'count' is optional */}
                  <TabButton
                    text="Description"
                    isActive={activeTab === "description"}
                    onClick={() => setActiveTab("description")}
                  />
                  <TabButton
                    text="Lectures Notes"
                    isActive={activeTab === "notes"}
                    onClick={() => setActiveTab("notes")}
                  />
                  <TabButton
                    text="Attach Files"
                    count="01"
                    isActive={activeTab === "files"}
                    onClick={() => setActiveTab("files")}
                  />
                  <TabButton
                    text="Comments"
                    count="154"
                    isActive={activeTab === "comments"}
                    onClick={() => setActiveTab("comments")}
                  />
                </nav>
              </div>
            </div>

            <div className="py-8">
              {activeTab === "description" && (
                <div className="prose max-w-none prose-p:text-gray-600">
                  <h3 className="font-bold">Lectures Description</h3>
                  <p>{course.description}</p>
                </div>
              )}
              {activeTab === "files" && (
                <div className="rounded-lg border p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold text-dark-text">
                        Create account on webflow.pdf
                      </p>
                      <p className="text-xs text-gray-500">128kb</p>
                    </div>
                  </div>
                  <Button>
                    <Download size={16} className="mr-2" />
                    Download File
                  </Button>
                </div>
              )}
              {activeTab === "comments" && <CommentsSection />}
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <CurriculumSidebar
                curriculum={course.curriculum}
                onLessonClick={handleLessonClick}
                currentLessonId={currentLesson.id}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewCoursePage;
