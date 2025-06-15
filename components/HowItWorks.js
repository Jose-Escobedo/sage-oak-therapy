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
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold mb-12 text-[#0A2540]">HOW IT WORKS</h2>
        <div className="space-y-12">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex flex-col items-center text-center max-w-xl mx-auto">
              <div className="text-5xl font-bold text-bash mb-4">{number}</div>
              <h3 className="text-2xl font-semibold mb-2 text-[#0A2540]">{title}</h3>
              <p className="text-md text-gray-700 max-w-md">{description}</p>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="inline-block mt-12 bg-forest text-white font-semibold text-lg px-8 py-4 rounded-full shadow-md hover:bg-forest-dark transition-colors"
        >
          Book free consultation
        </Link>
      </div>
    </section>
  );
}
