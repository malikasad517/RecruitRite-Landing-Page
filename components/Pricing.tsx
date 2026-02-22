"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.from(".pricing-header", {
        scrollTrigger: {
          trigger: ".pricing-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate pricing cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              y: 80,
              opacity: 0,
            },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power3.out",
            }
          );

          // Animate features inside each card
          const features = card.querySelectorAll(".feature-item");
          gsap.fromTo(
            features,
            {
              x: -30,
              opacity: 0,
            },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              x: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              delay: index * 0.2 + 0.3,
              ease: "power2.out",
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pricingPlans = [
    {
      badge: "Free Trial",
      badgeColor: "bg-[#F3E8FF]",
      badgeTextColor: "text-[#7C3AED]",
      title: "$0",
      subtitle: "No credit card required.",
      features: [
        "100 free credits",
        "Upload job descriptions & resumes",
        "Resume + JD matching",
        "Live interview preview",
      ],
      buttonText: "Start Free",
      buttonStyle: "bg-[#0A0B3A] text-white hover:bg-[#1a1b4a]",
      popular: false,
    },
    {
      badge: "Most Popular",
      badgeColor: "bg-[#F3E8FF]",
      badgeTextColor: "text-[#7C3AED]",
      title: "Pay Only for Results",
      subtitle: (
        <>
          Use credits when you need them.
          <br />
          No contracts. No recurring fees.
        </>
      ),
      features: [
        "Credits used per AI interview, screening, or match",
        "Technical + soft-skill reports included",
        "Credits never expire",
        "Scale up or down anytime",
      ],
      buttonText: "Buy Credits",
      buttonStyle: "bg-[#0A0B3A] text-white hover:bg-[#1a1b4a]",
      popular: true,
    },
    {
      badge: "High-Volume Hiring",
      badgeColor: "bg-[#F3E8FF]",
      badgeTextColor: "text-[#7C3AED]",
      title: "Bulk Credits",
      subtitle: "Designed for agencies, enterprises, and project hiring at scale.",
      features: [
        "Bulk credit discounts",
        "Bonus credits automatically added",
        "HRIS, ATS & API integration",
        "Priority support & onboarding",
      ],
      buttonText: "Buy Credits",
      buttonStyle: "bg-[#0A0B3A] text-white hover:bg-[#1a1b4a]",
      popular: false,
    },
  ];

  return (
    <div
      ref={sectionRef}
      id="pricing"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
        {/* Header */}
        <div className="pricing-header flex flex-col items-center gap-2 md:gap-3 text-center">
          <h2 className="text-[#1C1C1C] font-beVietnam text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-semibold leading-tight max-w-5xl">
            Start Free – Then Pay Only for What You Use
          </h2>
          <p className="text-[#666] font-schibstedGrotesk text-base md:text-lg leading-relaxed max-w-2xl">
            No subscriptions. No lock-ins. Just AI that works when you need it.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5 xl:gap-6 w-full">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="flex flex-col rounded-[12px] border border-[#9E56FF] shadow-lg p-6 md:p-7 lg:p-8 relative overflow-hidden"
              style={{
                opacity: 1,
                background: "linear-gradient(180deg, rgba(236, 222, 255, 0.3) 0%, rgba(243, 243, 255, 0.3) 100%)",
              }}
            >
              {/* Centered Header Content */}
              <div className="flex flex-col items-center text-center mb-6 relative z-10">
                {/* Badge */}
                <div
                  className={`inline-flex items-center justify-center ${plan.badgeColor} ${plan.badgeTextColor} px-4 py-2 rounded-full text-sm font-medium font-schibstedGrotesk mb-4`}
                >
                  {plan.badge}
                </div>

                {/* Title */}
                <h3 className="text-[#1C1C1C] font-schibstedGrotesk text-2xl md:text-3xl lg:text-[34px] font-semibold leading-tight mb-2">
                  {plan.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[#666] font-schibstedGrotesk text-sm md:text-base leading-relaxed min-h-[48px]">
                  {plan.subtitle}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent mb-6" />

              {/* Features List */}
              <div className="flex flex-col gap-3 mb-6 flex-grow relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="feature-item flex items-start gap-3"
                    style={{ opacity: 1 }}
                  >
                    <svg
                      className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-[#1C1C1C] font-schibstedGrotesk text-sm md:text-base leading-relaxed font-normal">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button with Shine Effect */}
              <button
                className={`relative w-full ${plan.buttonStyle} py-3.5 md:py-4 rounded-lg font-schibstedGrotesk text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-xl overflow-hidden group/btn z-10`}
              >
                {/* Shine Effect */}
                <span className="absolute inset-0 w-full h-full">
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] translate-x-[-200%] group-hover/btn:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
                </span>

                {/* Button Text */}
                <span className="relative z-10">{plan.buttonText}</span>

                {/* Hover Background Glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#5B00D6]/0 via-[#5B00D6]/10 to-[#5B00D6]/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}