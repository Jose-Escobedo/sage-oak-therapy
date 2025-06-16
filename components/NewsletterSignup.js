'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="flex flex-col md:flex-row w-full overflow-hidden shadow-lg">
  
     <div className="md:w-3/5 bg-bash py-20 px-8 md:px-16 flex items-center justify-center">
  <div className="flex flex-col items-start max-w-md">
    <h2 className="text-3xl font-serif font-bold mb-4 text-[#0A2540]">
      Stay in the loop
    </h2>
    <p className="mb-6 text-[#0A2540]">
      Sign up for our newsletter to receive insights and tips for your mental health.
    </p>

    {submitted ? (
      <div className="text-green-700 font-semibold text-lg bg-green-100 p-4 rounded-md w-full">
        Thank you for signing up!
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 bg-white py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest-dark"
        />
        <button
          type="submit"
          className="cursor-pointer bg-forest-dark text-bashbright font-semibold py-3 rounded-lg hover:bg-oak transition"
        >
          Sign up
        </button>
      </form>
    )}

    <p className="text-sm mt-6 text-gray-600">We respect your privacy.</p>
  </div>
</div>


      {/* Right side with image */}
      <div className="md:w-2/5 relative min-h-[300px] md:min-h-full">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/IMG_4998.JPG?alt=media&token=c302e560-c146-4ecf-848c-d264de4cedf0"
          alt="Nature background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
