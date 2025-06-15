export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/images/michael-emory.jpg"
          alt="Michaela Emory, LMFT"
          className="rounded-xl shadow-md object-cover w-full h-auto"
        />
        <div>
          <h2 className="text-3xl font-serif font-semibold mb-4">
            Meet Michaela Emory, LMFT
          </h2>
          <p className="text-base leading-relaxed">
            With years of experience supporting clients through anxiety, relationship challenges, trauma, and life transitions, Michael brings warmth, presence, and practical tools to help you thrive. His calm, grounded approach helps create lasting change in a safe and collaborative space.
          </p>
          <a
            href="/about"
            className="inline-block mt-6 text-forest underline hover:text-[#243328] transition"
          >
            Learn more about Michaela
          </a>
        </div>
      </div>
    </section>
  );
}
