'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function CouplesParallax() {
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
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/tree-7619791_1920.jpg?alt=media&token=b2963f88-0524-4b44-bba0-f0b497074396"
          alt="Tree background"
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
          Why is couples therapy important?
        </h2>
        <p className="text-sm md:text-md leading-relaxed text-center">
          Relationships can be incredibly rewarding—but they can also be challenging. Over time, miscommunication,
          unmet needs, or recurring arguments can leave partners feeling distant, frustrated, or disconnected. 
          Couples therapy offers a space to slow down and reconnect. It's a place where both partners can feel heard, 
          understood, and supported while learning tools to communicate more effectively and rebuild trust.
          <br /><br />
          Whether you're facing a major life transition or simply want to strengthen your connection,
          therapy can help you and your partner grow together and create a more secure, fulfilling relationship.
        </p>
      </div>
    </section>
  );
}
