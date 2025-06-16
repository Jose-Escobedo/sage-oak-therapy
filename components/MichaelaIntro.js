'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MichaelaIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--color-bashbright))] py-20 px-6 md:px-12">
     
      <div className="block md:hidden absolute right-[-200px] top-1 w-[450px] h-[425px] bg-[#b1876e] rounded-full z-0 pointer-events-none"></div>

      {/* Desktop Tube */}
      <div className="hidden md:block absolute top-30 right-[-300px] w-[1000px] h-[500px] bg-[#b1876e] rounded-full z-0 pointer-events-none"></div>


      <div
        className={`relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 transition-opacity duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Text Section */}
        <div className="md:w-1/2 text-gray-900">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Hello, I&apos;m Michaela
          </h1>
          <h2 className="font-serif text-xl md:text-2xl font-semibold mb-8">
            Founder of Sage Oak Therapy
          </h2>
          <p className="mb-6 leading-relaxed text-sm md:text-lg" >
            My personal journey deeply influences how I support others. Exploring identity,
            self-awareness, and personal growth is at the heart of my work. As a young adult,
            I believed I had life all mapped out, but as challenges came my way, I found myself
            disconnected from who I truly was.
          </p>
          <p className="mb-6 leading-relaxed text-sm md:text-lg">
            If any of this sounds familiar, you&apos;re not alone. Life can sometimes feel overwhelming
            and confusing. I&apos;m here to offer understanding and guidance tailored to your unique
            experiences and goals.
          </p>
          <p className="mb-8 leading-relaxed text-sm md:text-lg">
            Together, we&apos;ll identify blind spots and work toward meaningful change that improves
            your well-being and helps you live your fullest life.
          </p>
          <div className="flex md:justify-start justify-center">
            <Link
              href="/about"
              className="hover-bg-oak inline-block bg-forest text-white font-semibold px-6 py-3 rounded-full hover:bg-oak transition"
            >
              Learn more about me
            </Link>
          </div>
        </div>

 
        <div className="md:w-1/2 flex justify-center md:justify-center">
  <div className="relative w-64 h-80 md:w-80 md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg transition-transform duration-1000">
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/woman_brunette_brown_hair_Lice.jpeg?alt=media&token=6e68d152-998f-4aac-ab61-ca23a083d4d7" 
      alt="Portrait of Michaela"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>
      </div>
    </section>
  );
}
