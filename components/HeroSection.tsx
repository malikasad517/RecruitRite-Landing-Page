"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./Header";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
      gsap.from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#F3F3FF]"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(243,243,255,0) 0%, #E7E8FF 50%, rgba(243,243,255,0) 100%)",
          }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(224,225,255,0.8) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(224,225,255,0.8) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Floating purple dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: "#9333EA",
              opacity: 0.6,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <Header />
      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1800px] px-6 lg:px-[60px] pt-[140px] pb-0">
        {/* 3 COLUMN GRID (CENTER EMPTY) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] items-start gap-10 mb-8 lg:mb-0">
          {/* LEFT TEXT */}
          <div className="relative z-20 order-1 lg:order-none">
            <h1
              ref={titleRef}
              className="text-[#1C1C1C] text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[3rem] font-bold mb-4 lg:mb-6 whitespace-nowrap"
              style={{ lineHeight: "1.2" }}
            >
              AI Precision.
              <br />
              Human Connection.
            </h1>
            <button
              ref={ctaRef}
              className="hidden lg:inline-flex py-3 px-8 sm:px-12 rounded-lg bg-[#0B0F3C] hover:bg-[#5B00D6] transition-all shadow-lg z-30 relative"
              style={{ opacity: 1 }}
            >
              <span className="text-white font-semibold text-base sm:text-lg">
                Get Started
              </span>
            </button>
          </div>
          {/* CENTER EMPTY COLUMN */}
          <div className="hidden lg:block" />
          {/* RIGHT TEXT */}
          <div className="max-w-md lg:justify-self-end relative z-20 order-2 lg:order-none mb-6 lg:mb-0">
            <p
              ref={descRef}
              className="text-[#666] text-base sm:text-lg leading-relaxed"
            >
              Stop drowning in resumes. Let RecruitRite&apos;s proprietary model
              surface the 95% matches instantly, so you can focus on the
              interview, not the screening.
            </p>
          </div>
          {/* BUTTON - Mobile only */}
          <div className="lg:hidden order-3">
            <button
              className="inline-flex py-3 px-8 sm:px-12 rounded-lg bg-[#0B0F3C] hover:bg-[#5B00D6] transition-all shadow-lg z-30 relative"
              style={{ opacity: 1 }}
            >
              <span className="text-white font-semibold text-base sm:text-lg">
                Request a Demo
              </span>
            </button>
          </div>
        </div>
        {/* IMAGE — BROUGHT UP WITH NEGATIVE MARGIN */}
        <div className="mt-8 lg:-mt-48 xl:-mt-56 relative z-10">
          <img
            src="/Whisk.png"
            alt="AI Recruitment visualization"
            className="w-full block object-contain"
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(-5px) translateX(-10px);
          }
        }
      `}</style>
    </section>
  );
}