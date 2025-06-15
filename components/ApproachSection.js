'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ApproachSection() {
  const parallaxRef = useRef(null);

 
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden flex items-center justify-center px-6 md:px-12">

      <div className="absolute inset-0 -z-10" ref={parallaxRef}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/IMG_4996.JPG?alt=media&token=722debb8-5fae-43de-88e7-1b2dd9d2d530"
          alt="Leafy Background"
          fill
          className="object-cover opacity-40"
        />
      </div>

   
      <div className="bg-bash text-[#0A2540] max-w-3xl rounded-[2rem] p-8 md:p-12 shadow-xl backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">
          Our approach as Los Angeles therapists
        </h2>
        <p className="text-md md:text-lg leading-relaxed text-center">
          The city life can be overwhelming at times. That is why our style as therapists in Los Angeles is similar to that of a nurturer’s role. In sessions with us, you’ll find yourself in a kind, judgment-free space. We craft a good balance between holding space for you and also holding you accountable. We lead with curiosity—we get to know you and your story in the first few sessions, then guide you with coping strategies so you can practice these skills outside of our meetings.
        </p>
      </div>
    </section>
  );
}
