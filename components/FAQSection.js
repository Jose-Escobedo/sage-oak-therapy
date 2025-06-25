'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How long is one session and how often should I attend?',
    answer:
      'A 1:1 session takes between 45-50 minutes. We recommend seeing clients consistently, 1x/week in order for therapy to be effective. Schedule a consultation to learn more about what works best for you.',
  },
  {
    question: 'Do you take insurance?',
    answer:
      'We are not in network with any insurance panels. We do, however, work with most PPO insurance plans. We provide Superbills to clients upon request. Please give us a call if working with your PPO insurance is something you are interested in. We can work with you to get reimbursed for session rates as much as possible.',
  },
  {
    question: 'Is there a benefit or disadvantage to working with insurance?',
    answer:
      `Working with someone outside of your insurance plan allows you to choose your provider and find the right match. Insurance companies don't do a matching process. Also, insurance requires you to have a mental health diagnosis to prove medical necessity for coverage.`,
  },
  {
    question: 'What is my investment per session?',
    answer:
      'Sessions range between $150-$275 and are designed to help you overcome stress, receive professional support, and achieve relief.',
  },
  {
    question: 'Do you offer payment flexibility?',
    answer:
      'There are limited sliding scale spots for clients who need financial assistance. We also offer package discounts. Give us a call to learn more.',
  },
  {
    question: 'Do you provide a Good Faith Estimate?',
    answer:
      'Yes! You have the right to receive a “Good Faith Estimate” explaining how much your medical and mental health care will cost before you schedule a service. For questions or more information about your right to a Good Faith Estimate, visit www.cms.gov/nosurprises or call (800) 985-3059.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-bashbright py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-forest mb-10">
          Frequently Asked{' '}
          <span className="bg-gradient-to-r from-[#6B4F3B] to-[#A3886D] bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border border-forest/20 rounded-xl overflow-hidden bg-white">
                  <Disclosure.Button className="flex justify-between cursor-pointer items-center w-full px-4 py-3 text-left text-base md:text-lg font-medium text-forest bg-bash hover:bg-bash/90 transition">
                    <span>
                      <span className="mr-2 font-bold text-oak">{index + 1}.</span>
                      {faq.question}
                    </span>
                    <ChevronUp
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } w-5 h-5 text-oak transition-transform`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 py-4 text-sm md:text-base text-forest-dark bg-white border-t border-forest/10 leading-relaxed">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
