"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sparkles, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function GlobalHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgb(0,0,0,0.04)] py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className="text-2xl font-extrabold tracking-tight text-[#5BA4E6] flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 text-[#FF7B7B] transition-transform group-hover:rotate-12" />
          도담이
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className={`transition-colors hover:text-[#5BA4E6] ${pathname === '/' ? 'text-[#5BA4E6] font-bold' : 'text-slate-600'}`}>
            도담이 소개
          </Link>
          <Link href="/team" className={`transition-colors hover:text-[#5BA4E6] ${pathname === '/team' ? 'text-[#5BA4E6] font-bold' : 'text-slate-600'}`}>
            팀 소개
          </Link>
          <Link href="/magazine" className={`transition-colors hover:text-[#5BA4E6] ${pathname === '/magazine' ? 'text-[#5BA4E6] font-bold' : 'text-slate-600'}`}>
            도담 매거진
          </Link>
        </nav>

        {/* Desktop Contact Us Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact"
            className="rounded-full border-2 border-[#FF7B7B] text-[#FF7B7B] hover:bg-[#FF7B7B] hover:text-white px-6 py-2.5 font-bold transition-all duration-300 shadow-sm active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 -mr-2 text-slate-600 hover:text-[#5BA4E6] transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl origin-top transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col py-6 px-8 gap-6 font-medium text-lg">
          <Link href="/" onClick={closeMenu} className={`transition-colors hover:text-[#5BA4E6] ${pathname === '/' ? 'text-[#5BA4E6] font-extrabold' : 'text-slate-700'}`}>
            도담이 소개
          </Link>
          <Link href="/team" onClick={closeMenu} className={`transition-colors hover:text-[#5BA4E6] ${pathname === '/team' ? 'text-[#5BA4E6] font-extrabold' : 'text-slate-700'}`}>
            팀 소개
          </Link>
          <Link href="/magazine" onClick={closeMenu} className={`transition-colors hover:text-[#5BA4E6] ${pathname === '/magazine' ? 'text-[#5BA4E6] font-extrabold' : 'text-slate-700'}`}>
            도담 매거진
          </Link>
          
          {/* Mobile Contact Us Button */}
          <Link 
            href="/contact"
            onClick={closeMenu}
            className="mt-4 rounded-full bg-gradient-to-r from-[#FF7B7B] to-[#ff9898] text-white px-6 py-3 font-bold transition-all duration-300 shadow-md text-center active:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
