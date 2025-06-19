'use client';

import PageHeading from '@/components/PageHeading';
import SelfEsteemSection from '@/components/SelfEsteemSection';
import SelfEsteemParallax from '@/components/SelfEsteemParallax';
import TwoColLayout from '@/components/TwoColLayout';
import CTADisplay from '@/components/CTADisplay';

export default function SelfEsteemPage() {
  return (
    <>
      <PageHeading
        title="Self-Esteem Therapy in Los Angeles"
        description=""
        bgColor="bg-bashbright"
        tubeColors={['#b1876e', '#7a5e42']}
      />

      <SelfEsteemSection />

      <TwoColLayout
        title="What is self-esteem therapy?"
        paragraph={
          <div className="max-w-5xl mx-auto flex flex-col items-start text-left space-y-6">
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              Your self-esteem shapes how you move through the world—how you communicate, make decisions, and care for yourself. If you&apos;ve ever felt like you&apos;re not good enough, unworthy, or constantly doubting yourself, you&apos;re not alone.
            </p>
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              These beliefs often stem from past experiences, cultural messages, or relationships that made you question your worth. In therapy, we work together to identify those voices and begin to rewrite the story you tell yourself.
            </p>
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              We focus on building a compassionate inner voice, recognizing your strengths, and helping you reconnect with who you really are—beyond the noise and pressure of the outside world.
            </p>
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              You deserve to feel grounded, confident, and enough—just as you are.
            </p>
          </div>
        }
        ctaLabel="Start Self-Esteem Therapy"
        ctaHref="/contact"
        imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/karate-2578819_1920.jpg?alt=media&token=920865a6-ec4c-4225-89ac-02e6f9fd506a"
        imageAlt="silhoette of a woman shadow training karate"
        imageLeft={false}
        bgColor="bg-forest"
        tubeColor="bg-bashbright"
      />

      <SelfEsteemParallax />

      <TwoColLayout
        title="What can I expect from self-esteem therapy?"
        paragraph="Each 50-minute session is tailored to your journey. We begin by exploring where your current beliefs about self-worth come from, and what has shaped how you see yourself. Together, we set goals to help you develop more self-compassion, recognize your strengths, and break out of self-critical cycles."
        ctaLabel="Work With Us"
        ctaHref="/contact"
        imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/woman-1730325_1920.jpg?alt=media&token=13b519c2-8959-4cdd-9dca-7a6f186211d7"
        imageAlt="Two women at the gym"
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
