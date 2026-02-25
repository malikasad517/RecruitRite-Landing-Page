"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function APISection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo(
        ".api-header",
        {
          y: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".api-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Animate right side image
      gsap.fromTo(
        ".api-image",
        {
          x: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".api-image",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Animate code boxes
      const boxes = gsap.utils.toArray(".code-box");
      boxes.forEach((box, index) => {
        gsap.fromTo(
          box as HTMLElement,
          {
            y: 60,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: ".code-boxes",
              start: "top 80%",
              toggleActions: "play none none none",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const codeSnippets = [
    {
      title: "01. Generate API Key",
      code: `sd_apik_36ea054391c8461db7df395a45e71640`,
    },
    {
      title: "02. Send Request to screen candidates",
      code: `curl --location 'https://api.recruitrite.ai/api/v1/powered_by/screen' \\
--header 'X-POWEREDBY-API-KEY: Bearer sd_apik_36ea054391c8461db7df395a45e71640' \\
--form 'job_title="Python With Machine Learning"' \\
--form 'job_description="Develop and deploy state-of-the-art machine learning models and algorithms for NLP and computer vision applications. Conduct research and stay up to date with the latest advancements in NLP and computer vision to ensure our solutions are cutting-edge. Design and implement NLP models and techniques for text generation, information retrieval, sentiment analysis, named entity recognition, topic modelling, and machine translation. Perform data preprocessing, feature engineering, and model evaluation to ensure high-quality and accurate results. Deploy and maintain machine learning models in cloud platforms such as AWS ensuring scalability and reliability. Conduct regular performance evaluations, identify bottlenecks, and implement optimization strategies to enhance model efficiency and accuracy. Proficient in Python with 2+ years of strong programming experience. Proficiency in machine learning frameworks and libraries (e.g., TensorFlow, PyTorch, scikit-learn). Analytical & Creative mindset: Strong problem-solving skills, with the ability to analyse complex data and derive actionable insights. A solid understanding of statistical analysis and data visualization techniques. In-depth knowledge of machine learning data structures and modelling, software architecture, libraries and frameworks to create AI that accomplishes outlined goals. Strong mathematics skills, especially in statistics, to create algorithms. Should have good logical, analytical and communication skills with client interaction experience."' \\
--form 'skills="Python, Machine Learning, TensorFlow, PyTorch, scikit-learn, Django, Flask, Keras"' \\
--form 'resumes=@"John Martin - ML with Python.pdf"'`,
    },
    {
      title: "03. Download Screening Report",
      code: `{
  "screening_response": [
    {
      "id": "8480d2e1-5998-4fcb-8e35-7219b2a3a22d",
      "first_name": "John",
      "last_name": "Martin",
      "email": "johnmartin@gmail.com",
      "phone": "+919207576171",
      "accuracy": 92.91,
      "address": {
        "city": "New York",
        "state": "NY",
        "country": "USA"
      },
      "summary": "John Martin is a Junior Machine Learning Engineer...",
      "skills": [
        {"skill": "python"},
        {"skill": "machine learning"},
        {"skill": "tensorflow"}
      ],
      "education_history": [
        {
          "name": "Columbia University",
          "degree": "Master of Business Administration (MBA)"
        }
      ]
    }
  ]
}`,
    },
  ];

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const formatTitle = (title: string) => {
    const dotIndex = title.indexOf(".");
    const number = title.slice(0, dotIndex + 1);
    const rest = title.slice(dotIndex + 1);
    return { number, rest };
  };

  return (
    <div
      ref={sectionRef}
      id="api"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 mt-16 md:mt-24 lg:mt-32"
      style={{
        backgroundImage: "url('/apigrid.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
        {/* Top Section - Header and Image */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content - reduced width to create centre gap */}
          <div className="api-header flex flex-col items-start gap-4 lg:gap-6 w-full lg:w-[38%]">
            <h2 className="text-[#1C1C1C] font-beVietnam text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-semibold leading-tight lg:leading-[1.2]">
              Recruiting Intelligence — Fully Observable
            </h2>
            <p className="text-[#666] font-schibstedGrotesk text-base md:text-lg leading-relaxed lg:leading-[30px] w-full">
              Every candidate screened, interviewed, and ranked by RecruitRite's AI is fully traceable, measurable, and ready for action — via UI or API.
            </p>
            <a href="https://lite.recruitrite.ai/developer-guide" target="_blank" rel="noopener noreferrer" className="w-full bg-[#0A0B3A] text-white px-8 py-3.5 md:py-4 rounded-lg font-schibstedGrotesk text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl relative overflow-hidden group mt-2 text-center">
              {/* Shine Effect */}
              <span className="absolute inset-0 w-full h-full">
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] translate-x-[-200%] group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
              </span>
              <span className="relative z-10">Generate My API Key</span>
            </a>
          </div>
          {/* Right Image - reduced width, no bg no shadow */}
          <div className="api-image w-full lg:w-[38%] relative">
            <div className="relative w-full aspect-[1.2/1]">
              <Image
                src="/API Hiring.png"
                alt="Hiring Workflow Status"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Code Boxes with top padding for centering */}
        <div className="code-boxes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
          {codeSnippets.map((snippet, index) => {
            const { number, rest } = formatTitle(snippet.title);
            return (
              <div
                key={index}
                className="code-box flex flex-col rounded-xl bg-[#1C1C1C] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{
                  height: "320px",
                  opacity: 1,
                  transform: "translateY(0px)"
                }}
              >
                {/* Title Bar - plain white bg, centered title, copy button on right */}
                <div className="flex items-center bg-white flex-shrink-0 px-5 py-3.5">
                  <div className="flex-1 flex justify-center">
                    <h3 className="font-schibstedGrotesk text-sm md:text-base font-semibold text-center">
                      <span style={{ color: "#5B00D6" }}>{number}</span>
                      <span className="text-[#1C1C1C]">{rest}</span>
                    </h3>
                  </div>
                  <button
                    onClick={() => handleCopy(snippet.code, index)}
                    className="text-gray-400 hover:text-gray-700 transition-colors duration-200 p-1.5 hover:bg-gray-100 rounded flex-shrink-0"
                    aria-label="Copy code"
                  >
                    {copiedIndex === index ? (
                      <svg
                        className="w-5 h-5 text-green-500"
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
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                
                {/* Code Content - with top padding to create center spacing */}
                <div
                  className="flex-1 bg-[#1C1C1C] overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
                >
                  <pre
                    className="text-gray-300 font-mono text-xs md:text-[13px] leading-relaxed"
                    style={{
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      textAlign: "left",
                      padding: "80px 20px 20px 20px", // Top padding increased to 60px (approx 5 lines)
                      margin: 0,
                      fontFamily: "monospace",
                    }}
                  >
                    {snippet.code}
                  </pre>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
        .scrollbar-thin::-webkit-scrollbar-corner {
          background: #1C1C1C;
        }
      `}</style>
    </div>
  );
}