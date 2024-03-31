import MainLayout from "@/containers/MainLayout";
import HeroSection from "@/containers/home_page/herosection";
import JobCategories from "@/containers/home_page/job_categories";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <JobCategories />
    </div>
  );
}
