import HeroSection from "@/components/home_page/herosection";
import JobCategories from "@/components/home_page/job_categories";
import JobSection from "@/components/home_page/jobsection";
import GrowCareerSection from "@/components/home_page/growcareersection";
import OverviewSection from "@/components/home_page/overviewsection";
import ClientReviewSection from "@/components/home_page/clientreviewsection";
import BlogSection from "@/components/home_page/blogsection";

export default function Home() {

  return (
    <main>
      <HeroSection />
      <JobCategories />
      <JobSection />
      <GrowCareerSection />
      <OverviewSection />
      <ClientReviewSection />
      <BlogSection />
    </main>
  );
}
