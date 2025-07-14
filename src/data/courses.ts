import { Course } from "@/types/course";

const categories = [
  { name: "IT & Software", color: "text-red-600 bg-red-100" },
  { name: "Design", color: "text-pink-600 bg-pink-100" },
  { name: "Developments", color: "text-blue-600 bg-blue-100" },
  { name: "Marketing", color: "text-indigo-600 bg-indigo-100" },
  { name: "Business", color: "text-green-600 bg-green-100" },
  { name: "Lifestyle", color: "text-purple-600 bg-purple-100" },
  { name: "Health & Fitness", color: "text-teal-600 bg-teal-100" },
];

const titles = [
  "Learn Python Programming Masterclass",
  "Complete Blender Creator: Learn 3D Modelling",
  "Adobe Premiere Pro CC – Advanced Training Course",
  "Ultimate AWS Certified Solutions Architect 2021",
  "Ultimate Google Ads Training 2020: Profit with Pay Per Click",
  "Learn Ethical Hacking From Scratch 2021",
  "Angular - The Complete Guide (2021 Edition)",
  "How to get Diamond in soloQ | League of Legends",
  "Machine Learning A-Z™: Hands-On Python & R",
  "SQL for NEWBS: Weekender Crash Course",
  "SEO 2021: Complete SEO Training + SEO for WordPress",
  "[NEW] Ultimate AWS Certified Cloud Practitioner - 2021",
  "Data Structures & Algorithms Essentials (2021)",
  "Complete Adobe Lightroom Megacourse: Beginner to Expert",
  "Digital Marketing Masterclass - 23 Courses in 1",
  "The Ultimate Drawing Course - Beginner to Advanced",
  "Instagram Marketing 2021: Complete Guide To Growth",
  "Automate the Boring Stuff with Python Programming",
  "Selenium WebDriver with Java for Beginners",
  "iPhone Photography | Take Professional Photos On Your iPhone",
  "Premiere Pro CC for Beginners: Video Editing in Premiere",
  "The Complete Financial Analyst Training & Investing Course",
  "Graphic Design Masterclass - Learn GREAT Design",
  "Become a Certified Web Developer",
];

const instructors = [
  { name: "Kevin Gilbert", avatarUrl: "https://i.pravatar.cc/32?img=1" },
  { name: "Jonas S.", avatarUrl: "https://i.pravatar.cc/32?img=2" },
  { name: "Angela Yu", avatarUrl: "https://i.pravatar.cc/32?img=3" },
  { name: "Darrel Wilson", avatarUrl: "https://i.pravatar.cc/32?img=4" },
  { name: "Penny Lane", avatarUrl: "https://i.pravatar.cc/32?img=5" },
];

const randomFromArray = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];
const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const formatNumber = (num: number) => (num / 1000).toFixed(1) + "k";

export const allCourses: Course[] = Array.from({ length: 24 }, (_, i) => {
  const category = randomFromArray(categories);
  const originalPrice = randomInt(89, 199);
  const price = randomInt(9, originalPrice - 10);

  return {
    id: i + 1,
    imageUrl: `https://images.unsplash.com/photo-${randomInt(
      1500000000000,
      1600000000000
    )}-${randomInt(100000000000, 999999999999)}?q=80&w=400&h=300&fit=crop`,
    category: category.name,
    categoryColor: category.color,
    title: titles[i % titles.length],
    price: price,
    originalPrice: originalPrice,
    rating: parseFloat((Math.random() * (5.0 - 4.1) + 4.1).toFixed(1)),
    students: formatNumber(randomInt(800, 500000)),
    ratingCount: formatNumber(randomInt(500, 400000)),
    instructor: randomFromArray(instructors),
    level: ["Beginner", "Intermediate", "All Levels", "Expert"][
      randomInt(0, 3)
    ],
    duration: `${randomInt(5, 40)}h ${randomInt(0, 59)}m`,
    whatYoullLearn: [
      "Master the core concepts of the subject.",
      "Build real-world projects to add to your portfolio.",
      "Learn advanced techniques and industry best practices.",
    ],
  };
});
