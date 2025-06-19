'use client';

import FamilyTherapySection from '@/components/FamilyTherapySection';
import FamilyParallax from '@/components/FamilyParallax';
import CTADisplay from '@/components/CTADisplay';
import PageHeading from '@/components/PageHeading';
import TwoColLayout from '@/components/TwoColLayout';

export default function FamilyTherapyPage() {
  return (
    <>
      <PageHeading
        title="Family Therapy in Los Angeles"
        description=""
        bgColor="bg-bashbright"
        tubeColors={['#b1876e', '#7a5e42']}
      />

      <FamilyTherapySection />

      <TwoColLayout
        title="What is family therapy?"
        paragraph={
          <div className="max-w-5xl mx-auto flex flex-col items-start text-left space-y-6">
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              Every family goes through periods of change, stress, or disconnection. Whether it&apos;s conflict between
              parents and children, tension between siblings, or navigating major life shifts, family therapy can offer
              support and structure.
            </p>
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              I help families slow down and create a space where everyone feels seen and heard. Together, we identify
              patterns that may be causing strain and introduce tools to strengthen communication and trust.
            </p>
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              Family therapy provides a framework for healing old wounds, deepening understanding, and fostering
              healthier connections so your family can thrive together.
            </p>
          </div>
        }
        ctaLabel="Start Family Therapy"
        ctaHref="/contact"
        imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/family-7638964_1920.jpg?alt=media&token=9c6652a4-f39c-4cdc-a370-18ba4f745655"
        imageAlt="married couple"
        imageLeft={false}
        bgColor="bg-forest"
        tubeColor="bg-bashbright"
      />

      <FamilyParallax />

      <TwoColLayout
        title="What can we expect from family therapy?"
        paragraph="Sessions typically last 50 minutes and include all or some members of the family, depending on the needs. In our first session, we explore what brought your family to therapy and clarify goals. Over time, we work together to build better communication, set boundaries, and resolve longstanding conflicts—so your family feels more connected and supported."
        ctaLabel="Work With Us"
        ctaHref="/contact"
        imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/family-7022833_1920.jpg?alt=media&token=24fb57a6-f9fe-4da8-9c69-47907a4bacd6"
        imageAlt="family at beach"
        imageLeft={false}
        bgColor="bg-bashbright"
        tubeColor="bg-forest"
        titleColor="text-forest"
        paragraphColor="text-[#444]"
        buttonColor="bg-oak"
        buttonHoverColor="hover:bg-forest"
        buttonHoverTextColor="hover:text-white"
        showTube={true}
      />

      <CTADisplay />
    </>
  );
}
