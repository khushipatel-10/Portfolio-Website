'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // icons

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="#hero" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="w-16 h-16 rounded-full border border-yellow-400 glow-pulse2"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-16 items-center">
          {links.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-blue-400 font-medium transition-all duration-300 group-hover:text-blue-300 hover:drop-shadow-[0_0_8px_rgba(0,170,255,0.8)]"
              >
                {link.name}
              </a>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(0,170,255,0.8)]"></span>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-400 hover:text-blue-300 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-gray-800 flex flex-col items-center gap-6 py-6 animate-fade-in">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-blue-400 text-lg font-medium hover:text-blue-300 transition-all hover:drop-shadow-[0_0_8px_rgba(0,170,255,0.8)]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
