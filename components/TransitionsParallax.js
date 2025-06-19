'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function LifeTransitionsParallax() {
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
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/antelope-4840335_1920.jpg?alt=media&token=d605856b-e293-40d5-b613-a52a2bf7abf8"
          alt="Sand background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="bg-bash text-[#0A2540] max-w-3xl p-12 md:p-16 shadow-xl backdrop-blur-sm
        rounded-xl rounded-bl-[3rem] rounded-tr-[4rem]"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">
          Why are life transitions challenging?
        </h2>
        <p className="text-sm md:text-md leading-relaxed text-center">
          Life is full of changes—some planned, some unexpected. Even when transitions bring exciting opportunities,
          they can also stir up stress, doubt, and a sense of loss. Whether you&apos;re starting a new chapter, ending one,
          or simply navigating what&apos;s next, it&apos;s normal to feel overwhelmed.
          <br /><br />
          Therapy offers a space to process what you&apos;re feeling, gain clarity, and build tools for resilience.
          With support, these moments of transition can become meaningful turning points—not just times of disruption,
          but invitations to grow and realign with who you&apos;re becoming.
        </p>
      </div>
    </section>
  );
}
