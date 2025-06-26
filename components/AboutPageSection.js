import TwoColLayout from '@/components/TwoColLayout';
import Link from 'next/link';
import TherapySliderSection from './TherapySliderSection';
import MovingBannerLarge from './MovingBannerLarge';
import FAQSection from './FAQSection';

export default function Specialties() {
  return (
    <>
<TwoColLayout
  title="Meet Michaela"
  paragraph={<section className=" py-16">
  <div className="max-w-3xl">
    <p className="text-base md:text-lg text-bashbright mb-4 leading-relaxed">
      Being human is complex—and it&apos;s okay to need support along the way. Whether you&apos;re navigating anxiety,
      identity questions, grief, or simply feeling stuck, therapy can offer a space to breathe and begin again.
    </p>
    <p className="text-base md:text-lg text-bashbright mb-4 leading-relaxed">
      I&apos;m here to help you slow down and make sense of what you&apos;re carrying. My approach is warm, affirming,
      and collaborative. I meet you where you are, without judgment, and walk alongside you as you reconnect with
      your inner clarity and strength.
    </p>
    <p className="text-base md:text-lg text-bashbright leading-relaxed">
      Together, we can explore what&apos;s been holding you back—and create space for growth, healing, and meaningful change.
    </p>
  </div>
</section>
}

  ctaLabel="Work With Us"
  ctaHref="/contact"
  imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-sandro-tavares-260503371-13375849.jpg?alt=media&token=a513a92a-b689-44fa-87ab-29d5d0999599"
  imageAlt="A portrait of michaela"
  imageLeft={false}
  bgColor="bg-forest"
  tubeColor="bg-bashbright"
/>
<MovingBannerLarge/>

<TherapySliderSection/>
<FAQSection/>
    </>
  );
}