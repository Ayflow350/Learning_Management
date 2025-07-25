export interface Courses {
  id: number;
  imageUrl: string;
  category: string;
  categoryColor: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: string;
  // The following are needed for the detailed hover card but optional for the simple card
  ratingCount?: string;
  level?: string;
  duration?: string;
  instructor?: {
    name: string;
    avatarUrl: string;
  };
  whatYoullLearn?: string[];
}

export interface Course {
  id: number;
  imageUrl: string;
  category: string;
  categoryColor: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  ratingCount: string;
  students: string;
  level: string;
  duration: string;
  instructor: {
    name: string;
    avatarUrl: string;
  };
  whatYoullLearn: string[];
}

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
  description: string;
  curriculum: CourseSection[];
}
