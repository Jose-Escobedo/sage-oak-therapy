import AnxietyParallax from '@/components/AnxietyParallax';
import CTADisplay from '@/components/CTADisplay';
import PageHeading from '@/components/PageHeading';
import SupportOverThinkSection from '@/components/SupportOverThinkSection';
import TwoColLayout from '@/components/TwoColLayout';
import Link from 'next/link';

export default function AnxietySupport() {
  return (
    <>
      <PageHeading
        title="Anxiety Therapy in Los Angeles"
        description=""
        bgColor="bg-bashbright"
        tubeColors={['#b1876e', '#7a5e42']}
      />
<SupportOverThinkSection/>
<TwoColLayout
  title="What Anxiety Might Look or Feel Like"
  paragraph={
    <>
      <p className="mb-4">You may notice:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Constant overthinking or worst-case-scenario spirals</li>
        <li>Trouble falling or staying asleep</li>
        <li>Muscle tension, restlessness, or tightness in your chest</li>
        <li>A racing heart or shallow breathing</li>
        <li>Avoidance of situations that feel too overwhelming</li>
        <li>Feeling stuck in your own head—unable to relax or be present</li>
        <li>Worry that you&apos;re not doing enough, being enough, or that something bad is just around the corner</li>
      </ul>
      <p>
        Even if you&apos;ve gotten good at coping, pushing through, or appearing composed, it doesn&apos;t mean the anxiety isn&apos;t real. And it doesn&apos;t mean you have to live this way forever.
      </p>
    </>
  }

  ctaLabel="Book Free Consultation"
  ctaHref="/contact"
  imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/man-5154583_1920.jpg?alt=media&token=2146b2fb-c60b-4f22-8fec-b73fd0497c93"
  imageAlt="A man anxious"
  imageLeft={false}
  bgColor="bg-forest"
  tubeColor="bg-bashbright"
/>

<AnxietyParallax/>
<TwoColLayout
  title="Our approach to anxiety therapy in Los Angeles"
  paragraph={
  <div className="max-w-4xl mx-auto text-left space-y-2">
    <p className="text-base md:text-lg text-bash leading-relaxed">
      No two people experience anxiety the same way. What activates it, how you respond, and what you need to feel safe and supported? That&apos;s uniquely yours—and therapy should reflect that.
    </p>
    <p className="text-base md:text-lg text-bash leading-relaxed">
      This isn&apos;t one-size-fits-all. It&apos;s a space built around you.
    </p>
    <p className="text-base md:text-lg text-bash leading-relaxed">
      We believe therapy should feel like a collaborative space where you&apos;re not being fixed—you&apos;re being met.
    </p>
    <p className="text-base md:text-lg text-bash leading-relaxed">
      Our approach to anxiety treatment is evidence-based and trauma-informed, but more than that, it&apos;s human. We work with you, not on you. We listen, reflect, challenge, and support—all with your unique story and strengths in mind.
    </p>
  </div>
}
  ctaLabel="Get Started"
  ctaHref="/contact"
  imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/desperate-5011953_1920.jpg?alt=media&token=a224805d-c968-48dc-b4d2-71c135b45104"
  imageAlt="anxious man"
  imageLeft={true}
  bgColor="bg-forest"
  tubeColor="bg-stone"
  titleColor="text-bashbright"
  paragraphColor="text-bashbright"
  buttonColor="bg-oak"
  buttonHoverColor="hover:bg-forest"
  buttonHoverTextColor="hover:text-white"
  showTube={true}
/>


<CTADisplay/>
    </>
  );
}