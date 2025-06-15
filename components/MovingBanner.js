'use client';

import { SunMedium } from 'lucide-react';

export default function MovingBanner() {
  const message =
    'Online mental health counseling serving California & Texas and in-person in Los Angeles';

  return (
    <div className="relative overflow-hidden bg-[hsla(33.75,53.33%,94.12%,1)] py-4">
      <div className="flex whitespace-nowrap animate-marquee-track">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-6 text-forest text-xl font-serif font-medium px-6"
          >
            {[...Array(10)].map((_, j) => (
              <div key={j} className="flex items-center gap-2 pr-12">
                <SunMedium fill="currentColor" className="text-oak flex-shrink-0" size={22} />
                <span>{message}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-track {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-track {
          animation: marquee-track 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
