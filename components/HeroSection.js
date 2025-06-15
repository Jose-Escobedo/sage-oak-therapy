'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative mt-36 md:mt-40 overflow-hidden bg-bashbright py-24 px-6 md:px-12">
  
      <div className="absolute left-[-200px] top-10 w-[500px] h-[370px] md:w-[800px] md:h-[150px] bg-oak opacity-20 rounded-full z-0" />
  <div className="absolute right-[-200px] bottom-15 w-[500px] h-[120px] md:w-[800px] md:h-[100px] bg-forest opacity-10 rounded-full z-0" />

     
      <div
        className={`relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 transition-opacity duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Left - Image */}
        <div className="flex-shrink-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_woman_Licens.jpeg?alt=media&token=c7dbb4cf-f806-44fb-8c1a-fdbc327a50dc"
            alt="Therapist"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Right - Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-forest mb-6">
            Reclaim Your Voice, Begin to Heal
          </h1>
          <p className="text-md md:text-xl text-gray-700 mb-8">
            Therapy tailored for individuals, couples, families, and professionals—including
            athletes and trauma survivors. Whether you&apos;re navigating identity, relationships,
            or healing from the past, we&apos;re here to support your path forward.
          </p>
          <Link
            href="/contact"
            className="inline-block hover-bg-oak bg-forest text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-oak transition-all duration-200"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
