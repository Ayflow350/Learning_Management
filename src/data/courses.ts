import { Courses } from "@/types/course";

// --- Your original, hand-picked data ---
const initialCourses: Courses[] = [
  {
    id: 1,
    imageUrl: "/courses/course1.svg", // You will provide this image
    category: "IT & Software",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "Learn Python Programming Masterclass",
    price: 35,
    rating: 4.0,
    students: "211,434",
  },
  {
    id: 2,
    imageUrl: "/courses/course2.svg",
    category: "Design",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "Complete Blender Creator: Learn 3D Modelling for Beginners",
    price: 49,
    rating: 4.9,
    students: "197,637",
  },
  {
    id: 3,
    imageUrl: "/courses/course3.svg",
    category: "Developments",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "Adobe Premiere Pro CC – Advanced Training Course",
    price: 32,
    rating: 4.8,
    students: "236,568",
  },
  {
    id: 4,
    imageUrl: "/courses/course4.svg",
    category: "Marketing",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "Ultimate AWS Certified Solutions Architect Associate 2021",
    price: 13,
    rating: 4.1,
    students: "511,123",
  },
  // Row 2
  {
    id: 5,
    imageUrl: "/courses/course5.svg",
    category: "Design",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "Ultimate Google Ads Training 2020: Profit with Pay Per Click",
    price: 9,
    rating: 4.1,
    students: "154,817",
  },
  {
    id: 6,
    imageUrl: "/courses/course6.svg",
    category: "IT & Software",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "Learn Ethical Hacking From Scratch 2021",
    price: 35,
    rating: 4.8,
    students: "451,444",
  },
  {
    id: 7,
    imageUrl: "/courses/course7.svg",
    category: "Developments",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "Angular - The Complete Guide (2021 Edition)",
    price: 16,
    rating: 4.3,
    students: "197,637",
  },
  {
    id: 8,
    imageUrl: "/courses/course8.svg",
    category: "Marketing",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "How to get Diamond in soloQ | League of Legends | Season 11",
    price: 23,
    rating: 4.7,
    students: "435,671",
  },
  // Row 3
  {
    id: 9,
    imageUrl: "/courses/course9.svg",
    category: "Design",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    price: 13,
    rating: 4.6,
    students: "181,811",
  },
  {
    id: 10,
    imageUrl: "/courses/course10.svg",
    category: "IT & Software",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "SQL for NEWBS: Weekender Crash Course",
    price: 32,
    rating: 5.0,
    students: "451,444",
  },
  {
    id: 11,
    imageUrl: "/courses/course11.svg",
    category: "Developments",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "SEO 2021: Complete SEO Training + SEO for WordPress Websites",
    price: 24,
    rating: 5.0,
    students: "197,637",
  },
  {
    id: 12,
    imageUrl: "/courses/course12.svg",
    category: "Marketing",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2021",
    price: 9,
    rating: 5.0,
    students: "1,356,236",
  },
  // Row 4
  {
    id: 13,
    imageUrl: "/courses/course13.svg",
    category: "Design",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "Data Structures & Algorithms Essentials (2021)",
    price: 24,
    rating: 4.7,
    students: "451,444",
  },
  {
    id: 14,
    imageUrl: "/courses/course14.svg",
    category: "IT & Software",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "Complete Adobe Lightroom Megacourse: Beginner to Expert",
    price: 89,
    rating: 4.9,
    students: "511,123",
  },
  {
    id: 15,
    imageUrl: "/courses/course15.svg",
    category: "Developments",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "Digital Marketing Masterclass - 23 Courses in 1",
    price: 32,
    rating: 5.0,
    students: "211,434",
  },
  {
    id: 16,
    imageUrl: "/courses/course16.svg",
    category: "Marketing",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "The Ultimate Drawing Course - Beginner to Advanced",
    price: 49,
    rating: 4.9,
    students: "197,637",
  },
  // Row 5
  {
    id: 17,
    imageUrl: "/courses/course17.svg",
    category: "Design",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "Instagram Marketing 2021: Complete Guide To Instagram Gro...",
    price: 16,
    rating: 4.5,
    students: "854",
  },
  {
    id: 18,
    imageUrl: "/courses/course18.svg",
    category: "IT & Software",
    categoryColor: "text-[#993D20] bg-[#FFEEE8]",
    title: "Automate the Boring Stuff with Python Programming",
    price: 9,
    rating: 4.8,
    students: "982,841",
  },
  {
    id: 19,
    imageUrl: "/courses/course19.svg",
    category: "Developments",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "Selenium WebDriver with Java for Beginners to Advanced+Frameworks",
    price: 9,
    rating: 4.4,
    students: "154,817",
  },
  {
    id: 20,
    imageUrl: "/courses/course20.svg",
    category: "Marketing",
    categoryColor: "text-[#342F98] bg-[#EBEBFF]",
    title: "iPhone Photography | Take Professional Photos On Your iPhone",
    price: 24,
    rating: 4.8,
    students: "311,834",
  },
];

// --- Data Generation for the remaining courses ---

const categories = [
  { name: "IT & Software", color: "text-[#993D20] bg-[#FFEEE8]" },
  { name: "Design", color: "text-[#993D20] bg-[#FFEEE8]" },
  { name: "Developments", color: "text-[#342F98] bg-[#EBEBFF]" },
  { name: "Marketing", color: "text-[#342F98] bg-[#EBEBFF]" },
  { name: "Business", color: "text-green-600 bg-green-100" },
  { name: "Lifestyle", color: "text-purple-600 bg-purple-100" },
  { name: "Health & Fitness", color: "text-teal-600 bg-teal-100" },
];

const titles = [
  "The Complete Financial Analyst Training & Investing Course",
  "Graphic Design Masterclass - Learn GREAT Design",
  "Become a Certified Web Developer from Scratch",
  "JavaScript: The Advanced Concepts",
  "React - The Complete Guide (incl Hooks, React Router)",
  "Docker & Kubernetes: The Complete Guide",
  "The Complete Node.js Developer Course",
  "Go: The Complete Developer's Guide (Golang)",
  "Rust Programming Language for Beginners",
  "Modern React with Redux",
  "Advanced iOS and Swift Bootcamp",
  "Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games",
];

const randomFromArray = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];
const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const formatStudents = (num: number): string => {
  if (num >= 100000) return `${(num / 1000).toFixed(0)}k`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
};

const generatedCourses: Courses[] = Array.from({ length: 60 }, (_, i) => {
  const category = randomFromArray(categories);
  const keywords = [
    "code",
    "design",
    "laptop",
    "office",
    "meeting",
    "data",
    "analytics",
    "creative",
    "technology",
  ];
  const randomKeyword = randomFromArray(keywords);
  const imageUrl = `https://source.unsplash.com/random/400x300?${randomKeyword}&sig=${i}`;

  return {
    id: initialCourses.length + i + 1,
    imageUrl: imageUrl,
    category: category.name,
    categoryColor: category.color,
    title: `${titles[i % titles.length]}`,
    price: randomInt(19, 129),
    rating: parseFloat((Math.random() * (5.0 - 4.2) + 4.2).toFixed(1)),
    students: formatStudents(randomInt(900, 600000)),
  };
});

// Combine the initial courses with the generated ones
export const allCourses: Courses[] = [...initialCourses, ...generatedCourses];
