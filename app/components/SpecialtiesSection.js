export default function SpecialtiesSection() {
  const specialties = [
    "Anxiety & Stress",
    "Couples & Relationship Counseling",
    "Trauma & Healing",
    "Life Transitions",
    "Self-Esteem & Personal Growth",
    "Mindfulness & Emotional Regulation",
  ];

  return (
    <section className="py-20 px-6 bg-[#f0f3f1] text-center">
      <h2 className="text-3xl font-serif font-semibold mb-8">Areas of Focus</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-left">
        {specialties.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-lg">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
