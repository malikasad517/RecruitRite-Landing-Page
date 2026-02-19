"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function UseCases() {
  const [activeCase, setActiveCase] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % useCases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={sectionRef}
      id="use-cases"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-3 md:gap-4">
          <div className="flex justify-center items-center gap-2 md:gap-3 flex-wrap">
            <h2 className="text-[#1C1C1C] font-beVietnam text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-semibold leading-tight text-center">
              Built for Every
            </h2>
            {/* Icon - small on mobile, normal on desktop */}
            <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-[76px] lg:h-[76px] relative flex-shrink-0">
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
            <h2 className="text-[#1C1C1C] font-beVietnam text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-semibold leading-tight text-center">
              Hiring Scenario
            </h2>
          </div>
          <p className="text-[#666] font-schibstedGrotesk text-base md:text-lg leading-relaxed text-center max-w-3xl px-4">
            RecruitRite adapts to how you hire — whether you're filling one role or scaling globally.
          </p>
        </div>

        {/* Desktop Carousel - All Cards Visible */}
        <div className="hidden lg:flex justify-center items-stretch gap-4 xl:gap-6 w-full">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`flex flex-col items-start rounded-[10px] border border-[#BBB] overflow-hidden flex-1 max-w-[440px] xl:max-w-[520px] transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg ${
                activeCase === index ? "shadow-lg" : ""
              }`}
              onClick={() => setActiveCase(index)}
            >
              <div className="flex justify-center items-center bg-white w-full h-[200px] xl:h-[240px] overflow-hidden relative">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-3 xl:gap-4 p-5 xl:p-6 w-full">
                <h3 className="text-[#1C1C1C] font-schibstedGrotesk text-2xl xl:text-[28px] 2xl:text-[32px] font-medium leading-tight">
                  {useCase.title}
                </h3>
                <p className="text-[#666] font-schibstedGrotesk text-base xl:text-lg leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel - One Card at a Time */}
        <div className="lg:hidden w-full">
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col items-start rounded-[10px] border border-[#BBB] overflow-hidden w-full max-w-[520px] shadow-md">
              <div className="flex justify-center items-center bg-white w-full h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden relative">
                <Image
                  src={useCases[activeCase].image}
                  alt={useCases[activeCase].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-3 md:gap-4 p-5 md:p-6 w-full">
                <h3 className="text-[#1C1C1C] font-schibstedGrotesk text-2xl sm:text-[28px] md:text-[32px] font-medium leading-tight">
                  {useCases[activeCase].title}
                </h3>
                <p className="text-[#666] font-schibstedGrotesk text-base md:text-lg leading-relaxed">
                  {useCases[activeCase].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 w-full mt-2 md:mt-4">
          {useCases.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`rounded-full transition-all duration-300 ${
                activeCase === index
                  ? "bg-[#0A0B3A] w-7 md:w-[30px] h-2 md:h-2.5"
                  : "bg-gray-300 w-2 md:w-2.5 h-2 md:h-2.5 hover:bg-gray-400"
              }`}
              aria-label={`Go to use case ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}