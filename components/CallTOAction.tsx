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
      gsap.fromTo(
        ".cta-content",
        { y: 50, opacity: 0 },
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
        {/* Wrapper — relative so watermark is positioned inside it */}
        <div className="relative flex flex-col items-center justify-center">

          {/* ── Watermark ──
               HOW TO ADJUST POSITION:
               • Move DOWN → increase the `top` value  e.g. top-[60%], top-[70%]
               • Move UP   → decrease the `top` value  e.g. top-[30%], top-[20%]
               • Current   → top-[55%] sits just below the button

               HOW TO ADJUST SIZE:
               • Bigger → increase text-[Xpx]  e.g. xl:text-[280px]
               • Smaller → decrease text-[Xpx]  e.g. xl:text-[180px]

               HOW TO ADJUST SVG ICON SIZE:
               • Bigger → increase the w/h values on the icon div
               • Smaller → decrease the w/h values on the icon div

               HOW TO ADJUST SVG VERTICAL POSITION (superscript height):
               • Move down (less superscript) → increase mt-[Xpx] values
               • Move up (more superscript)   → decrease mt-[Xpx] values
          ── */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2
                       top-[55%] opacity-[0.06]
                       flex items-start whitespace-nowrap"
          >
            {/* Watermark text */}
            <span
              className="text-[#1C1C1C] font-beVietnam font-bold leading-none
                         text-[100px] sm:text-[130px] md:text-[160px] lg:text-[200px] xl:text-[240px]"
            >
              RecruitRite
            </span>

            {/* SVG diamond — superscript position, hugging top-right of last letter like the logo
                HOW TO ADJUST SVG SIZE:
                • Mobile (default) → change w-[Xpx] h-[Xpx]        (no prefix)
                • Small screens    → change sm:w-[Xpx] sm:h-[Xpx]
                • Medium screens   → change md:w-[Xpx] md:h-[Xpx]
                • Desktop (lg)     → change lg:w-[Xpx] lg:h-[Xpx]
                • Large desktop    → change xl:w-[Xpx] xl:h-[Xpx]

                HOW TO ADJUST SVG VERTICAL POSITION:
                • Move UP (more superscript) → decrease mt values  e.g. mt-[4px]
                • Move DOWN (less superscript) → increase mt values e.g. mt-[30px]
            */}
            <div
              className="relative flex-shrink-0
                         w-[48px] h-[48px]
                         sm:w-[64px] sm:h-[64px]
                         md:w-[82px] md:h-[82px]
                         lg:w-[106px] lg:h-[106px]
                         xl:w-[128px] xl:h-[128px]
                         mt-[6px] sm:mt-[8px] md:mt-[10px] lg:mt-[14px] xl:mt-[16px]"
            >
              <svg
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/2 h-1/2 absolute left-0 top-0"
              >
                <path d="M37.9367 0V38.0003H0L37.9367 0Z" fill="#9E56FF" />
              </svg>
              <svg
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/2 h-1/2 absolute right-0 bottom-0"
              >
                <path d="M0 38.0004V0H37.9317L0 38.0004Z" fill="#5B00D6" />
              </svg>
            </div>
          </div>

          {/* ── Foreground CTA content ── */}
          <div className="cta-content relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 text-center">
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
    </div>
  );
}