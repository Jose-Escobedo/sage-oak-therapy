'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <header className="fixed top-0 left-0 w-full z-50 bg-bashbright shadow-md px-4 md:px-8 py-6 md:py-8 min-h-[96px] font-sans">
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between h-full min-h-[96px]">
        {/* Left nav - desktop */}
        <div className="hidden md:flex space-x-6 text-lg text-forest font-sans font-medium flex-shrink-0 max-w-[220px]">
          <Link href="/specialties" className="hover-text-oak transition-colors whitespace-nowrap">
            Specialties
          </Link>
          <Link href="/about" className="hover-text-oak transition-colors whitespace-nowrap">
            About Us
          </Link>
          <Link href="/blog" className="hover-text-oak transition-colors whitespace-nowrap">
            Blog
          </Link>
        </div>

        {/* Center logo */}
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

        {/* Right nav - desktop */}
        <div className="hidden md:flex font-sans text-lg text-forest font-medium justify-end flex-shrink-0 max-w-[220px]">
          <Link href="/contact" className="hover-text-oak transition-colors whitespace-nowrap">
            Contact Us
          </Link>
        </div>

        {/* Hamburger - mobile */}
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

      {isOpen && (
  <div className="absolute top-full left-0 w-full bg-[#6B4F3B]/90 text-white flex flex-col items-center space-y-6 py-6 
                     border-t border-gray-500/30 shadow-xl backdrop-blur-sm 
                     transition-all duration-300 ease-in-out animate-fade-slide lg:hidden">
    <Link href="/specialties" className="block hover:text-oak" onClick={() => setIsOpen(false)}>
      Specialties
    </Link>
    <Link href="/about" className="block hover:text-oak" onClick={() => setIsOpen(false)}>
      About Us
    </Link>
    <Link href="/blog" className="block hover:text-oak" onClick={() => setIsOpen(false)}>
      Blog
    </Link>
    <Link href="/contact" className="block hover:text-oak" onClick={() => setIsOpen(false)}>
      Contact Us
    </Link>
  </div>
)}

    </header>
  );
}
