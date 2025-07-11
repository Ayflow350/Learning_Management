import BestSellingCourses from "@/components/general/BestSellingCourses";
import Categories from "@/components/general/Categories";
import FeaturedCourses from "@/components/general/FeaturedCourses";
import Hero from "@/components/general/Hero";
import Navbar from "@/components/general/Navbar";
import RecentlyAddedCourses from "@/components/general/RecentlyAddedCourses";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <BestSellingCourses />
      <FeaturedCourses />
      <RecentlyAddedCourses />
    </div>
  );
}
