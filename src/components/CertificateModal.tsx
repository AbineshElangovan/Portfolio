'use client';

import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface CertificateModalProps {
  imageSrc: string | null;
  onClose: () => void;
}

export default function CertificateModal({ imageSrc, onClose }: CertificateModalProps) {
  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-8 text-white hover:text-accent text-4xl font-bold cursor-pointer z-[1001]"
        aria-label="Close Preview"
      >
        <X size={36} />
      </button>

      <div
        className="relative max-w-4xl w-full max-h-[90vh] aspect-video flex items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt="Certificate Full View"
            fill
            className="object-contain rounded-md"
            sizes="(max-width: 1200px) 90vw, 1000px"
          />
        </div>
      </div>
    </div>
  );
}
