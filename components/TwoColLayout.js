'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TwoColLayout({
  title,
  paragraph, // Can now be string or JSX
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  imageLeft = false,
  bgColor = 'bg-[#f5f3f0]',
  tubeColor = 'bg-oak',
  titleColor = 'text-bashbright',
  paragraphColor = 'text-bashbright',
  buttonColor = 'bg-oak',
  buttonHoverColor = 'hover:bg-forest',
  buttonHoverTextColor = 'hover:text-white',
  showTube = true,
}) {
  return (
    <section className={`relative overflow-hidden py-20 px-6 md:px-12 ${bgColor}`}>
      {/* Background tube */}
      {showTube && (
        <div
          className={`absolute ${
            imageLeft ? 'right-[-200px]' : 'left-[-200px]'
          } top-10 w-[500px] h-[370px] md:w-[800px] md:h-[400px] ${tubeColor} opacity-20 rounded-full z-0`}
        />
      )}

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Side */}
        <div
          className={`w-full md:w-1/2 ${
            imageLeft ? 'md:order-1 order-1' : 'md:order-2 order-1'
          }`}
        >
          <div className="w-full h-auto max-h-[350px] md:max-h-[500px] overflow-hidden rounded-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Side */}
        <div
          className={`w-full md:w-1/2 flex flex-col items-start text-left space-y-6 ${
            imageLeft ? 'md:order-2 order-2' : 'md:order-1 order-2'
          }`}
        >
          <h2 className={`text-3xl md:text-5xl font-serif font-bold ${titleColor}`}>{title}</h2>

          {/* Accept string or JSX */}
          {typeof paragraph === 'string' ? (
            <p className={`text-base md:text-md leading-relaxed ${paragraphColor}`}>{paragraph}</p>
          ) : (
            <div className={`text-base md:text-md leading-relaxed ${paragraphColor}`}>{paragraph}</div>
          )}

          <Link
            href={ctaHref}
            className={`mt-4 inline-block ${buttonColor} text-white px-6 py-3 rounded-full text-sm font-medium transition ${buttonHoverColor} ${buttonHoverTextColor}`}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
