"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight, Download, FileText } from "lucide-react";
import VideoPlayer from "@/components/Player/VideoPlayer";
import CurriculumSidebar from "@/components/Player/CurriculumSidebar";
import CommentsSection from "@/components/Player/CommentsSection";
import { allCourses, type Lesson } from "@/data/video";

type VideoJsOptions = NonNullable<
  Parameters<typeof import("video.js").default>[1]
>;

// Combined TabButton for both mobile and desktop
const TabButton = ({
  text,
  count,
  isActive,
  onClick,
}: {
  text: string;
  count?: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "border-primary text-primary"
        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-dark-text"
    }`}
  >
    {text}{" "}
    {count && (
      <span className="ml-1.5 rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-700">
        {count}
      </span>
    )}
  </button>
);

const ViewCoursePage = ({ params }: { params: { courseId: string } }) => {
  // === THIS IS THE CHANGE: Default active tab is now 'curriculum' ===
  const [activeTab, setActiveTab] = useState("curriculum");

  const course = allCourses.find((c) => c.id === parseInt(params.courseId, 10));

  const allLessons = useMemo(
    () => course?.curriculum.flatMap((s) => s.lessons) || [],
    [course]
  );

  const initialLesson = allLessons.find((l) => l.isCompleted) || allLessons[0];

  const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(
    initialLesson
  );

  if (!course || !currentLesson) {
    return (
      <div className="flex h-screen items-center justify-center">
        Course or lesson not found.
      </div>
    );
  }

  const currentLessonIndex = allLessons.findIndex(
    (l) => l.id === currentLesson.id
  );

  const handleLessonClick = (lesson: Lesson) => setCurrentLesson(lesson);
  const handleNext = () => {
    if (currentLessonIndex < allLessons.length - 1) {
      setCurrentLesson(allLessons[currentLessonIndex + 1]);
    }
  };
  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLesson(allLessons[currentLessonIndex - 1]);
    }
  };

  const videoJsOptions: VideoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: course.imageUrl,
    sources: [{ src: currentLesson.videoUrl, type: "video/mp4" }],
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

  return (
    <div className="bg-white">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="/courses">
                <ChevronLeft />
              </a>
            </Button>
            <div className="h-8 border-l border-gray-200"></div>
            <p className="hidden font-semibold text-dark-text sm:block truncate">
              {course.title}
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="outline">Write a Review</Button>
            <Button
              onClick={handleNext}
              disabled={currentLessonIndex === allLessons.length - 1}
              className="bg-primary hover:bg-orange-700"
            >
              Next Lecture <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (Player and Content Tabs) */}
          <div className="lg:col-span-8">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
              <VideoPlayer
                options={videoJsOptions}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-dark-text">
                {currentLesson.title}
              </h1>

              {/* === THIS IS THE CHANGE: Updated Tab Navigation === */}
              <div className="mt-4 border-b border-gray-200">
                <nav className="-mb-px flex space-x-6 overflow-x-auto">
                  <TabButton
                    text="Course Content"
                    isActive={activeTab === "curriculum"}
                    onClick={() => setActiveTab("curriculum")}
                  />
                  <TabButton
                    text="Description"
                    isActive={activeTab === "description"}
                    onClick={() => setActiveTab("description")}
                  />
                  <TabButton
                    text="Comments"
                    count="154"
                    isActive={activeTab === "comments"}
                    onClick={() => setActiveTab("comments")}
                  />
                  <TabButton
                    text="Attach Files"
                    count="01"
                    isActive={activeTab === "files"}
                    onClick={() => setActiveTab("files")}
                  />
                </nav>
              </div>
            </div>

            {/* === THIS IS THE CHANGE: Updated Tab Content for Mobile === */}
            <div className="py-8">
              {/* On mobile, the curriculum is shown here in a tab */}
              <div className="lg:hidden">
                {activeTab === "curriculum" && (
                  <CurriculumSidebar
                    curriculum={course.curriculum}
                    onLessonClick={handleLessonClick}
                    currentLessonId={currentLesson.id}
                  />
                )}
              </div>

              {activeTab === "description" && (
                <div className="prose max-w-none prose-p:text-gray-600">
                  <h3 className="font-bold">Lectures Description</h3>
                  <p>{course.description}</p>
                </div>
              )}
              {activeTab === "files" && (
                <div className="flex items-center justify-between rounded-lg border p-4">
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

          {/* Right Column (Sidebar) - HIDDEN ON MOBILE */}
          <div className="hidden lg:block lg:col-span-4">
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
