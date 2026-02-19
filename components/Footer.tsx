"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200 relative overflow-hidden min-h-[80px]">

      {/* ✅ Watermark "Recruit Rite" behind all content */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span
          style={{
            fontSize: 'clamp(4rem, 14vw, 10rem)',
            fontWeight: 900,
            color: '#0A0B3A',
            opacity: 0.08,
            whiteSpace: 'nowrap',
            letterSpacing: '0.15em',
            userSelect: 'none',
            lineHeight: 1,
          }}
        >
          Recruit Rite
        </span>
      </div>

      {/* Footer content — above watermark */}
      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-6 max-w-[1400px] mx-auto">

          {/* ✅ Left Side - Nav Links — font-normal (400) instead of font-bold */}
          <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center md:justify-start flex-shrink-0">
            {[
              { label: 'How it Works?', href: '#how-it-works' },
              { label: 'Why RecruitRite?', href: '#why-recruitrite' },
              { label: 'Use Cases', href: '#use-cases' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'API', href: '#api' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleSmoothScroll(e, href)}
                style={{ fontWeight: 400 }} // ✅ Regular 400 — not bold
                className="text-xs sm:text-sm text-[#1C1C1C] hover:text-[#0A0B3A] transition-all duration-300 whitespace-nowrap relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0A0B3A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Center spacer */}
          <div className="flex-grow hidden md:block"></div>

          {/* Right Side - Copyright + Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6 flex-shrink-0">

            {/* ✅ Copyright — font weight Regular (400) */}
            <div
              style={{ fontWeight: 400 }} // ✅ Regular 400 — not bold
              className="text-xs sm:text-sm text-[#1C1C1C] whitespace-nowrap order-2 md:order-1"
            >
              @All rights reserved to RecruitRite
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 order-1 md:order-2 flex-shrink-0">

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:rotate-3"
                aria-label="LinkedIn"
              >
                <Image src="/Linkedinsvg.png" alt="LinkedIn" width={24} height={24}
                  className="w-6 h-6" style={{ width: '24px', height: '24px' }} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:-rotate-3"
                aria-label="Instagram"
              >
                <Image src="/igsvg.png" alt="Instagram" width={24} height={24}
                  className="w-6 h-6" style={{ width: '24px', height: '24px' }} />
              </Link>

              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:rotate-3"
                aria-label="WhatsApp"
              >
                <Image src="/wpsvg.png" alt="WhatsApp" width={24} height={24}
                  className="w-6 h-6" style={{ width: '24px', height: '24px' }} />
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:-rotate-3"
                aria-label="Facebook"
              >
                <Image src="/fbsvg.png" alt="Facebook" width={24} height={24}
                  className="w-6 h-6" style={{ width: '24px', height: '24px' }} />
              </Link>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;