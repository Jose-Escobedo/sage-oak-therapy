import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SpecialtiesSection from "../components/SpecialtiesSection";
import CTASection from "../components/CTASection";
import MovingBanner from "@/components/MovingBanner";
import TherapySliderSection from "@/components/TherapySliderSection";
import MichaelaIntro from "@/components/MichaelaIntro";
import ApproachSection from "@/components/ApproachSection";
import HowItWorks from "@/components/HowItWorks";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function HomePage() {
  return (
    <main className="min-h-screen text-[#0A2540] font-sans">
      <HeroSection />
      <MovingBanner/>
      <TherapySliderSection/>
      <MichaelaIntro />
      <ApproachSection />
      <HowItWorks/>
      <NewsletterSignup/>
      <AboutSection />
      <SpecialtiesSection />
      <CTASection />
    </main>
  );
}
