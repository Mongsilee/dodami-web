"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function GlobalHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-[#5BA4E6] flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 text-[#FF7B7B] transition-transform group-hover:rotate-12" />
          도담이
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className={`transition-colors hover:text-[#5BA4E6] ${pathname === '/' ? 'text-[#5BA4E6] font-bold' : 'text-slate-600'}`}>
            서비스 소개
          </Link>
          <Link href="/team" className={`transition-colors hover:text-[#5BA4E6] ${pathname === '/team' ? 'text-[#5BA4E6] font-bold' : 'text-slate-600'}`}>
            팀 소개
          </Link>
          <Link href="/magazine" className={`transition-colors hover:text-[#5BA4E6] ${pathname === '/magazine' ? 'text-[#5BA4E6] font-bold' : 'text-slate-600'}`}>
            도담 매거진
          </Link>
        </nav>

        <Link 
          href="/contact"
          className="rounded-full border-2 border-[#FF7B7B] text-[#FF7B7B] hover:bg-[#FF7B7B] hover:text-white px-6 py-2.5 font-bold transition-all duration-300 shadow-sm active:scale-95"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
