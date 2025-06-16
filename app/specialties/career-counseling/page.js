import CareerCounselingSection from '@/components/CareerCounselingSection';
import CareerParallax from '@/components/CareerParallax';
import CTADisplay from '@/components/CTADisplay';
import PageHeading from '@/components/PageHeading';
import TwoColLayout from '@/components/TwoColLayout';
import Link from 'next/link';

export default function Specialties() {
  return (
    <>
      <PageHeading
        title="Career Counseling in Los Angeles"
        description=""
        bgColor="bg-bashbright"
        tubeColors={['#b1876e', '#7a5e42']}
      />
<CareerCounselingSection/>
<TwoColLayout
  title="Find Your Career Purpose"
  paragraph={`In career counseling, professionals get to explore their relationships with their careers. There are many reasons why someone might feel disconnected or unfulfilled in their job — whether it's burnout, a lack of purpose, or simply following a path they never actively chose.

Through career counseling in Los Angeles, you’ll begin to reconnect with your values and examine what truly matters to you in a workplace. We’ll explore your strengths, identify patterns, and highlight the skills and experiences that energize you. Whether you're early in your career, going through a professional transition, or feeling stuck in a role that no longer fits, this is a space to reflect deeply and realign.

Together, we’ll work toward helping you feel more confident in your professional identity. You’ll leave with tools and insights to pursue opportunities that not only support your financial well-being, but also offer fulfillment, creativity, and growth. You deserve to feel empowered — not just at work, but in the life you're building through your work.`}

  ctaLabel="Start Career Counseling"
  ctaHref="/contact"
  imageSrc="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_guy_lost_in_.jpeg?alt=media&token=7a665f7d-8506-4146-a827-33b712dee592"
  imageAlt="A man lost in his career life"
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
<CareerParallax/>

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