'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function SelfEsteemParallax() {
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
      <div
        ref={parallaxRef}
        className="absolute inset-0 -z-10"
        style={{ willChange: 'transform' }}
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/river-7411236_1920.jpg?alt=media&token=4abb8dac-4149-4452-af9b-6396021ea293"
          alt="Stones in the river"
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
          Why is self-esteem therapy important?
        </h2>
        <p className="text-sm md:text-md leading-relaxed text-center">
          When you carry self-doubt, it impacts every part of your life—relationships, work, and even your health.
          Therapy gives you the space to understand where that doubt comes from, and the tools to begin replacing it with something stronger: self-respect and self-trust.
          <br /><br />
          You deserve to feel proud of who you are. Let&apos;s work together to get you there.
        </p>
      </div>
    </section>
  );
}
