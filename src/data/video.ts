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

export interface Course {
  id: number;
  title: string;
  videoUrl: string;
  description: string;
  curriculum: CourseSection[];
}

export const allCourses: Course[] = [
  {
    id: 1,
    title:
      "Complete Website Responsive Design: from Figma to Webflow to Website Design",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description:
      "We cover everything you need to build YOUR-TEST website, from creating your first page through to uploading your website to the internet. We love the world's most popular (and best) web design and no-code tool Visual Studio Code. There are even more files you can download and learn more along with me. At the end of this video, I think you have some idea of where we are in the process so that you can compare your project with mine. This will enable you to see exactly where you might have a problem.",
    curriculum: [
      {
        id: 1,
        title: "Getting Started",
        totalLectures: 4,
        totalDuration: "8m 52s",
        lessons: [
          {
            id: 1,
            title: "What is Webflow?",
            duration: "02:31",
            videoUrl:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          },
          {
            id: 2,
            title: "Sign up in Webflow",
            duration: "01:31",
            videoUrl:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            isCompleted: true,
          },
          {
            id: 3,
            title: "Teaser of Webflow",
            duration: "02:11",
            videoUrl:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          },
          {
            id: 4,
            title: "Right-to-Introduction",
            duration: "02:39",
            videoUrl:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          },
        ],
      },
      {
        id: 2,
        title: "Secret of Good Design",
        totalLectures: 52,
        totalDuration: "58m 18s",
        lessons: [
          {
            id: 5,
            title: "Design Principles",
            duration: "10:00",
            videoUrl:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          },
        ],
      },
      // ... Add more sections and lessons here
    ],
  },
  // Add other courses...
];
