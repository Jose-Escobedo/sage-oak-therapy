'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

const reviews = [
  {
    name: 'Isabella Mendez',
    date: '3 months ago',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_woman_smili.jpeg?alt=media&token=cd8030e8-b258-4696-8502-42a0de922eab',
    text: `I am beyond grateful to have met Michaela. She is a friend and colleague who has consistently shown wisdom and empathy in her work. Sage Oak Therapy is lucky to have her.`,
  },
  {
    name: 'Joseph Tran',
    date: '5 months ago',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_man_smiling_%20(1).jpeg?alt=media&token=4035b7a0-66ed-4f8e-b9a7-15c7b3231fd9',
    text: `From the moment you meet Michaela, her insight, warmth, and professionalism are apparent. She is one of the most attentive and thoughtful therapists I’ve encountered.`,
  },
  {
    name: 'Emily Zhang',
    date: '7 months ago',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_woman_smilin%20(1).jpeg?alt=media&token=208ff132-fec7-4908-8c09-2d16122d70af',
    text: `Working with Michaela has been a transformative experience. Her guidance through tough moments in life made me feel supported and empowered. I cannot recommend Sage Oak Therapy enough.`,
  },
  {
    name: 'Lena Hoffman',
    date: '10 months ago',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/woman_smiling_soft_focus_depth.jpeg?alt=media&token=a0ef9c6a-aea9-4fe1-b740-d2c855cf9c14',
    text: `Michaela brings calm, wisdom, and comfort into every session. She deeply cares about her clients’ growth and ensures they feel seen and heard. Truly a gift to anyone seeking therapy.`,
  },
  {
    name: 'Ryan Johnson',
    date: '1 year ago',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_man_smiling_.jpeg?alt=media&token=1262a170-5a7a-4f22-a2cf-dac3ebdbfb19',
    text: `Michaela’s ability to hold space without judgment has been crucial to my healing. She brings knowledge, kindness, and a deep sense of care into every interaction.`,
  },
  {
    name: 'Amira Douglas',
    date: '1 year ago',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_woman_smilin.jpeg?alt=media&token=027a183f-044c-4efa-8797-d8a3ce8732c7',
    text: `I admire Michaela’s commitment to ongoing education and client care. As a fellow therapist, I trust Sage Oak Therapy as a safe and reliable space for deep healing.`,
  },
];

export default function KindWords() {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="bg-bashbright py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-serif font-bold mb-2 text-[#0A2540]">Kind Words</h2>
        <div className="flex items-center justify-center space-x-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <p className="text-[#0A2540] font-medium">5.0 · (11)</p>
        <p className="text-sm text-gray-600">Review us on Google</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => {
          const isExpanded = expanded[index];
          const preview = review.text.slice(0, 180);

          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A2540]">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-[#0A2540] text-sm">
                {isExpanded ? review.text : preview}
                {review.text.length > 180 && (
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="text-forest-dark font-semibold inline-flex items-center ml-1"
                  >
                    {isExpanded ? (
                      <>
                        Show less <ChevronUp size={16} className="ml-1" />
                      </>
                    ) : (
                      <>
                        Read more <ChevronDown size={16} className="ml-1" />
                      </>
                    )}
                  </button>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
