'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function CareerParallax() {
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
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/FEF4822C-05B6-44FE-8AD3-FCA4C61EAD07.jpeg?alt=media&token=19b177cc-d952-4638-9fb9-743c0bf3530b"
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
Why is career counseling important?
  </h2>
  <p className="text-sm md:text-md leading-relaxed text-center">
    
Why is career counseling important?
Our jobs have such a strong influence on our lives from the very beginning. It is safe to say that every 5-year-old in us has been asked “What do you want to be when you grow up?” Since then (or maybe even earlier for you), you start shaping your life based on that one question.  

Having a sense of achievement is part of what fuels our self-esteem and the way we see ourselves. Work can bring about very challenging circumstances that make you feel stuck. Through career counseling, you don&apos;t only get to explore your strengths, you also start to pay attention to what feels satisfying to you. This can be the catalyst that changes the rest of your life. This can help you get clear on who you are so you can start a fulfilling career. 
  </p>
</div>

    </section>
  );
}
