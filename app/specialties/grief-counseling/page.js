import GriefCounselingSection from '@/components/GriefCounselingSection';
import GriefParallax from '@/components/GriefParallax';
import CTADisplay from '@/components/CTADisplay';
import PageHeading from '@/components/PageHeading';
import TwoColLayout from '@/components/TwoColLayout';
import Link from 'next/link';

export default function GriefCounseling() {
  return (
    <>
      <PageHeading
        title="Grief Counseling in Los Angeles"
        description=""
        bgColor="bg-bashbright"
        tubeColors={['#b1876e', '#7a5e42']}
      />

      <GriefCounselingSection />

      <TwoColLayout
        title="What is grief counseling?"
        paragraph={
          <div className="max-w-5xl mx-auto flex flex-col items-start text-left space-y-6">
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              Grief counseling provides a compassionate space to support you through loss and mourning. Whether you&apos;re coping with
              the death of a loved one or another significant life loss, it&apos;s normal to feel overwhelmed, sad, or disconnected.
            </p>
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              In therapy, you&apos;ll have a safe environment to express your feelings, understand your unique grief journey, and develop
              healthy ways to cope.
            </p>
            <p className="text-base md:text-lg text-bashbright leading-relaxed">
              Together, we&apos;ll work to honor your emotions and find hope and meaning beyond your loss at your own pace.
            </p>
          </div>
        }
        ctaLabel="Start Grief Counseling"
        ctaHref="/contact"
        imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/woman-7483483_1920.jpg?alt=media&token=37b4be2e-173d-4a3f-b23b-9928f63f3afc"
        imageAlt="woman griefing"
        imageLeft={false}
        bgColor="bg-forest"
        tubeColor="bg-bashbright"
      />

      <GriefParallax />

      <TwoColLayout
        title="What can we expect from grief counseling?"
        paragraph="Sessions are 50 minutes each. Initial sessions focus on exploring your experience of loss and understanding your unique process. We then work together on coping strategies, emotional expression, and rebuilding your sense of hope and connection."
        ctaLabel="Work With Us"
        ctaHref="/contact"
        imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-shvetsa-4557876.jpg?alt=media&token=be61ef09-4d6a-4ed9-be4b-a7d2a106940a"
        imageAlt="Person receiving grief counseling"
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

      <CTADisplay />
    </>
  );
}
