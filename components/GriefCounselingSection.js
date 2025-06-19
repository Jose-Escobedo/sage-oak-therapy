'use client';

export default function GriefCounselingSection() {
  return (
    <section className="bg-greenbash rounded-t-[5rem] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-start text-left space-y-6">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest">
          What is grief counseling?
        </h2>
        <p className="text-base md:text-lg text-forest-dark leading-relaxed">
          Grief counseling provides support through the difficult process of loss. Whether you&apos;re mourning the death of a loved one, 
          a major life change, or any form of loss, grief can feel overwhelming and isolating.
        </p>
        <p className="text-base md:text-lg text-forest-dark leading-relaxed">
          Therapy offers a safe and compassionate space to explore your feelings, understand the stages of grief, and develop healthy coping 
          strategies. It&apos;s about honoring your unique journey and moving toward healing at your own pace.
        </p>
        <p className="text-base md:text-lg text-forest-dark leading-relaxed">
          Together, we&apos;ll work to help you find meaning and hope beyond your loss, while respecting the time and space you need to heal.
        </p>
      </div>
    </section>
  );
}
