'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const sections = ['hero', 'experience', 'projects', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/#hero', id: 'hero' },
    { name: 'Experience', href: '/#experience', id: 'experience' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/#hero" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="w-16 h-16 rounded-full border border-yellow-400 glow-pulse2"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-16 items-center">
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <div key={link.name} className="relative">
                <button
                  onClick={() => {
                    if (pathname === '/') {
                      document.getElementById(link.id)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    } else {
                      window.location.href = `/#${link.id}`;
                    }
                  }}
                  className={`font-medium transition-all duration-300 ${isActive
                    ? 'text-blue-300 drop-shadow-[0_0_8px_rgba(0,170,255,0.9)]'
                    : 'text-blue-400 hover:text-blue-300'
                    }`}
                >
                  {link.name}
                </button>


                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'
                    }`}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-blue-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-gray-800 flex flex-col items-center gap-6 py-6">
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.name}
                onClick={() => {
                  setMenuOpen(false);

                  if (pathname === '/') {
                    document.getElementById(link.id)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  } else {
                    window.location.href = `/#${link.id}`;
                  }
                }}
                className={`text-lg font-medium transition-all ${isActive ? 'text-blue-300' : 'text-blue-400'
                  }`}
              >
                {link.name}
              </button>

            );
          })}
        </div>
      )}
    </nav>
  );
}
