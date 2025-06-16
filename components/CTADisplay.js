'use client';

import Link from 'next/link';
import { Phone, HelpingHand, CloudSun } from 'lucide-react';

export default function CTADisplay() {
  const items = [
    {
      icon: <Phone size={28} className="text-forest" />,
      text: 'Schedule a free 15-minute consultation to see if we’re a good fit.',
    },
    {
      icon: <HelpingHand size={28} className="text-forest" />,
      text: 'Virtual therapy available across California.',
    },
    {
      icon: <CloudSun size={28} className="text-forest" />,
      text: 'Morning, evening & mid-day sessions available.',
    },
  ];

  return (
    <section className="bg-[#b1876e] px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-bashbright">
            Get started today
          </h2>
          <p className="text-base md:text-lg text-bashbright leading-relaxed">
            We know reaching out for help isn&apos;t always easy. But you don&apos;t have to do this alone.
            If you&apos;re looking for compassionate, expert therapy for your child or teen in Los
            Angeles, we&apos;re here for you.
          </p>

          {/* CTA only visible on desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-block bg-forest-dark text-[#b1876e] px-6 py-3 rounded-full text-sm font-medium hover:bg-oak transition"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        {/* Right Side: Icon Rows */}
        <div className="w-full md:w-1/2 space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center bg-bashbright rounded-2xl p-4 md:p-6 gap-4 shadow-sm"
            >
              <div className="bg-[#b1876e] text-oak rounded-full p-3 md:p-4 flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-sm md:text-base text-[#333]">{item.text}</p>
            </div>
          ))}

          {/* CTA button for mobile only */}
          <div className="md:hidden mt-6 text-center">
            <Link
              href="/contact"
              className="inline-block bg-forest text-[#b1876e] px-6 py-3 rounded-full text-sm font-medium hover:bg-oak transition"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
