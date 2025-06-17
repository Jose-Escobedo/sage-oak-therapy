import CouplesTherapySection from '@/components/CouplesTherapySection';
import CouplesParallax from '@/components/CouplesParallax';
import CTADisplay from '@/components/CTADisplay';
import PageHeading from '@/components/PageHeading';
import TwoColLayout from '@/components/TwoColLayout';
import Link from 'next/link';

export default function Specialties() {
  return (
    <>
      <PageHeading
        title="Couples Therapy in Los Angeles"
        description=""
        bgColor="bg-bashbright"
        tubeColors={['#b1876e', '#7a5e42']}
      />
<CouplesTherapySection/>
<TwoColLayout
  title="What is couples therapy?"
  paragraph={<div className="max-w-5xl mx-auto flex flex-col items-start text-left space-y-6">
        <p className="text-base md:text-lg text-bashbright leading-relaxed">
          Relationships can bring immense joy—but they also come with challenges. Whether you&apos;ve been together
          for years or just started dating, it&apos;s normal to hit points where communication feels stuck or distant.
        </p>
        <p className="text-base md:text-lg text-bashbright leading-relaxed">
          You and your partner may find yourselves repeating the same arguments or avoiding certain topics entirely,
          thinking, <span className="italic">“Theyre never going to understand,”</span> or <span className="italic">“What&apos;s the point?”</span>
        </p>
        <p className="text-base md:text-lg text-bashbright leading-relaxed">
          I help couples slow down and uncover what&apos;s really going on beneath the surface. Together, we work on building
          healthy communication, expressing needs clearly, and restoring emotional safety in your relationship.
        </p>
        <p className="text-base md:text-lg text-bashbright leading-relaxed">
          With support, couples can reconnect, rebuild trust, and create a stronger foundation for lasting connection.
        </p>
      </div>}

  ctaLabel="Start Couples Therapy"
  ctaHref="/contact"
  imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/sunset-5584004_1920.jpg?alt=media&token=5a4994ee-f46e-46d1-ae44-d0305e30dd15"
  imageAlt="A couple"
  imageLeft={false}
  bgColor="bg-forest"
  tubeColor="bg-bashbright"
/>



<CouplesParallax/>

<TwoColLayout
  title="What can we expect from couples therapy?"
  paragraph="Each session is 50 minutes long. Our first session will be getting to know the relationship. The following two sessions will be individual therapy for each partner. I like to get a history of the relationship, then establish your goals. The next couple of sessions will also include education and skill-building. "
  ctaLabel="Work With Us"
  ctaHref="/contact"
  imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/couple-6704262_1920.jpg?alt=media&token=717947ef-1768-4a75-9c73-c129c5035f8b"
  imageAlt="woman therapist sitting down"
  imageLeft={false}
  bgColor="bg-bashbright"
  tubeColor="bg-forest"
  titleColor="text-forest"
  paragraphColor="text-[#444]"
  buttonColor="bg-oak"
  buttonHoverColor="hover:bg-forest"
  buttonHoverTextColor="hover:text-white"
  showTube={true}
/>
<CTADisplay/>
    </>
  );
}