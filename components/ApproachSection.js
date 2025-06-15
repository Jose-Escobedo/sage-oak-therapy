'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ApproachSection() {
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
      {/* Background image with parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 -z-10"
        style={{ willChange: 'transform' }}
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/IMG_4996.JPG?alt=media&token=722debb8-5fae-43de-88e7-1b2dd9d2d530"
          alt="Nature background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="bg-bash text-[#0A2540] max-w-3xl p-12 md:p-16 shadow-xl backdrop-blur-sm
                rounded-xl 
                rounded-bl-[3rem] 
                rounded-tr-[4rem]">
  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">
    My approach as a Los Angeles therapist
  </h2>
  <p className="text-sm md:text-lg leading-relaxed text-center">
    Life in the city can often feel hectic and overwhelming. That&apos;s why my approach as a Los Angeles therapist focuses on creating a safe, compassionate environment where you can feel truly heard. We balance empathy with encouragement, supporting you while helping you take ownership of your growth. Through genuine curiosity, we explore your unique story during the first sessions and work together to develop practical tools you can use beyond our time together.
  </p>
</div>

    </section>
  );
}
