'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-forest pt-24 px-6 md:px-16 pb-12 mt-[-80px] rounded-t-[5rem] shadow-inner text-[#f6f4f0]">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-20 md:flex-row md:justify-between md:gap-x-24">

       
        <div className="space-y-4 md:w-1/4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#b1876e] flex items-center justify-center text-white text-xl font-bold shadow-md">
              ✿
            </div>
            <h2 className="font-serif text-2xl font-semibold">Sage Oak Therapy</h2>
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
        <div className="flex flex-col gap-y-16 md:flex-row md:gap-x-24 md:w-3/4">
      
          <div>
            <h3 className="font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About us</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

        
          <div className="flex flex-col gap-y-16 md:flex-row md:gap-x-16">
            <div>
              <h3 className="font-semibold mb-4">SPECIALTIES</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/career-counseling" className="hover:underline">Career counseling for professionals</Link></li>
                <li><Link href="/interracial-couples" className="hover:underline">Interracial couples therapy</Link></li>
                <li><Link href="/trauma" className="hover:underline">Trauma Therapy</Link></li>
                <li><Link href="/anxiety" className="hover:underline">Anxiety Therapy</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-sm">
                <li><Link href="/high-functioning-depression" className="hover:underline">High-Functioning Depression Therapy</Link></li>
                <li><Link href="/kids-teens" className="hover:underline">Therapy for Kids and Teens</Link></li>
                <li><Link href="/athletes" className="hover:underline">Therapy for Athletes</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-16 border-t border-[#e0dad3]/30 pt-6 text-xs text-center text-[#f6f4f0]/80 leading-relaxed max-w-5xl mx-auto">
        <p className="mb-2 italic text-sm">
          Healing happens in safe, supportive spaces. W&apos;’re honored to walk alongside you.
        </p>
        <p>
          © Sage Oak Therapy 2025 &nbsp; | &nbsp;
          <Link href="/privacy" className="underline">Privacy Policy</Link> &nbsp; | &nbsp;
          <Link href="/terms" className="underline">Terms & Conditions</Link>
        </p>
      </div>
    </footer>
  );
}
