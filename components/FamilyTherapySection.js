'use client';

export default function FamilyTherapySection() {
  return (
    <section className="bg-greenbash rounded-t-[5rem] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-start text-left space-y-6">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest">
          What is family therapy?
        </h2>
        <p className="text-base md:text-lg text-forest-dark leading-relaxed">
          Families are complex systems where each member plays a role. When one part of that system feels off,
          it can affect everyone. Family therapy offers a space to untangle these dynamics and build stronger,
          more compassionate relationships.
        </p>
        <p className="text-base md:text-lg text-forest-dark leading-relaxed">
          Whether you&apos;re navigating generational conflict, adjusting to divorce or blending families,
          therapy helps clarify communication and promote mutual understanding.
        </p>
        <p className="text-base md:text-lg text-forest-dark leading-relaxed">
          My role is to guide your family toward deeper connection, emotional safety, and resilience—
          no matter what you&apos;re facing.
        </p>
      </div>
    </section>
  );
}
