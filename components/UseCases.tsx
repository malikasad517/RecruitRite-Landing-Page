"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function UseCases() {
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false);

  const useCases = [
    {
      title: "Find Your Perfect Hire",
      description:
        "Upload resumes once. RecruitRite instantly matches, interviews, and delivers your ideal candidate — no more endless screening.",
      image: "/Usecase1.png",
    },
    {
      title: "Scale Fast with Project Hiring",
      description:
        "Need 10 or 200 hires? We interview thousands, rank the best, and hand you ready-to-hire talent + detailed reports while you focus on building the team.",
      image: "/Usecase2.png",
    },
    {
      title: "Seamless HRIS Integration",
      description:
        "Plug RecruitRite into your existing HRIS and supercharge it with AI-powered matching and automated interviews — zero disruption, instant upgrade.",
      image: "/Usecase3.png",
    },
    {
      title: "Recruitment for Agencies",
      description:
        "Win more searches. We rank candidates and conduct first-round interviews. You only step in to close the top-tier talent.",
      image: "/Card 4.png",
    },
    {
      title: "Revolutionize Your ATS",
      description:
        "Turn any ATS into a proactive talent engine that interviews, scores, and shortlists 24/7. Say goodbye to passive pipelines.",
      image: "/Card 5.png",
    },
    {
      title: "Empower Enterprise Recruiting",
      description:
        "Process thousands of applications. Let AI handle screening and interviewing so your team focuses on strategy and final decisions.",
      image: "/Card 6.png",
    },
  ];

  const total = useCases.length;
  const CLONE_COUNT = 3;

  // Cloned array for infinite loop: last 3 + all 6 + first 3
  const clonedCards = [
    ...useCases.slice(-CLONE_COUNT),
    ...useCases,
    ...useCases.slice(0, CLONE_COUNT),
  ];

  const trackIndex = current + CLONE_COUNT;

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  // Seamless infinite loop: after transition ends, silently jump
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      if (isJumping.current) return;

      if (current >= total) {
        isJumping.current = true;
        track.style.transition = "none";
        setCurrent(current - total);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            track.style.transition = "transform 0.55s cubic-bezier(0.4,0,0.2,1)";
            isJumping.current = false;
          })
        );
      } else if (current < 0) {
        isJumping.current = true;
        track.style.transition = "none";
        setCurrent(current + total);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            track.style.transition = "transform 0.55s cubic-bezier(0.4,0,0.2,1)";
            isJumping.current = false;
          })
        );
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [current, total]);

  const handleDot = (index: number) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setCurrent(index);
    startAutoPlay();
  };

  // Mobile dot also handles prev/next via swipe-like dot clicks
  const handleMobileDot = (index: number) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setCurrent(index);
    startAutoPlay();
  };

  const activeDot = ((current % total) + total) % total;
  const translateX = -(trackIndex * (100 / 3));

  return (
    <div
      id="use-cases"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12">

        {/* ── Header ── */}
        <div className="flex flex-col justify-center items-center gap-3 md:gap-4">
          <div className="flex justify-center items-center gap-2 md:gap-3 flex-wrap">
            <h2 className="text-[#1C1C1C] font-beVietnam text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-semibold leading-tight text-center">
              Built for Every
            </h2>
            <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-[76px] lg:h-[76px] relative flex-shrink-0">
              <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2 absolute left-0 top-0">
                <path d="M37.9367 0V38.0003H0L37.9367 0Z" fill="#9E56FF" />
              </svg>
              <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2 absolute right-0 bottom-0">
                <path d="M0 38.0004V0H37.9317L0 38.0004Z" fill="#5B00D6" />
              </svg>
            </div>
            <h2 className="text-[#1C1C1C] font-beVietnam text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-semibold leading-tight text-center">
              Hiring Scenario
            </h2>
          </div>
          <p className="text-[#666] font-schibstedGrotesk text-base md:text-lg leading-relaxed text-center max-w-3xl px-4">
            RecruitRite adapts to how you hire — whether you're filling one role or scaling globally.
          </p>
        </div>

        {/* ── DESKTOP CAROUSEL (lg+) — no arrows, dots only ── */}
        <div className="hidden lg:block w-full">
          {/* Overflow window */}
          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex items-stretch"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
                willChange: "transform",
              }}
            >
              {clonedCards.map((useCase, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 xl:px-3"
                  style={{ width: "33.3333%" }}
                >
                  {/* Card — fixed total height so all 6 are identical */}
                  <div className="flex flex-col rounded-[10px] border border-[#BBB] overflow-hidden w-full shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    {/* Image area — fixed height */}
                    <div className="relative w-full flex-shrink-0" style={{ height: "240px" }}>
                      <Image
                        src={useCase.image}
                        alt={useCase.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1440px) 33vw"
                      />
                    </div>
                    {/* Text area — fixed min-height so all cards align */}
                    <div
                      className="flex flex-col gap-3 xl:gap-4 p-5 xl:p-6 w-full bg-white"
                      style={{ minHeight: "180px" }}
                    >
                      <h3 className="text-[#1C1C1C] font-schibstedGrotesk text-2xl xl:text-[28px] font-medium leading-tight">
                        {useCase.title}
                      </h3>
                      <p className="text-[#666] font-schibstedGrotesk text-base xl:text-lg leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Dots */}
          <div className="flex justify-center items-center gap-2 w-full mt-6">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDot(index)}
                className={`rounded-full transition-all duration-300 ${
                  activeDot === index
                    ? "bg-[#0A0B3A] w-7 h-2.5"
                    : "bg-gray-300 w-2.5 h-2.5 hover:bg-gray-400"
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── MOBILE / TABLET CAROUSEL (< lg) ── */}
        <div className="lg:hidden w-full">
          <div className="flex justify-center w-full">
            {/* Card — same fixed heights on mobile too */}
            <div className="flex flex-col rounded-[10px] border border-[#BBB] overflow-hidden w-full max-w-[520px] shadow-md">
              <div className="relative w-full flex-shrink-0" style={{ height: "220px" }}>
                <Image
                  src={useCases[activeDot].image}
                  alt={useCases[activeDot].title}
                  fill
                  className="object-cover"
                  sizes="520px"
                />
              </div>
              <div
                className="flex flex-col gap-3 p-5 w-full bg-white"
                style={{ minHeight: "160px" }}
              >
                <h3 className="text-[#1C1C1C] font-schibstedGrotesk text-2xl sm:text-[28px] font-medium leading-tight">
                  {useCases[activeDot].title}
                </h3>
                <p className="text-[#666] font-schibstedGrotesk text-base leading-relaxed">
                  {useCases[activeDot].description}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center items-center gap-2 w-full mt-4">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => handleMobileDot(index)}
                className={`rounded-full transition-all duration-300 ${
                  activeDot === index
                    ? "bg-[#0A0B3A] w-7 h-2"
                    : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to use case ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}