'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CertificateModal from './CertificateModal';

export default function CertificatesSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      title: 'Fortinet Certified Professional Network Security',
      image: '/images/f1.png',
    },
    {
      title: 'Networking basics',
      image: '/images/f2.png',
    },
    {
      title: 'Python Fundamentals',
      image: '/images/Python.png',
    },
    {
      title: 'SQL Certificate',
      image: '/images/SQL.png',
    },
  ];

  return (
    <section id="certificates" className="bg-black text-white py-16 text-center">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20">
        <h2 className="title-underline title-black" data-sub="achievements">
          My Certificates
        </h2>

        <div className="flex flex-wrap gap-6 justify-center mt-10">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setSelectedImage(cert.image)}
              className="bg-[#222222] p-3 rounded-lg text-center cursor-pointer transition-transform duration-300 hover:scale-105 w-[220px] flex flex-col items-center group"
            >
              <div className="relative w-full h-[140px] rounded-md overflow-hidden mb-3">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="200px"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-white">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>

      <CertificateModal
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
