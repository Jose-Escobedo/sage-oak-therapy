'use client';

import { SunMedium } from 'lucide-react';

export default function MovingBanner() {
  const message =
    'Online mental health counseling serving California & Texas and in-person in Los Angeles';

  return (
    <div className="relative overflow-hidden bg-white py-4">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-6 text-oak text-xl font-serif font-medium px-6"
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
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 30s; /* Slightly slower on mobile */
          }
        }
      `}</style>
    </div>
  );
}
