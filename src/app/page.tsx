import BestSellingCourses from "@/components/general/BestSellingCourses";
import Categories from "@/components/general/Categories";
import Hero from "@/components/general/Hero";
import Navbar from "@/components/general/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <BestSellingCourses />
    </div>
  );
}
