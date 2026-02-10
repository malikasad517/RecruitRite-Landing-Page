"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate CTA content
      gsap.fromTo(
        ".cta-content",
        {
          y: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".cta-content",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-purple-50/30 to-white py-16 md:py-20 lg:py-24 mt-16 md:mt-24 lg:mt-32"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="cta-content flex flex-col items-center justify-center gap-6 md:gap-8 text-center">
          {/* Heading */}
          <h2 className="text-[#1C1C1C] font-beVietnam text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-semibold leading-tight max-w-4xl">
            Discover how RecruitRite transforms hiring outcomes
          </h2>

          {/* Description */}
          <p className="text-[#666] font-schibstedGrotesk text-base md:text-lg leading-relaxed max-w-3xl px-4">
            RecruitRite helps teams hire faster, reduce bias, and make confident decisions — powered by AI interviews, matching, and real-time candidate insights, without disrupting your existing systems.
          </p>

          {/* CTA Button */}
          <button className="bg-[#0A0B3A] text-white px-10 md:px-12 py-3.5 md:py-4 rounded-lg font-schibstedGrotesk text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-xl relative overflow-hidden group mt-2">
            {/* Shine Effect */}
            <span className="absolute inset-0 w-full h-full">
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] translate-x-[-200%] group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
            </span>
            <span className="relative z-10">Start your free trial</span>
          </button>
        </div>
      </div>
    </div>
  );
}