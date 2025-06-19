import CTADisplay from '@/components/CTADisplay';
import PageHeading from '@/components/PageHeading';
import TwoColLayout from '@/components/TwoColLayout';
import Link from 'next/link';
import LifeTransitionsSection from '@/components/TransitionsSection';
import LifeTransitionsParallax from '@/components/TransitionsParallax';

export default function TransitionsPage() {
  return (
    <>
      <PageHeading
        title="Life Transitions in Los Angeles"
        description=""
        bgColor="bg-bashbright"
        tubeColors={['#b1876e', '#7a5e42']}
      />
<LifeTransitionsSection/>
<TwoColLayout
  title="What are life transitions?"
  paragraph={
    <div className="max-w-5xl mx-auto flex flex-col items-start text-left space-y-6">
      <p className="text-base md:text-lg text-bashbright leading-relaxed">
        Life transitions can feel overwhelming, even when they are expected. Whether it&apos;s a move, a breakup,
        a new career, or becoming a parent—change can stir up uncertainty, grief, and anxiety.
      </p>
      <p className="text-base md:text-lg text-bashbright leading-relaxed">
        You might feel like the ground beneath you has shifted. What once felt certain now feels foreign,
        and you may be asking yourself, <span className="italic">&quot;What now?&quot;</span>
      </p>
      <p className="text-base md:text-lg text-bashbright leading-relaxed">
        In therapy, we help you slow down, process the emotions that come with change, and find clarity in the unknown.
        Together, we explore what this transition means for you—and how you want to move forward.
      </p>
      <p className="text-base md:text-lg text-bashbright leading-relaxed">
        Change doesn&apos;t have to mean chaos. With support, it can become a powerful turning point toward growth,
        healing, and a deeper connection to yourself.
      </p>
    </div>
  }
  ctaLabel="Work With Us"
  ctaHref="/contact"
  imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/river-7411236_1920.jpg?alt=media&token=4abb8dac-4149-4452-af9b-6396021ea293"
  imageAlt="silhoette of person on train tracks"
  imageLeft={false}
  bgColor="bg-forest"
  tubeColor="bg-bashbright"
/>




<LifeTransitionsParallax/>

<TwoColLayout
  title="What can you expect from life transitions therapy?"
  paragraph="Each session is 50 minutes long. In our first meeting, we&apos;ll explore the life changes you&apos;re currently facing and how they&apos;re impacting your well-being. The next few sessions may focus on processing emotions, building coping strategies, and finding clarity in the midst of uncertainty. My goal is to support you in feeling grounded, empowered, and more aligned with what matters most—no matter what transition you&apos;re navigating."
  ctaLabel="Work With Us"
  ctaHref="/contact"
  imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/man-6342665_1920.jpg?alt=media&token=5b567ed3-c960-4d16-beae-ab5161a05332"
  imageAlt="man fishing"
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