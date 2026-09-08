'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#Pertaining' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certification', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-roboto ${
        isSticky
          ? 'bg-green-700 py-3 shadow-lg'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 flex items-center justify-between">
        <div className="text-3xl font-bold font-ubuntu text-white">
          <a href="#">
            ABINESH<span className={`transition-colors duration-300 ${isSticky ? 'text-white' : 'text-accent'}`}> ELANGOVAN</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white text-lg font-medium transition-colors duration-300 hover:text-accent"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden text-white cursor-pointer z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 left-0 h-screen w-full bg-black text-center pt-24 transition-all duration-300 md:hidden ${
            isMenuOpen ? 'left-0' : '-left-full'
          }`}
        >
          <ul className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-2xl font-medium hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
