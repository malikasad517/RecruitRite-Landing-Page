"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./Header";
export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
  // Auto-resume video when scrolled back into view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#F3F3FF]"
    >
      {/* Background Grid Image from Figma */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/herobg.png')",
        }}
      />
      {/* Floating purple dots - REDUCED SPEED & OPACITY */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: "#9333EA",
              opacity: 0.25,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
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
            {/* Desktop CTA Button */}
            <a href="https://plus.recruitrite.ai/signup" target="_blank" rel="noopener noreferrer">
              <button
                ref={ctaRef}
                className="hidden lg:inline-flex py-3 px-8 sm:px-12 rounded-lg bg-[#0B0F3C] hover:bg-[#5B00D6] transition-all shadow-lg z-30 relative"
                style={{ opacity: 1 }}
              >
                <span className="text-white font-semibold text-base sm:text-lg">
                  Identify Top Talent Now
                </span>
              </button>
            </a>
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
          {/* Mobile CTA Button */}
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
        {/* VIDEO */}
        <div className="mt-8 lg:-mt-48 xl:-mt-60 relative z-10">
          <video
            ref={videoRef}
            src="/Hero_Vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block object-contain min-h-[100px] md:min-h-[500px] lg:min-h-[600px]"
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
