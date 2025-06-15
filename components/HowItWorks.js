'use client';

import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Book free consultation',
      description: 'Schedule a free consultation with us to see if we’re a good fit for your needs.',
    },
    {
      number: '2',
      title: 'Connect with your therapist',
      description: 'Meet your therapist, who will address any questions and concerns you may have.',
    },
    {
      number: '3',
      title: 'Start your journey to healing',
      description: 'Begin your path to a more peaceful life feeling supported.',
    },
  ];

  return (
    <section className="bg-[#b1876e] py-16 md:py-30 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-serif font-bold mb-12 text-bashbright">HOW IT WORKS</h2>
        
        <div className="flex flex-col md:flex-row w-full md:justify-center md:items-center md:gap-x-24">
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="flex flex-col items-center text-center mb-12 md:mb-0 md:w-1/3 px-4"
            >
              <div className="text-xl font-bold text-bashbright mb-4">{number}</div>
              <h3 className="text-3xl font-semibold mb-6 text-bashbright">{title}</h3>
              <p className="text-md text-bashbright max-w-xs">{description}</p>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-block mt-12 bg-forest hover-text-bashbright text-[#b1876e] font-semibold text-lg px-8 py-4 rounded-full shadow-md hover-bg-oak transition-colors"
        >
          BOOK FREE CONSULTATION
        </Link>
      </div>
    </section>
  );
}
