export default function HeroSection() {
  return (
    <section className="py-24 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
        Welcome to Sage Oak Therapy
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl">
        Compassionate therapy for individuals, couples, and families. Led by Michael Emory, Licensed Marriage and Family Therapist (#123456).
      </p>
      <a
        href="/contact"
        className="mt-8 inline-block bg-forest text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-[#243328] transition-all duration-200"
      >
        Book a Consultation
      </a>
    </section>
  );
}
