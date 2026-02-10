"use client";
import { useState } from "react";
import Image from "next/image";

export default function HowItWorks() {
  const [animationStarted, setAnimationStarted] = useState(false);

  const handleStartAnimation = () => {
    setAnimationStarted(true);
    setTimeout(() => {
      setAnimationStarted(false);
    }, 8000);
  };

  return (
    <section id="how-it-works" className="bg-[#F6F7FF] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0F172A] flex items-center justify-center gap-2">
            How 
            <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 relative flex-shrink-0">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2 absolute left-0 top-0">
                <path d="M37.9367 0V38.0003H0L37.9367 0Z" fill="#9E56FF"></path>
              </svg>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2 absolute right-0 bottom-0">
                <path d="M0 38.0004V0H37.9317L0 38.0004Z" fill="#5B00D6"></path>
              </svg>
            </span>
            RecruitRite Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
            From job description to live interview — see the whole journey,
            then try it yourself.
          </p>
        </div>

        {/* OUTER WRAPPER - Contains blue box + external elements */}
        <div className="relative">
          
          {/* Main Resume - OUTSIDE blue box */}
          <div 
            className={`absolute transition-all duration-[1500ms] ease-in-out ${
              animationStarted 
                ? 'left-[33%] sm:left-[31%] md:left-[33%] lg:left-[31%] top-2 sm:top-10 md:top-6 rotate-0 scale-75 sm:scale-90 md:scale-100 z-[8]' 
                : 'left-0 sm:left-4 md:left-8 lg:left-4 top-8 sm:top-10 md:top-12 rotate-[8deg] scale-75 sm:scale-90 md:scale-100 z-20'
            }`}
            style={{ width: 'clamp(100px, 12vw, 160px)' }}
          >
            <Image
              src="/resum.png"
              alt="Resume"
              width={180}
              height={226}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Click Button - OUTSIDE blue box */}
          <button
            onClick={handleStartAnimation}
            className={`absolute left-0 sm:left-4 md:left-8 lg:left-12 top-32 sm:top-36 md:top-40 bg-[#0F172A] text-white text-[10px] leading-tight sm:text-sm px-2 py-1.5 sm:px-3.5 sm:py-2 rounded-lg shadow-lg sm:whitespace-nowrap z-30 hover:bg-gray-800 transition-colors cursor-pointer max-w-[130px] sm:max-w-none ${
              animationStarted ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={animationStarted}
          >
            Click here to See magic Happen ✨
          </button>

          {/* Blue container */}
          <div className="relative bg-[#C9DAFF] rounded-xl sm:rounded-2xl h-[360px] sm:h-[420px] md:h-[440px] lg:h-[460px] overflow-visible mx-6 sm:mx-20 md:mx-24 lg:mx-28">
            
            {/* folder2.png - Right side floating image */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-8 md:right-12 lg:right-16 z-10">
              <div 
                className={`relative transition-all duration-[1500ms] ease-in-out ${
                  animationStarted 
                    ? 'delay-[1500ms] translate-x-[-120px] sm:translate-x-[-120px] md:translate-x-[-140px] lg:translate-x-[-180px] translate-y-[200px] sm:translate-y-[90px] md:translate-y-[100px] lg:translate-y-[40px] scale-[1.3] sm:scale-[2.2] md:scale-[2.6] lg:scale-[1.8] opacity-100' 
                    : 'translate-x-0 translate-y-0 scale-100 opacity-0'
                }`}
                style={{ width: 'clamp(50px, 7vw, 120px)' }}
              >
                <Image 
                  src="/secondfolderres.png" 
                  alt="Folder 2" 
                  width={120}
                  height={104}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Upload cards container */}
            <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-6 md:gap-8 lg:gap-10 px-4 pt-16 sm:pt-0">
              
              {/* Job Description Card */}
              <div className="flex flex-col items-center">
                <div className="relative w-[130px] h-[102px] sm:w-[160px] sm:h-[130px] md:w-[180px] md:h-[150px] lg:w-[200px] lg:h-[170px]">
                  <Image
                    src="/WHite bg folder.svg"
                    alt="Upload Folder"
                    fill
                    className="object-contain z-10"
                  />
                  <div className="relative z-[15] h-full flex flex-col items-center justify-center pt-2 sm:pt-3">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 relative">
                      <Image
                        src="/Frame.png"
                        alt="Upload"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-1 sm:mt-1.5 text-[9px] sm:text-xs font-medium text-[#0F172A] text-center">
                      Drag and Drop<br />your files
                    </p>
                    <div className="mt-1.5 sm:mt-2 flex items-start gap-1.5 sm:gap-3 md:gap-4">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 relative">
                          <Image
                            src="/Chrome extension.png"
                            alt="Chrome"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[6px] sm:text-[8px] text-[#64748B] text-center leading-tight">
                          Add Chrome<br/>Extension
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 relative">
                          <Image
                            src="/QR code.png"
                            alt="QR"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[6px] sm:text-[8px] text-[#64748B] text-center leading-tight">
                          Scan your<br/>document
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-xs sm:text-base font-bold text-[#0F172A] text-center">
                  Add Job Description
                </p>
              </div>

              {/* Candidate Pool Card */}
              <div className="flex flex-col items-center">
                <div className="relative w-[130px] h-[102px] sm:w-[160px] sm:h-[130px] md:w-[180px] md:h-[150px] lg:w-[200px] lg:h-[170px]">
                  <Image
                    src="/WHite bg folder.svg"
                    alt="Upload Folder"
                    fill
                    className="object-contain z-10"
                  />
                  <div className="relative z-[15] h-full flex flex-col items-center justify-center pt-2 sm:pt-3">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 relative">
                      <Image
                        src="/Frame.png"
                        alt="Upload"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-1 sm:mt-1.5 text-[9px] sm:text-xs font-medium text-[#0F172A] text-center">
                      Drag and Drop<br />your files
                    </p>
                    <div className="mt-1.5 sm:mt-2 flex items-start gap-1.5 sm:gap-3 md:gap-4">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 relative">
                          <Image
                            src="/Chrome extension.png"
                            alt="Chrome"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[6px] sm:text-[8px] text-[#64748B] text-center leading-tight">
                          Add Chrome<br/>Extension
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 relative">
                          <Image
                            src="/QR code.png"
                            alt="QR"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[6px] sm:text-[8px] text-[#64748B] text-center leading-tight">
                          Scan your<br/>document
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-xs sm:text-base font-bold text-[#0F172A] text-center">
                  Add Candidate Pool
                </p>
              </div>
            </div>

            {/* Robot */}
            <div className="absolute right-[-15px] sm:right-[-15px] md:right-[-10px] lg:right-[-5px] bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-16 z-20">
              <div className="w-[100px] h-[125px] sm:w-[130px] sm:h-[163px] md:w-[140px] md:h-[175px] lg:w-[150px] lg:h-[188px] relative">
                <Image
                  src="/AdobeExpressRobot_mascot_reviews_holographic_resumes11BackgroundRemoved2.png"
                  alt="Robot"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Speech bubble */}
            <div 
              className={`absolute right-12 sm:right-36 md:right-40 lg:right-32 top-28 sm:top-28 md:top-32 lg:top-32 bg-[#0F172A] text-white text-[9px] sm:text-[11px] md:text-[12px] px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] shadow-lg z-20 transition-all duration-500 ${
                animationStarted ? 'delay-[3500ms] opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            >
              <p className="leading-relaxed text-center whitespace-nowrap">
                Well Done.<br />
                Now Add Job<br />
                Description
              </p>
              {/* Dots positioned to match the image */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-auto right-4 sm:right-5 flex gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0F172A] rounded-full"></div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#0F172A] rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#0F172A] rounded-full"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}