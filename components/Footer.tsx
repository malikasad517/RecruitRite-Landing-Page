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
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="w-full px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-6 max-w-[1400px] mx-auto">
          {/* Left Side - Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center md:justify-start flex-shrink-0">
            <Link 
              href="#how-it-works"
              onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
              className="text-xs sm:text-sm font-bold text-[#1C1C1C] hover:text-[#0A0B3A] transition-all duration-300 whitespace-nowrap relative group"
            >
              How it Works?
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0A0B3A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#why-recruitrite"
              onClick={(e) => handleSmoothScroll(e, '#why-recruitrite')}
              className="text-xs sm:text-sm font-bold text-[#1C1C1C] hover:text-[#0A0B3A] transition-all duration-300 whitespace-nowrap relative group"
            >
              Why RecruitRite?
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0A0B3A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#use-cases"
              onClick={(e) => handleSmoothScroll(e, '#use-cases')}
              className="text-xs sm:text-sm font-bold text-[#1C1C1C] hover:text-[#0A0B3A] transition-all duration-300 whitespace-nowrap relative group"
            >
              Use Cases
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0A0B3A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#pricing"
              onClick={(e) => handleSmoothScroll(e, '#pricing')}
              className="text-xs sm:text-sm font-bold text-[#1C1C1C] hover:text-[#0A0B3A] transition-all duration-300 whitespace-nowrap relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0A0B3A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#api"
              onClick={(e) => handleSmoothScroll(e, '#api')}
              className="text-xs sm:text-sm font-bold text-[#1C1C1C] hover:text-[#0A0B3A] transition-all duration-300 whitespace-nowrap relative group"
            >
              API
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0A0B3A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Center - Empty Space */}
          <div className="flex-grow hidden md:block"></div>

          {/* Right Side - Copyright and Social Media Icons */}
          <div className="flex flex-col md:flex-row items-center gap-6 flex-shrink-0">
            {/* Copyright Text */}
            <div className="text-xs sm:text-sm font-bold text-[#1C1C1C] whitespace-nowrap order-2 md:order-1">
              @All rights reserved to RecruitRite
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6 order-1 md:order-2 flex-shrink-0">
              {/* LinkedIn Icon */}
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:rotate-3"
                aria-label="LinkedIn"
              >
                <Image 
                  src="/Linkedinsvg.png" 
                  alt="LinkedIn" 
                  width={24} 
                  height={24}
                  className="w-6 h-6 transition-all duration-300"
                  style={{ width: '24px', height: '24px' }}
                />
              </Link>
              
              {/* Instagram Icon */}
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:-rotate-3"
                aria-label="Instagram"
              >
                <Image 
                  src="/igsvg.png" 
                  alt="Instagram" 
                  width={24} 
                  height={24}
                  className="w-6 h-6 transition-all duration-300"
                  style={{ width: '24px', height: '24px' }}
                />
              </Link>
              
              {/* WhatsApp Icon */}
              <Link 
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:rotate-3"
                aria-label="WhatsApp"
              >
                <Image 
                  src="/wpsvg.png" 
                  alt="WhatsApp" 
                  width={24} 
                  height={24}
                  className="w-6 h-6 transition-all duration-300"
                  style={{ width: '24px', height: '24px' }}
                />
              </Link>
              
              {/* Facebook Icon */}
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:-rotate-3"
                aria-label="Facebook"
              >
                <Image 
                  src="/fbsvg.png" 
                  alt="Facebook" 
                  width={24} 
                  height={24}
                  className="w-6 h-6 transition-all duration-300"
                  style={{ width: '24px', height: '24px' }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;