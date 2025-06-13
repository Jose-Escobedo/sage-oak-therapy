import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SpecialtiesSection from "../components/SpecialtiesSection";
import CTASection from "../components/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#0A2540] font-sans">
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <CTASection />
    </main>
  );
}
