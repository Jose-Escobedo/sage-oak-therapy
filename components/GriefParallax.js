'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function GriefParallax() {
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
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/conifer-6966140_1920.jpg?alt=media&token=5f4f2803-2f1e-47b9-baa2-ac73497f065f"
          alt="Calm nature background for grief counseling"
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
          Why is grief counseling important?
        </h2>
        <p className="text-sm md:text-md leading-relaxed text-center">
          Grief is a natural response to loss, but it can leave you feeling lost, numb, or overwhelmed. Grief counseling offers a supportive space to process your feelings, honor your experience, and learn ways to move forward with compassion for yourself.
        </p>
      </div>
    </section>
  );
}
