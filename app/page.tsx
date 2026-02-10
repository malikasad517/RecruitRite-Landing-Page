"use client";

import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhyRecruitRite from "@/components/WhyRecruitRite";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import APISection from "@/components/APISection";
import CallTOAction from "@/components/CallTOAction";
import Footer from "@/components/Footer";

export default function Homepage() {
  return (
    <div className="relative bg-[#F3F3FF] min-w-screen min-h-screen overflow-hidden">
      <HeroSection />
      <HowItWorks />
      <WhyRecruitRite />
      <UseCases />
      <Pricing />
      <APISection />
      <CallTOAction />
      <Footer />
    </div>
  );
}
