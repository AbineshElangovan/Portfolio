'use client';

import React from 'react';
import Image from 'next/image';
import Typewriter from './Typewriter';

export default function AboutSection() {
  const aboutWords = ["Full Stack Developer", "Python Developer", "Frontend Engineer", "Web Developer"];

  return (
    <section id="Pertaining" className="bg-black text-white py-16">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20">
        <h2 className="title-underline title-black" data-sub="who i am">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10">
          {/* Left Column Image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-[4/5] rounded-md overflow-hidden shadow-2xl border border-gray-800">
              <Image
                src="/images/IMG-20230809-WA0008.jpg"
                alt="ABINESH E"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="w-full md:w-3/5 space-y-4">
            <div className="text-2xl font-semibold text-[#b3b3b3]">
              This is Abinesh and I&apos;m a <Typewriter words={aboutWords} />
            </div>

            <p className="text-[#b3b3b3] text-justify leading-relaxed">
              I am a Full Stack Developer at YS Innovation, where I work on modern web applications using Next.js, TypeScript, Shopify, Prisma ORM, and PostgreSQL. I have hands-on experience in building and maintaining full-stack applications and working with APIs, databases, and e-commerce solutions.
            </p>

            <p className="text-[#b3b3b3] text-justify leading-relaxed">
              I also have knowledge of Python, SQL (Oracle), React.js, HTML, CSS, JavaScript, and Computer Networking. I am passionate about learning new technologies, solving real-world problems, and continuously improving my development skills. I am adaptable, a quick learner, and enjoy working on challenging projects in a dynamic development environment.
            </p>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-block text-xl text-white font-medium py-2 px-6 rounded-md border-2 border-accent transition-all duration-300 hover:bg-accent hover:text-black"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

