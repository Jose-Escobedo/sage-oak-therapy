'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AnxietyParallax() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const sectionTop = parallaxRef.current.parentElement.offsetTop;
      const scrollY = window.scrollY;
      const offset = (scrollY - sectionTop) * 0.3;
      parallaxRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Parallax background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 -z-10"
        style={{ willChange: 'transform' }}
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/sunset-7133867_1920.jpg?alt=media&token=24b52f1c-2aef-407c-9d57-35e00ba78560"
          alt="Nature beach background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Foreground content */}
      <div className="bg-bash text-forest max-w-3xl p-12 md:p-16 shadow-xl backdrop-blur-sm rounded-xl rounded-bl-[3rem] rounded-tr-[4rem] space-y-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
          Who We Work With
        </h2>
        <ul className="list-disc pl-6 text-sm md:text-md space-y-2">
          <li>Generalized Anxiety Disorder (GAD)</li>
          <li>High-Functioning Anxiety</li>
          <li>Panic Attacks</li>
          <li>Social Anxiety & Fear of Judgment</li>
          <li>Perfectionism & Imposter Syndrome</li>
          <li>Work, Career, and Leadership Anxiety</li>
          <li>Anxiety in College Students & Young Adults</li>
          <li>Anxiety in Athletes</li>
          <li>Chronic Worry & “Worst-Case Scenario” Thinking</li>
          <li>First-generation professionals & caregivers under pressure</li>
          <li>BIPOC, LGBTQIA+, and Neurodivergent clients</li>
        </ul>
        <p className="text-sm md:text-md leading-relaxed">
          We know anxiety often shows up in nuanced ways—especially when you’re navigating
          layered identities or high expectations. Our therapy meets you where you are and
          helps you make space for who you're becoming.
        </p>
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-forest-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-forest transition"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
