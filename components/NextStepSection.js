'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NextStepSection() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-[#b1876e] px-6 md:px-16 py-20 gap-10">
      
      <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/1750036785437ry7bu1cq%20(1).png?alt=media&token=1e5de77d-a135-47c5-9a57-442a375b3ff1"
          alt="Therapy support"
          fill
          className="object-cover object-top"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>

      
      <div className="w-full md:w-1/2 text-left max-w-xl">
        <h2 className="text-4xl font-serif font-bold text-bashbright mb-4">
          Let&apos;s take the next step together
        </h2>
        <p className="text-bashbright mb-6 leading-relaxed">
          You&apos;re not meant to figure it all out alone. With the right support,
          clarity comes, patterns shift, and life starts to feel lighter.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-12 bg-forest-dark hover-text-bashbright text-[#b1876e] font-semibold text-lg px-8 py-4 rounded-full shadow-md hover-bg-oak transition-colors"
        >
          BOOK FREE CONSULTATION
        </Link>
      </div>
    </section>
  );
}
