'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function IdentityParallax() {
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
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/snow-mountain-9614087_1920.jpg?alt=media&token=4d73747f-369a-4e17-b0ee-9dd07611b4de"
          alt="Reflective image representing identity"
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
          Why is identity exploration important?
        </h2>
        <p className="text-sm md:text-md leading-relaxed text-center">
          Your identity is shaped by many layers—family, culture, society, and life experiences. But who are you beneath all of
          that? Identity-focused therapy helps you slow down and reconnect with your core self. It&apos;s about gaining clarity,
          reclaiming your story, and finding peace in who you are becoming.
        </p>
      </div>
    </section>
  );
}
