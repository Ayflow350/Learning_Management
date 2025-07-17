// src/data/courses.ts

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  isCompleted?: boolean;
}

export interface CourseSection {
  id: number;
  title: string;
  totalLectures: number;
  totalDuration: string;
  lessons: Lesson[];
}

// === THIS IS THE CHANGE ===
export interface Course {
  id: number;
  title: string;
  imageUrl: string; // Add the imageUrl for the poster
  description: string;
  curriculum: CourseSection[];
}
// ==========================

export const allCourses: Course[] = [
  {
    id: 1,
    title:
      "Complete Website Responsive Design: from Figma to Webflow to Website Design",
    // === THIS IS THE CHANGE ===
    imageUrl:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop", // Add a poster image URL
    description: "We cover everything you need to build YOUR-TEST website...",
    curriculum: [
      {
        id: 1,
        title: "Getting Started",
        totalLectures: 4,
        totalDuration: "8m 52s",
        lessons: [
          {
            id: 101,
            title: "What is Webflow?",
            duration: "02:31",
            videoUrl:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          },
          {
            id: 102,
            title: "Sign up in Webflow",
            duration: "01:31",
            videoUrl:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            isCompleted: true,
          },
          // ... other lessons
        ],
      },
      // ... other sections
    ],
  },
  // ... other courses
];
