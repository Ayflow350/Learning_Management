import BestSellingCourses from "@/components/general/BestSellingCourse/BestSellingCourses";
import Categories from "@/components/general/Categories/Categories";
import FeaturedCourses from "@/components/general/FeaturedCourses/FeaturedCourses";
import Hero from "@/components/general/Hero/Hero";
import Navbar from "@/components/Header/Navbar";
import RecentlyAddedCourses from "@/components/general/RecentlyAdded/RecentlyAddedCourses";

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
