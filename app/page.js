import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SpecialtiesSection from "../components/SpecialtiesSection";
import CTASection from "../components/CTASection";
import MovingBanner from "@/components/MovingBanner";
import TherapySliderSection from "@/components/TherapySliderSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#0A2540] font-sans">
      <HeroSection />
      <MovingBanner/>
      <TherapySliderSection/>
      <AboutSection />
      <SpecialtiesSection />
      <CTASection />
    </main>
  );
}
