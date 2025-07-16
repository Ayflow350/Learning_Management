"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Home/Header/Navbar";
import Footer from "@/components/Home/Footer/Footer";

// Import all the content components
import PurchaseCard from "@/components/CourseDetails/PurchaseCard";
import WhatYoullLearn from "@/components/CourseDetails/WhatYoullLearn";
import Curriculum from "@/components/CourseDetails/Curriculum";
import StudentFeedback from "@/components/CourseDetails/StudentFeedback";
// import { allCourses } from "@/data/courses";
import Instructors from "@/components/CourseDetails/Instructors";
import CourseRequirements from "@/components/CourseDetails/CourseRequirements";
import TargetAudience from "@/components/CourseDetails/TargetAudience";
import BackToTopButton from "@/components/CourseDetails/BackToTopButton"; // <-- 1. Import the new button

const CourseDetailsPage = () => {
  //   const course = allCourses[0];
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const TabButton = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => handleTabClick(id)}
      className={`relative w-full py-4 text-sm font-medium transition-colors duration-200 ${
        activeTab === id ? "text-primary" : "text-gray-500 hover:text-dark-text"
      }`}
    >
      {label}
      {activeTab === id && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
      )}
    </button>
  );

  return (
    <>
      <Header />
      <Navbar />
      <main
        className="relative bg-fixed  bg-white py-12 bg-repeat h-[380px] bg-center bg-cover"
        style={{ backgroundImage: "url('/Video/BG.svg')" }}
      >
        <div>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
              <div className="lg:col-span-8">
                {/* --- Breadcrumbs and Course Header --- */}
                <div className="space-y-4">
                  <p className=" text-[12px] md:text-sm text-[#6E7485]">
                    Home {">"} Development {">"} Web Development {">"} Webflow
                  </p>

                  <h1 className="text-2xl font-semibold leading-tight  md:leading-[40px]  text-[#1D2026] md:text-[32px]">
                    Complete Website Responsive Design: from Figma to Webflow to
                    Website Design
                  </h1>

                  <p className=" text-[12px]  leading-[20px] md:text-base lmd:eading-[32px] text-[#4E5566]">
                    3 in 1 Course: learn to design websites with Figma, build
                    with Webflow, and make a living freelancing.
                  </p>

                  <div className="flex flex-col items-start gap-4 text-sm sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2">
                      <Image
                        src="https://i.pravatar.cc/32?img=12"
                        alt="Instructor Dianne Russell"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <p className="text-gray-700">
                        Created by{" "}
                        <a
                          href="#"
                          className="font-bold text-primary hover:underline"
                        >
                          Dianne Russell
                        </a>
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <Star
                        size={16}
                        className="fill-amber-400 text-amber-400"
                      />
                      <span className="font-bold text-dark-text">4.8</span>
                      <span className="text-gray-500">(121,994 ratings)</span>
                    </div>
                  </div>
                </div>

                {/* --- Course Image / Video Trailer --- */}
                <div className="relative my-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/Video/Trailer.svg" // Make sure you have this image in your /public folder
                    alt="Course promotional video trailer"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition-transform hover:scale-110 sm:h-20 sm:w-20"
                      aria-label="Play course trailer"
                    >
                      <Image
                        src="/Video/Play.svg" // Make sure you have this image in your /public folder
                        alt="Play button icon"
                        width={72}
                        height={72}
                      />
                    </button>
                  </div>
                </div>

                <div className="border-b border-gray-200">
                  <div className="grid grid-cols-4">
                    <TabButton id="overview" label="Overview" />
                    <TabButton id="curriculum" label="Curriculum" />
                    <TabButton id="instructor" label="Instructor" />
                    <TabButton id="review" label="Review" />
                  </div>
                </div>

                {/* --- Main Content Sections --- */}
                <div className="pt-12 space-y-12">
                  <div id="overview">
                    <h3 className="text-2xl font-bold text-dark-text mb-4">
                      Description
                    </h3>
                    {/*... Description paragraphs ...*/}

                    <p className="mb-3 text-[#4E5566] text-[14px]">
                      It gives you a huge self-satisfaction when you look at
                      your work and say, "I made this!". I love that feeling
                      after I&apos;m done working on something. When I lean back
                      in my chair, look at the final result with a smile, and
                      have this little "spark joy" moment. It&apos;s especially
                      satisfying when I know I just made $5,000.
                    </p>
                    <p className="mb-3 text-[#4E5566] text-[14px]">
                      I do! And that&apos;s why I got into this field. Not for
                      the love of Web Design, which I do now. But for the
                      LIFESTYLE! There are many ways one can achieve this
                      lifestyle. This is my way. This is how I achieved a
                      lifestyle I&apos;ve been fantasizing about for five years.
                      And I&apos;m going to teach you the same. Often people
                      think Web Design is complicated. That it needs some
                      creative talent or knack for computers. Sure, a lot of
                      people make it very complicated. People make the simplest
                      things complicated. Like most subjects taught in the
                      universities. But I don&apos;t like complicated. I like
                      easy. I like life hacks. I like to take the shortest and
                      simplest route to my destination. I haven&apos;t gone to
                      an art school or have a computer science degree. I&apos;m
                      an outsider to this field who hacked himself into it,
                      somehow ending up being a sought-after professional.
                      That&apos;s how I&apos;m going to teach you Web Design. So
                      you&apos;re not demotivated on your way with needless
                      complexity. So you enjoy the process because it&apos;s
                      simple and fun. So you can become a Freelance Web Designer
                      in no time.
                    </p>
                    <p className="mb-3 text-[#4E5566] text-[14px]">
                      For example, this is a Design course but I don&apos;t
                      teach you Photoshop. Because Photoshop is needlessly
                      complicated for Web Design. But people still teach it to
                      web designers. I don&apos;t. I teach Figma – a simple tool
                      that is taking over the design world. You will be
                      designing a complete website within a week while others
                      are still learning how to create basic layouts in
                      Photoshop.
                    </p>

                    <p className="mb-3 text-[#4E5566] text-[14px]">
                      Second, this is a Development course. But I don&apos;t
                      teach you how to code. Because for Web Design coding is
                      needlessly complicated and takes too long to learn.
                      Instead, I teach Webflow – a tool that is taking over the
                      web design world. You will be building complex websites
                      within two weeks while others are still learning the
                      basics of HTML & CSS. Third, this is a Freelancing course.
                      But I don&apos;t just teach you how to write great
                      proposals. I give you a winning proposal template. When
                      you&apos;re done with the course, you will have a stunning
                      portfolio website with portfolio pieces already in it. Buy
                      this course now and take it whenever the time is right for
                      you.
                    </p>
                  </div>
                  <WhatYoullLearn />
                  <TargetAudience />
                  <CourseRequirements />
                  <div id="curriculum">
                    <Curriculum />
                  </div>
                  <div id="instructor">
                    <Instructors />
                  </div>
                  <div id="review">
                    <StudentFeedback />
                  </div>
                </div>
              </div>

              {/* --- Right Column (Sticky Purchase Card) --- */}
              <div className="hidden lg:block lg:col-span-4">
                <div className=" top-28">
                  <PurchaseCard />
                </div>
              </div>
            </div>
          </div>

          <Footer />
          <BackToTopButton />
        </div>
      </main>{" "}
      {/* <-- 2. Add the button to the layout */}
    </>
  );
};

export default CourseDetailsPage;
