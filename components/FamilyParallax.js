'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function FamilyParallax() {
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
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/dolomites-5076487_1920.jpg?alt=media&token=ee39fb96-7f9b-4134-bf11-cc059a1061eb"
          alt="mountains background"
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
          Why is family therapy important?
        </h2>
        <p className="text-sm md:text-md leading-relaxed text-center">
          Every family goes through transitions and growing pains. Therapy provides a chance to realign, repair,
          and reconnect—whether you&apos;re working through conflict, rebuilding trust, or simply learning
          how to better support one another.
        </p>
      </div>
    </section>
  );
}
