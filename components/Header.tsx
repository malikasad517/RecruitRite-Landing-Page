"use client";
import React, { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Set active link for visual feedback
    setActiveLink(targetId);
    
    // Create ripple effect at click position
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create ripple element
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.cssText = `
      position: absolute;
      width: 50px;
      height: 50px;
      background: radial-gradient(circle, rgba(91, 0, 214, 0.3) 0%, rgba(158, 86, 255, 0.1) 70%, transparent 100%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
      left: ${x}px;
      top: ${y}px;
      transform: translate(-50%, -50%) scale(0);
      animation: rippleExpand 0.6s ease-out forwards;
    `;
    
    link.style.position = 'relative';
    link.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
    
    // Scroll to section
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Reset active link after animation
    setTimeout(() => {
      setActiveLink(null);
    }, 300);
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#0A0B3A]/10">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center gap-1 relative group cursor-pointer">
              <span className="text-[#0A0B3A] font-semibold text-xl sm:text-2xl transition-all duration-300 group-hover:tracking-widest">
                RecruitRite
              </span>
              <div className="w-3 h-3 sm:w-4 sm:h-4 relative flex-shrink-0">
                <svg 
                  width="38" 
                  height="38" 
                  viewBox="0 0 38 38" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-1/2 h-1/2 absolute left-0 top-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path d="M37.9367 0V38.0003H0L37.9367 0Z" fill="#9E56FF"></path>
                </svg>
                <svg 
                  width="38" 
                  height="38" 
                  viewBox="0 0 38 38" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-1/2 h-1/2 absolute right-0 bottom-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
                >
                  <path d="M0 38.0004V0H37.9317L0 38.0004Z" fill="#5B00D6"></path>
                </svg>
              </div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            <a 
              href="#how-it-works" 
              onClick={(e) => handleLinkClick(e, '#how-it-works')}
              className={`text-[#1C1C1C] text-base font-medium transition-all duration-300 relative group py-2 px-3 overflow-visible ${activeLink === '#how-it-works' ? 'text-[#5B00D6] scale-105' : 'hover:text-[#5B00D6]'}`}
            >
              <span className="relative z-10">How it Works?</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#5B00D6]/0 via-[#5B00D6]/5 to-[#5B00D6]/0 transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9E56FF] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a 
              href="#why-recruitrite" 
              onClick={(e) => handleLinkClick(e, '#why-recruitrite')}
              className={`text-[#1C1C1C] text-base font-medium transition-all duration-300 relative group py-2 px-3 overflow-visible ${activeLink === '#why-recruitrite' ? 'text-[#5B00D6] scale-105' : 'hover:text-[#5B00D6]'}`}
            >
              <span className="relative z-10">Why RecruitRite?</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#5B00D6]/0 via-[#5B00D6]/5 to-[#5B00D6]/0 transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9E56FF] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a 
              href="#use-cases" 
              onClick={(e) => handleLinkClick(e, '#use-cases')}
              className={`text-[#1C1C1C] text-base font-medium transition-all duration-300 relative group py-2 px-3 overflow-visible ${activeLink === '#use-cases' ? 'text-[#5B00D6] scale-105' : 'hover:text-[#5B00D6]'}`}
            >
              <span className="relative z-10">Use Cases</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#5B00D6]/0 via-[#5B00D6]/5 to-[#5B00D6]/0 transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9E56FF] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleLinkClick(e, '#pricing')}
              className={`text-[#1C1C1C] text-base font-medium transition-all duration-300 relative group py-2 px-3 overflow-visible ${activeLink === '#pricing' ? 'text-[#5B00D6] scale-105' : 'hover:text-[#5B00D6]'}`}
            >
              <span className="relative z-10">Pricing</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#5B00D6]/0 via-[#5B00D6]/5 to-[#5B00D6]/0 transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9E56FF] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a 
              href="#api" 
              onClick={(e) => handleLinkClick(e, '#api')}
              className={`text-[#1C1C1C] text-base font-medium transition-all duration-300 relative group py-2 px-3 overflow-visible ${activeLink === '#api' ? 'text-[#5B00D6] scale-105' : 'hover:text-[#5B00D6]'}`}
            >
              <span className="relative z-10">API</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#5B00D6]/0 via-[#5B00D6]/5 to-[#5B00D6]/0 transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9E56FF] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-8 py-2 rounded-lg border border-[#0A0B3A] text-[#0A0B3A] text-base hover:bg-[#0A0B3A] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-[#0A0B3A]/20">
              Login
            </button>
            <button className="px-8 py-2 rounded-lg bg-[#0A0B3A] text-white text-base hover:bg-gradient-to-r hover:from-[#5B00D6] hover:to-[#9E56FF] transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-[#5B00D6]/30">
              Sign Up
            </button>
          </div>
          <button className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <span className={`w-6 h-0.5 bg-[#0A0B3A] transition-all duration-300 group-hover:bg-[#5B00D6] ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-[#0A0B3A] transition-all duration-300 group-hover:bg-[#5B00D6] ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-[#0A0B3A] transition-all duration-300 group-hover:bg-[#5B00D6] ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[500px] pb-6" : "max-h-0"}`}>
          <nav className="flex flex-col gap-4 pt-4">
            <a 
              href="#how-it-works" 
              onClick={(e) => handleLinkClick(e, '#how-it-works')}
              className="text-[#1C1C1C] text-lg font-medium transition-all duration-300 py-3 px-4 relative group overflow-visible hover:bg-[#5B00D6]/5 hover:pl-6 rounded-lg"
            >
              How it Works?
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#5B00D6] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
            <a 
              href="#why-recruitrite" 
              onClick={(e) => handleLinkClick(e, '#why-recruitrite')}
              className="text-[#1C1C1C] text-lg font-medium transition-all duration-300 py-3 px-4 relative group overflow-visible hover:bg-[#5B00D6]/5 hover:pl-6 rounded-lg"
            >
              Why RecruitRite?
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#5B00D6] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
            <a 
              href="#use-cases" 
              onClick={(e) => handleLinkClick(e, '#use-cases')}
              className="text-[#1C1C1C] text-lg font-medium transition-all duration-300 py-3 px-4 relative group overflow-visible hover:bg-[#5B00D6]/5 hover:pl-6 rounded-lg"
            >
              Use Cases
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#5B00D6] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleLinkClick(e, '#pricing')}
              className="text-[#1C1C1C] text-lg font-medium transition-all duration-300 py-3 px-4 relative group overflow-visible hover:bg-[#5B00D6]/5 hover:pl-6 rounded-lg"
            >
              Pricing
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#5B00D6] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
            <a 
              href="#api" 
              onClick={(e) => handleLinkClick(e, '#api')}
              className="text-[#1C1C1C] text-lg font-medium transition-all duration-300 py-3 px-4 relative group overflow-visible hover:bg-[#5B00D6]/5 hover:pl-6 rounded-lg"
            >
              API
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#5B00D6] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
            <div className="flex flex-col gap-3 mt-4">
              <button className="w-full px-8 py-3 rounded-lg border border-[#0A0B3A] text-[#0A0B3A] text-lg hover:bg-[#0A0B3A] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-[#0A0B3A]/20">
                Login
              </button>
              <button className="w-full px-8 py-3 rounded-lg bg-[#0A0B3A] text-white text-lg hover:bg-gradient-to-r hover:from-[#5B00D6] hover:to-[#9E56FF] transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-[#5B00D6]/30">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Global CSS for ripple animation */}
      <style jsx global>{`
        @keyframes rippleExpand {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          70% {
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
}