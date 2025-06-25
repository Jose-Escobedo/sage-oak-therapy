'use client';

import { SunMedium } from 'lucide-react';
import Link from 'next/link';

export default function MovingBannerLarge() {
  const message =
    'Book A Free Consulation';

  return (
    <div className="relative overflow-hidden bg-white py-4">
        <Link href={"/Contact"}>
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-6 p-15 text-oak text-5xl md:text-7xl font-serif font-medium px-6"
          >
            {[...Array(10)].map((_, j) => (
              <div key={j} className="flex items-center gap-2 pr-12">
                <span>{message}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      </Link>

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
