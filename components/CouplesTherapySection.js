'use client';

export default function CouplesTherapySection() {
  return (
    <section className="bg-greenbash rounded-t-[5rem] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-start text-left space-y-6">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest">
          What is couples therapy?
        </h2>
        <p className="text-base md:text-lg text-forest-dark leading-relaxed">
          Couples therapy is a space for partners to strengthen their relationship, work through conflict,
          and improve communication. Many couples feel stuck, disconnected, or unsure of how to move forward
          after repeated misunderstandings.
        </p>
        <p className="text-base md:text-lg text-forest-dark leading-relaxed">
          In therapy, we look at the patterns that keep you feeling distant or unheard. We slow things down
          to uncover what’s really being felt beneath the surface—often it’s not about the argument,
          but about the need for closeness, safety, or respect.
        </p>
        <p className="text-base md:text-lg text-forest-dark leading-relaxed">
          My goal is to help you and your partner rebuild trust, learn how to express yourselves honestly,
          and feel more secure in your connection.
        </p>
      </div>
    </section>
  );
}
