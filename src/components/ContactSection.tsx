'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:e.abineshabi99@gmail.com?subject=Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="bg-[#111111] text-white py-16">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 text-center">
        <h2 className="title-underline title-dark" data-sub="get in touch">
          Let&apos;s Talk
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-8 mt-10 text-left">
          {/* Contact Form */}
          <div className="w-full md:w-[48%] bg-[#222222] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-medium mb-5 text-white">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-[#b3b3b3] mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border-2 border-[#333333] rounded-md text-base text-[#efeded] bg-[#222222] focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[#b3b3b3] mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border-2 border-[#333333] rounded-md text-base text-[#efeded] bg-[#222222] focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#b3b3b3] mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 border-2 border-[#333333] rounded-md text-base text-[#efeded] bg-[#222222] focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-accent text-black text-lg font-bold rounded-md hover:bg-[#007acc] hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Google Map */}
          <div className="w-full md:w-[48%] bg-[#222222] p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-medium mb-5 text-white">Find Me</h3>
            <div className="w-full flex-1 min-h-[320px] rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3381194010223!2d78.0569!3d10.9590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07f2e85da619d9%3A0x8e0e849649d983d4!2sVelayuthampalayam%2C%20Karur%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1642313525563!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                title="Google Map Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
