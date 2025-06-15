'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';

const therapyCards = [
  {
    title: 'Career Counseling',
    description:
      'Support to align your work with personal values and pursue meaningful goals with clarity.',
    link: '/specialties/career-counseling',
  },
  {
    title: 'Couples Therapy',
    description:
      'Strengthen communication, navigate challenges, and deepen connection in your relationship.',
    link: '/specialties/couples-therapy',
  },
  {
    title: 'Anxiety Support',
    description:
      'Tools and support to manage anxiety, build resilience, and find emotional balance.',
    link: '/specialties/anxiety-support',
  },
  {
    title: 'Life Transitions',
    description:
      'Guidance through major life changes like relocation, loss, or new beginnings.',
    link: '/specialties/life-transitions',
  },
  {
    title: 'Self-Esteem',
    description:
      'Develop a healthier relationship with yourself and build lasting self-confidence.',
    link: '/specialties/self-esteem',
  },
  {
    title: 'Family Therapy',
    description:
      'Improve dynamics, foster understanding, and heal relationships across generations.',
    link: '/specialties/family-therapy',
  },
  {
    title: 'Identity Exploration',
    description:
      'A supportive space to understand and affirm your sense of self and lived experience.',
    link: '/specialties/identity-exploration',
  },
  {
    title: 'Grief Counseling',
    description:
      'Compassionate support for navigating loss, honoring memory, and finding hope again.',
    link: '/specialties/grief-counseling',
  },
];

export default function TherapySliderSection() {
 const [emblaRef, embla] = useEmblaCarousel({
  align: 'start',
  containScroll: 'trimSnaps',
  slidesToScroll: 1,
  loop: true,
});

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => embla && embla.scrollPrev();
  const scrollNext = () => embla && embla.scrollNext();

  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    };

    embla.on('select', onSelect);
    onSelect();

    return () => embla.off('select', onSelect);
  }, [embla]);

  return (
    <section className="relative overflow-hidden bg-[#b1876e] py-24 px-6 md:px-12 text-white w-full">
     <div className="relative z-10">
      <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 text-left px-4 md:px-6 lg:px-8">
        We offer therapy for
      </h2>

      <div className="relative" style={{ maxWidth: '100vw' }}>
        <div
          className="embla overflow-hidden"
          ref={emblaRef}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <div className="embla__container flex gap-4 px-2 sm:gap-6 sm:px-6 lg:px-8">
            {therapyCards.map((card, i) => (
              <div
                key={i}
                className="embla__slide bg-[hsla(33.75,53.33%,94.12%,1)] text-gray-900 rounded-2xl shadow-lg p-8 flex flex-col justify-between flex-shrink-0 w-full sm:w-[450px] min-h-[320px]"

              >
                <div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">{card.title}</h3>
                  <p className="text-base mb-6">{card.description}</p>
                </div>
              
<Link
  href={card.link}
  className="text-white font-medium bg-forest px-4 py-2 rounded-full hover:bg-oak transition w-max mt-2 text-sm"
>
  Learn more
</Link>

              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-4 mt-6 px-4 md:px-6 lg:px-8">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`p-2 rounded-full cursor-pointer bg-white/90 hover:bg-white text-forest transition ${
              !canScrollPrev ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            aria-label="Scroll left"
          >
            <ArrowLeft size={22} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`p-2 rounded-full cursor-pointer bg-white/90 hover:bg-white text-forest transition ${
              !canScrollNext ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            aria-label="Scroll right"
          >
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
      </div>
      <div
  className="
    absolute 
    -bottom-[190px] -right-[130px] 
    md:-bottom-[650px] md:-right-[250px] 
    w-96 h-96 md:w-[1000px] md:h-[1000px] 
    bg-neutral-900/70 rounded-full z-0 pointer-events-none
  "
></div>
    </section>
  );
}
