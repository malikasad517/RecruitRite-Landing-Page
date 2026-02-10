"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyRecruitRite() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-box", {
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "97k", label: "Interviews for Clients" },
    { value: "470k", label: "Full Service Hires for Clients" },
    { value: "4.1k", label: "Sourced Candidates" },
    { value: "1.3M", label: "AI Matched Candidates" },
  ];

  return (
    <div
      ref={sectionRef}
      id="why-recruitrite"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 xl:gap-20">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-4 lg:gap-6 w-full lg:max-w-[45%] xl:max-w-[520px]">
          <h2 className="text-[#1C1C1C] font-beVietnam text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-semibold leading-tight lg:leading-[1.3]">
            Why RecruitRite?
          </h2>
          <p className="text-[#666] font-schibstedGrotesk text-base md:text-lg leading-relaxed lg:leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Imperdiet congue eu aliquam
            egestas mi ac a arcu. Mauris sit elementum ornare enim volutpat
            tristique. Nam imperdiet id ultrices eget blandit ut ornare turpis
            eget. Nec ullamcorper egestas euismod eget in dui tincidunt id
            egestas. Proin ornare vulputate feugiat amet at et amet cursus
            sollicitudin. Sem aliquam ultrices molestie id vitae. Risus sit
            posuere nisl et ac in tempor et accumsan. Aliquet eros volutpat eget
            dignissim velit. Eu sapien quam in nunc. Nam blandit.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="stats-container w-full lg:max-w-[50%] xl:max-w-[620px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-box flex flex-col items-start gap-2 md:gap-3"
              >
                <div className="bg-[#9E56FF] w-full max-w-[280px] sm:max-w-full h-1" />
                <div className="flex flex-col items-start">
                  <p className="text-[#5B00D6] font-schibstedGrotesk text-5xl sm:text-6xl md:text-[64px] lg:text-[70px] font-medium leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[#333] font-schibstedGrotesk text-lg sm:text-xl md:text-2xl leading-tight mt-1 md:mt-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}