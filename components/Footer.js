'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const specialties = [
  {
    title: 'Anxiety Support',
    description:
      'Tools and support to manage anxiety, build resilience, and find emotional balance.',
    link: '/specialties/anxiety-support',
  },
  {
    title: 'Career Counseling',
    description:
      'Support to align your work with personal values and pursue meaningful goals with clarity.',
    link: '/specialties/career-counseling',
  },
  {
    title: 'Couples Therapy',
    description:
      'Strengthen communication, navigate challenges, and deepen connection in your relationship.',
    link: '/specialties/couples-therapy',
  },
  
  {
    title: 'Life Transitions',
    description:
      'Guidance through major life changes like relocation, loss, or new beginnings.',
    link: '/specialties/life-transitions',
  },
  {
    title: 'Self-Esteem',
    description:
      'Develop a healthier relationship with yourself and build lasting self-confidence.',
    link: '/specialties/self-esteem',
  },
  {
    title: 'Family Therapy',
    description:
      'Improve dynamics, foster understanding, and heal relationships across generations.',
    link: '/specialties/family-therapy',
  },
  {
    title: 'Identity Exploration',
    description:
      'A supportive space to understand and affirm your sense of self and lived experience.',
    link: '/specialties/identity-exploration',
  },
  {
    title: 'Grief Counseling',
    description:
      'Compassionate support for navigating loss, honoring memory, and finding hope again.',
    link: '/specialties/grief-counseling',
  },
];



export default function Footer() {
const pathname = usePathname();
const dividerColor =
  pathname === '/about' || pathname === '/blog' ? 'bg-bashbright' : 'bg-[#b1876e]';



  return (
    <>
       <div className={`h-20 ${dividerColor}`}></div>

      <footer className="relative bg-forest pt-24 px-6 md:px-16 pb-12 mt-[-80px] rounded-t-[5rem] shadow-inner text-[#f6f4f0]">
        <div className="max-w-7xl mx-auto flex flex-col gap-y-20 md:flex-row md:justify-center md:space-x-24">
          
          {/* Logo and Address */}
          <div className="space-y-4">
            <div className="w-44 h-auto relative">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/sage%20WHITE.png?alt=media&token=c869ebce-c9d8-4a88-ae01-4dd9bd51041a"
                alt="Sage Oak Therapy Logo"
                width={1500}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <p>
              1600 Amphitheatre Parkway<br />
              Mountain View, CA 94043
            </p>
            <p>
              <strong>p:</strong> (555) 123-4567
            </p>
          </div>

          {/* Navigation Sections */}
          <div className="flex flex-col gap-y-16 md:flex-row md:gap-x-24">

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">QUICK LINKS</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About us</Link></li>
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>

            {/* Specialties */}
            <div>
              <h3 className="font-semibold mb-4">SPECIALTIES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-sm">
                {specialties.map(({ title, link }) => (
                  <Link key={title} href={link} className="block hover:underline">
                    {title}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-[#e0dad3]/30 pt-6 text-xs text-center text-[#f6f4f0]/80 leading-relaxed max-w-5xl mx-auto">
          <p className="mb-2 italic text-sm">
            Healing happens in safe, supportive spaces. We&apos;re honored to walk alongside you.
          </p>
          <p>
            © Sage Oak Therapy 2025 &nbsp; | &nbsp;
            <Link href="/privacy" className="underline">Privacy Policy</Link> &nbsp; | &nbsp;
            <Link href="/terms" className="underline">Terms & Conditions</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
