export interface Course {
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
