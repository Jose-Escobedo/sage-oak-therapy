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
<TwoColLayout
  title="How can career counseling help?"
  paragraph="Work-related stress can breed low self-esteem and lack of motivation. Now you are avoiding difficult tasks, new situations, and even conversations with coworkers because it’s too much work. Or maybe you feel like they just won’t get it.  

Here, you finally get the space to just show up exactly as you are. In therapy, you get to just be. With career counseling therapy, you can also learn how to get back up and excel.

Career counseling in Los Angeles can help alleviate the emotional labor that your job brings. You can learn how to have boundaries, communicate assertively, or even just release some of the tension you’re carrying through relaxation. Beyond that, you get the opportunity to understand yourself better so you can give yourself better."
  ctaLabel="Get Started"
  ctaHref="/contact"
  imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_close_up_of_.jpeg?alt=media&token=84d618c2-8ccc-4c74-b189-cf33eb29de66"
  imageAlt="woman holding binders"
  imageLeft={true}
  bgColor="bg-[#fefdfb]"
  tubeColor="bg-forest"
  titleColor="text-forest"
  paragraphColor="text-[#444]"
  buttonColor="bg-oak"
  buttonHoverColor="hover:bg-forest"
  buttonHoverTextColor="hover:text-white"
  showTube={false}
/>
<CouplesParallax/>

<TwoColLayout
  title="Our Approach"
  paragraph="Feeling stuck and stressed from work? It can feel so overwhelming that you end up avoiding work altogether. As a therapist who specializes in career counseling in Los Angeles, I can help you figure out an action-based plan so that you can manage your job with a lot more balance. In therapy with me, you will not only have someone to hold you accountable for your actions but also guide you to understand what is potentially holding you back. As your therapist, I will guide your thoughts through your earliest memories about ‘what you wanted to be when you grew up,’  your very first job, explore your relationship with money, and so much more. I lead with curiosity, and this same curiosity will allow me to get to know you better and understand you deeper. As you teach me about your life, I can adjust the skills based on your needs. "
  ctaLabel="Work With Us"
  ctaHref="/contact"
  imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/woman-7350740.jpg?alt=media&token=936e4a3d-2d36-49d1-95ec-4a73c79f2f47"
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