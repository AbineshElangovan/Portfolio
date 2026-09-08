'use client';

import React from 'react';
import Typewriter from './Typewriter';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  const heroWords = ["Full Stack Developer", "Python developer", "web Developer", "Software Engineer"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-fixed bg-center text-white font-roboto pt-20"
      style={{ backgroundImage: "url('/images/portfolio.jpg')" }}
    >
      {/* Overlay to ensure high contrast */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-[1300px] w-full mx-auto px-6 md:px-20 py-12 flex flex-col justify-center">
        <div className="space-y-3">
          <div className="text-2xl md:text-3xl text-gray-200 font-normal">Hello, This is</div>
          <div className="text-5xl md:text-7xl font-bold tracking-tight text-white -ml-1">Abinesh</div>
          <div className="text-2xl md:text-4xl text-gray-100 font-medium">
            And I&apos;m a <Typewriter words={heroWords} />
          </div>

          <div className="pt-5">
            <a
              href="/resume.pdf"
              download
              className="inline-block text-xl text-white py-2 px-6 rounded-md border-2 border-accent transition-all duration-300 hover:bg-accent hover:text-black font-medium"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex items-center space-x-5">
          <a
            href="https://github.com/AbineshElangovan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-4 border-accent text-white rounded-full text-2xl hover:bg-accent hover:text-black transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abinesh-elangovan-8535a7235/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-4 border-accent text-white rounded-full text-2xl hover:bg-accent hover:text-black transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:e.abineshabi99@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-4 border-accent text-white rounded-full text-2xl hover:bg-accent hover:text-black transition-all duration-300"
            aria-label="Send Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=7339121724"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-4 border-accent text-white rounded-full text-2xl hover:bg-accent hover:text-black transition-all duration-300"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}
