import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import WhySection from "@/components/WhySection";
import ProgramsSection from "@/components/ProgramsSection";
import StatsSection from "@/components/StatsSection";
import ResultsBentoSection from "@/components/ResultsBentoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StorySection from "@/components/StorySection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <div id="training">
        <VideoSection />
      </div>
      <WhySection />
      <div id="programs">
        <ProgramsSection />
      </div>
      <StatsSection />
      <div id="results">
        <ResultsBentoSection />
      </div>
      <TestimonialsSection />
      <div id="story">
        <StorySection />
      </div>
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
