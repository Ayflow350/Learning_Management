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
