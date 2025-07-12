import BestSellingCourses from "@/components/Home/BestSellingCourse/BestSellingCourses";
import Categories from "@/components/Home/Categories/Categories";
import FeaturedCourses from "@/components/Home/FeaturedCourses/FeaturedCourses";
import Hero from "@/components/Home/Hero/Hero";
import Navbar from "@/components/Home/Header/Navbar";
import RecentlyAddedCourses from "@/components/Home/RecentlyAdded/RecentlyAddedCourses";
import BecomeInstructor from "@/components/Home/BecomingInstructor/BecomeInstructor";
import TopInstructors from "@/components/Home/Instructors/TopInstructors";
import TrustedCompanies from "@/components/Home/TrustedCompanies/TrustedCompanies";
import Footer from "@/components/Home/Footer/Footer";
import CtaBanner from "@/components/Home/Footer/CtaBanner";

import Header from "@/components/Home/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Categories />
      <BestSellingCourses />
      <FeaturedCourses />
      <RecentlyAddedCourses />
      <BecomeInstructor />
      <TopInstructors />
      <TrustedCompanies />
      <CtaBanner />
      <Footer />
    </div>
  );
}
