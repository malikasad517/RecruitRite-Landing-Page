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
    <section id="how-it-works" className="bg-[#F3F3FF] py-8 sm:py-12 md:py-16 lg:py-20">
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
          <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto font-normal">
            From job description to live interview — see the whole journey,
            then try it yourself.
          </p>
        </div>

        {/* OUTER WRAPPER - Contains blue box + external elements */}
        <div className="relative">
          
          {/* Main Resume - OUTSIDE blue box - SMOOTHER ANIMATION */}
          <div 
            className={`absolute transition-all ease-out ${
              animationStarted 
                ? 'duration-[2000ms] left-[33%] sm:left-[31%] md:left-[33%] lg:left-[28%] top-2 sm:top-10 md:top-6 rotate-0 scale-75 sm:scale-90 md:scale-100 z-[8]' 
                : 'duration-700 left-[-4] sm:left-4 md:left-8 lg:left-4 top-8 sm:top-10 md:top-12 rotate-[8deg] scale-75 sm:scale-90 md:scale-100 z-20'
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

          {/* Click Button - REDUCED WIDTH ON MOBILE */}
          <button
            onClick={handleStartAnimation}
            className={`absolute left-0 sm:left-4 md:left-8 lg:left-12 top-40 sm:top-36 md:top-40 bg-[#0F172A] text-white text-[10px] sm:text-sm px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-lg shadow-lg sm:whitespace-nowrap z-30 hover:bg-gray-800 transition-colors cursor-pointer w-[115px] sm:w-auto ${
              animationStarted ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={animationStarted}
          >
            Click here to See magic Happen ✨
          </button>

          {/* Blue container - INCREASED HEIGHT ON MOBILE ONLY */}
          <div className="relative bg-[#C9DAFF] rounded-xl sm:rounded-2xl h-[550px] sm:h-[480px] md:h-[520px] lg:h-[540px] overflow-visible mx-6 sm:mx-20 md:mx-24 lg:mx-28">
            
            {/* folder2.png - Right side floating image - SMOOTHER ANIMATION */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-8 md:right-12 lg:right-16 z-10">
              <div 
                className={`relative transition-all ease-out ${
                  animationStarted 
                    ? 'duration-[2000ms] delay-[1500ms] translate-x-[-120px] sm:translate-x-[-120px] md:translate-x-[-140px] lg:translate-x-[-130px] translate-y-[300px] sm:translate-y-[90px] md:translate-y-[100px] lg:translate-y-[40px] scale-[1.8] sm:scale-[2.2] md:scale-[2.6] lg:scale-[1.8] opacity-100' 
                    : 'duration-700 translate-x-0 translate-y-0 scale-100 opacity-0'
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

            {/* Upload cards container - ADDED PADDING BETWEEN FOLDERS ON MOBILE */}
            <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-8 md:gap-10 lg:gap-12 px-4 pt-16 sm:pt-0">
              
              {/* Job Description Card - INCREASED SIZE & PADDING */}
              <div className="flex flex-col items-center">
                <div className="relative w-[200px] h-[180px] sm:w-[190px] sm:h-[160px] md:w-[220px] md:h-[180px] lg:w-[300px] lg:h-[280px]">
                  <Image
                    src="/WHite bg folder.svg"
                    alt="Upload Folder"
                    fill
                    className="object-contain z-10"
                  />
                  <div className="relative z-[15] h-full flex flex-col items-center justify-center pt-3 sm:pt-4 px-4">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 relative">
                      <Image
                        src="/Frame.png"
                        alt="Upload"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-2 sm:mt-2.5 text-sm sm:text-base md:text-base font-medium text-[#0F172A] text-center">
                      Drag and Drop<br />your files
                    </p>
                    <div className="mt-3 sm:mt-4 flex items-start gap-3 sm:gap-4 md:gap-5">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                          <Image
                            src="/Chrome extension.png"
                            alt="Chrome"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs text-[#64748B] text-center leading-tight">
                          Add Chrome<br/>Extension
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                          <Image
                            src="/QR code.png"
                            alt="QR"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs text-[#64748B] text-center leading-tight">
                          Scan your<br/>document
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm sm:text-base md:text-lg font-bold text-[#0F172A] text-center">
                  Add Job Description
                </p>
              </div>

              {/* Candidate Pool Card - INCREASED SIZE & PADDING */}
              <div className="flex flex-col items-center">
                <div className="relative w-[200px] h-[180px] sm:w-[190px] sm:h-[160px] md:w-[220px] md:h-[180px] lg:w-[300px] lg:h-[280px]">
                  <Image
                    src="/WHite bg folder.svg"
                    alt="Upload Folder"
                    fill
                    className="object-contain z-10"
                  />
                  <div className="relative z-[15] h-full flex flex-col items-center justify-center pt-3 sm:pt-4 px-4">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 relative">
                      <Image
                        src="/Frame.png"
                        alt="Upload"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-2 sm:mt-2.5 text-sm sm:text-base md:text-base font-medium text-[#0F172A] text-center">
                      Drag and Drop<br />your files
                    </p>
                    <div className="mt-3 sm:mt-4 flex items-start gap-3 sm:gap-4 md:gap-5">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                          <Image
                            src="/Chrome extension.png"
                            alt="Chrome"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs text-[#64748B] text-center leading-tight">
                          Add Chrome<br/>Extension
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                          <Image
                            src="/QR code.png"
                            alt="QR"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs text-[#64748B] text-center leading-tight">
                          Scan your<br/>document
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm sm:text-base md:text-lg font-bold text-[#0F172A] text-center">
                  Add Candidate Pool
                </p>
              </div>
            </div>

            {/* Robot - WITH MOVING ANIMATION (only change) */}
            <div className="absolute right-[-40px] sm:right-[-15px] md:right-[-10px] lg:right-[-5px] bottom-8 sm:bottom-12 md:bottom-14 lg:bottom-16 z-20">
              <div className={`w-[100px] h-[125px] sm:w-[130px] sm:h-[163px] md:w-[140px] md:h-[175px] lg:w-[150px] lg:h-[188px] relative ${
                animationStarted ? 'animate-robot-move' : ''
              }`}>
                <Image
                  src="/AdobeExpressRobot_mascot_reviews_holographic_resumes11BackgroundRemoved2.png"
                  alt="Robot"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Speech bubble - SMOOTHER ANIMATION - FIXED DESKTOP POSITION */}
            <div 
              className={`absolute right-0 sm:right-36 md:right-40 lg:right-16 bottom-48 sm:bottom-32 md:bottom-36 lg:bottom-72 bg-[#0F172A] text-white text-xs sm:text-sm md:text-sm px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] shadow-lg z-20 transition-all duration-700 ease-out ${
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

      <style jsx>{`
        @keyframes robotMove {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(-2deg);
          }
          50% {
            transform: translateY(0) rotate(0deg);
          }
          75% {
            transform: translateY(8px) rotate(2deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        
        .animate-robot-move {
          animation: robotMove 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}