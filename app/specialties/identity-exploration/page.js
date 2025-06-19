'use client';

import IdentityExplorationSection from '@/components/IdentityExplorationSection';
import IdentityParallax from '@/components/IdentityParallax';
import CTADisplay from '@/components/CTADisplay';
import PageHeading from '@/components/PageHeading';
import TwoColLayout from '@/components/TwoColLayout';

export default function IdentityPage() {
  return (
    <>
      <PageHeading
        title="Identity Exploration in Los Angeles"
        description=""
        bgColor="bg-bashbright"
        tubeColors={['#b1876e', '#7a5e42']}
      />

      <IdentityExplorationSection />

      <TwoColLayout
        title="What is identity exploration?"
        paragraph={
          <div className="max-w-5xl mx-auto flex flex-col items-start text-left space-y-6">
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              Exploring your identity is a deeply personal journey. Whether you&apos;re navigating your sense of self, questioning
              long-held beliefs, or trying to understand how your background and life experiences shape who you are—therapy can be a
              grounding place to unpack it all.
            </p>
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              You may find yourself wrestling with questions around gender, sexuality, culture, religion, or purpose.
              This process isn&apos;t always linear—and it can feel overwhelming to do it alone.
            </p>
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              I provide a supportive, nonjudgmental space to process your experiences, explore your identity with curiosity,
              and affirm your truth. Together, we&apos;ll work on building self-understanding, confidence, and a stronger sense of wholeness.
            </p>
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              Your identity is valid. Let&apos;s explore it with compassion and clarity.
            </p>
          </div>
        }
        ctaLabel="Start Exploring"
        ctaHref="/contact"
        imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/musician-7300353_1920.jpg?alt=media&token=e5ac00e9-9901-40f8-9e2a-6ff2447b5c40"
        imageAlt="man playing guitar"
        imageLeft={false}
        bgColor="bg-forest"
        tubeColor="bg-bashbright"
      />

      <IdentityParallax />

      <TwoColLayout
        title="What can I expect from identity-focused therapy?"
        paragraph="Identity exploration therapy is collaborative and client-led. In our first sessions, we&apos;ll explore what brought you in and what aspects of your identity you want to focus on. From there, we&apos;ll go at your pace—unpacking beliefs, emotions, and experiences in a safe, affirming space. You&apos;ll gain clarity, build confidence, and feel more grounded in who you are."
        ctaLabel="Work With Us"
        ctaHref="/contact"
        imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/new-year-background-1850177_1920.jpg?alt=media&token=b0d9765c-5d91-44b1-9115-08ff1eb56217"
        imageAlt="Person journaling and reflecting"
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
