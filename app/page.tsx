import HeroSection from "@/app/_containers/home_page/herosection";
import JobCategories from "@/app/_containers/home_page/job_categories";
import JobSection from "@/app/_containers/home_page/jobsection";
import GrowCareerSection from "./_containers/home_page/growcareersection";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <JobCategories />
      <JobSection />
      <GrowCareerSection />
    </div>
  );
}
