'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);

  const specialties = [
  { label: 'Anxiety Support', href: '/specialties/anxiety-support' },
  { label: 'Career Counseling', href: '/specialties/career-counseling' },
  { label: 'Couples Therapy', href: '/specialties/couples-therapy' },
  { label: 'Life Transitions', href: '/specialties/life-transitions' },
  { label: 'Self-Esteem', href: '/specialties/self-esteem' },
  { label: 'Family Therapy', href: '/specialties/family-therapy' },
  { label: 'Identity Exploration', href: '/specialties/identity-exploration' },
  { label: 'Grief Counseling', href: '/specialties/grief-counseling' },
];


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bashbright shadow-md px-4 md:px-8 py-6 md:py-8 min-h-[96px] font-sans">
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between h-full min-h-[96px]">
        {/* Left nav - desktop */}
        <div className="hidden md:flex space-x-6 text-lg text-forest font-sans font-medium flex-shrink-0 max-w-[220px] items-center">
<div className="relative group bg-bashbright">
 
  <div className="flex items-center gap-1 hover-text-oak transition-colors whitespace-nowrap cursor-pointer">
    <Link href="/specialties" className="hover-text-oak transition-colors whitespace-nowrap">
            Specialties
    </Link>
    <ChevronDown size={18} className="mt-[1px]" />
  </div>


  <div className="absolute left-0 top-full mt-2 bg-oak shadow-lg rounded-md py-2 w-56 z-20 
  opacity-0 scale-95 translate-y-2 invisible 
  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible 
  transition-all duration-300 ease-out origin-top">
    {specialties.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="block px-4 py-2 text-white hover-text-sage transition"
      >
        {item.label}
      </Link>
    ))}
  </div>
</div>



          <Link href="/about" className="hover-text-oak transition-colors whitespace-nowrap">
            About Us
          </Link>
          <Link href="/blog" className="hover-text-oak transition-colors whitespace-nowrap">
            Blog
          </Link>
        </div>

      
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-shrink-0">
          <Link href="/" className="inline-block">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/sage.png?alt=media&token=d1727896-6126-45ba-9df7-25dffe93820c"
              alt="Sage Oak Therapy Logo"
              width={150}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>

   
        <div className="hidden md:flex font-sans text-lg text-forest font-medium justify-end flex-shrink-0 max-w-[220px]">
          <Link
            href="/contact"
            className="bg-forest hover-bg-oak text-white px-4 py-2 rounded-full shadow hover:bg-oak transition-all duration-200 whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>

  
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-forest"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#6B4F3B]/90 text-white flex flex-col items-center space-y-6 py-6 border-t border-gray-500/30 shadow-xl backdrop-blur-sm transition-all duration-300 ease-in-out animate-fade-slide lg:hidden">
    
          <div className="w-full flex-col flex items-center">
            <button
              onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
              className="flex items-center justify-center gap-1 w-full hover:text-oak text-lg"
            >
              <Link href="/specialties" className="hover-text-oak transition-colors whitespace-nowrap">
            Specialties
    </Link>
              <ChevronDown size={18} />
            </button>
            {specialtiesOpen && (
             <div
  className={`overflow-hidden transition-all duration-300 ease-out transform origin-top ${
    specialtiesOpen ? 'max-h-[500px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95 pointer-events-none'
  } mt-2 space-y-2 p-2`}
>

                {specialties.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-white hover:text-oak"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-oak text-lg" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/blog" className="hover:text-oak text-lg" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link
  href="/contact"
  onClick={() => setIsOpen(false)}
  className="bg-forest hover:bg-oak text-white px-4 py-2 rounded-full shadow transition-all duration-200"
>
  Contact Us
</Link>

        </div>
      )}
    </header>
  );
}
