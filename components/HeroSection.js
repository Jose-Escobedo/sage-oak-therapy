'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative mt-36 md:mt-40 overflow-hidden bg-stone py-24 px-6 md:px-12">
      {/* Background Tube Shapes - Same shape, different sizes */}
      <div className="absolute -left-20 top-10 w-[800px] h-[150px] bg-oak opacity-20 rounded-full z-0" />
      <div className="absolute -right-20 bottom-30 w-[800px] h-[100px] bg-forest opacity-10 rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left - Image */}
        <div className="flex-shrink-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_man_Licensed.jpeg?alt=media&token=0c99d7f0-15c1-48e9-bd30-0a9502b38e71"
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
          <p className="text-lg md:text-xl text-gray-700 mb-8">
           Therapy tailored for individuals, couples, families, and professionals—including athletes and trauma survivors. Whether you're navigating identity, relationships, or healing from the past, we&apos;re here to support your path forward.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-forest text-white px-6 py-3 rounded-xl font-medium shadow-md hover-bg-oak transition-all duration-200"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
