"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(MotionPathPlugin, TextPlugin);
export default function HowItWorks() {
  const resumeDocRef   = useRef<HTMLDivElement>(null);
  const secondDocRef   = useRef<HTMLDivElement>(null);
  const folder1Ref = useRef<HTMLDivElement>(null);
  const folder2Ref = useRef<HTMLDivElement>(null);
  const landed1Ref = useRef<HTMLDivElement>(null);
  const landed2Ref = useRef<HTMLDivElement>(null);
  const btnRef        = useRef<HTMLButtonElement>(null);
  const mascotRef     = useRef<HTMLDivElement>(null);
  const bubbleRef     = useRef<HTMLDivElement>(null);
  const bubbleTextRef = useRef<HTMLParagraphElement>(null);
  const pulseRef      = useRef<gsap.core.Tween | null>(null);
  const hasClicked    = useRef(false);
  useEffect(() => {
    const resumeDoc  = resumeDocRef.current;
    const secondDoc  = secondDocRef.current;
    const folder1    = folder1Ref.current;
    const folder2    = folder2Ref.current;
    const landed1    = landed1Ref.current;
    const landed2    = landed2Ref.current;
    const btn        = btnRef.current;
    const mascot     = mascotRef.current;
    const bubble     = bubbleRef.current;
    const bubbleText = bubbleTextRef.current;
    if (!resumeDoc || !secondDoc || !folder1 || !folder2 || !landed1 || !landed2 || !btn || !mascot || !bubble || !bubbleText) return;
    gsap.set([mascot, bubble], { autoAlpha: 0, y: 40 });
    gsap.set(bubbleText, { text: "" });
    gsap.set([landed1, landed2], { autoAlpha: 0 });
    gsap.set(secondDoc, { autoAlpha: 0 });
    const introTimer = setTimeout(() => {
      const tl = gsap.timeline();
      tl.to(mascot, { autoAlpha: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" })
        .to(bubble,  { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }, "-=0.2")
        .to(bubbleText, { text: "Click the button!", duration: 1, ease: "none" })
        .add(() => {
          pulseRef.current = gsap.to(btn, {
            scale: 1.05, yoyo: true, repeat: -1, duration: 0.8, ease: "sine.inOut",
          });
        });
    }, 100);
    const flyInto = (
      tl: gsap.core.Timeline,
      doc: HTMLDivElement,
      folder: HTMLDivElement,
      landed: HTMLDivElement,
      finalScale: number,
      position: string | number = ">"
    ) => {
      const start = doc.getBoundingClientRect();
      const end   = folder.getBoundingClientRect();
      const x = (end.left + end.width  / 2) - (start.left + start.width  / 2);
      const y =  end.top                    -  start.top;
      tl
        .to(doc, {
          motionPath: {
            path: [{ x: x * 0.2, y: -60 }, { x, y: y - 20 }],
            curviness: 1.5,
          },
          rotation: 0,
          scale: 0.15,
          duration: 1.2,
          ease: "power2.inOut",
        }, position)
        .call(() => { gsap.set(doc, { zIndex: 8 }); })
        .to(doc, { y: `+=${y + 80}`, duration: 0.4, ease: "power1.out" })
        .set(doc, { autoAlpha: 0 })
        .to(landed, { autoAlpha: 1, duration: 0.1 })
        .fromTo(landed,
          { scale: 0.8 },
          { scale: finalScale + 0.15, duration: 0.3, ease: "back.out(2)" }
        )
        .to(landed, { scale: finalScale, duration: 0.2, ease: "power2.out" });
    };
    const handleClick = () => {
      if (hasClicked.current) return;
      hasClicked.current = true;
      if (pulseRef.current) pulseRef.current.kill();
      gsap.to(btn, { autoAlpha: 0, scale: 0.8, duration: 0.2 });
      gsap.set(secondDoc, { autoAlpha: 1 });
      const isDesktop = window.innerWidth >= 1024;
      // ─────────────────────────────────────────────────
      // HOW TO ADJUST FINAL IMAGE SIZE AFTER ANIMATION:
      //
      // IMAGE 1 (resume / job description):
      //   • Mobile final size  → change the first number  e.g. 1.0
      //   • Desktop final size → change the second number e.g. 1.4
      //
      // IMAGE 2 (candidate pool resumes):
      //   • Mobile final size  → change the first number  e.g. 1.5
      //   • Desktop final size → change the second number e.g. 2.8
      //
      // Scale of 1.0 = original image size, 2.0 = double, 1.5 = 50% bigger
      // ─────────────────────────────────────────────────
      const scale1 = isDesktop ? 1.1 : 1.0;
      const scale2 = isDesktop ? 1.5 : 1.0;
      const tl = gsap.timeline();
      tl.to(bubbleText, { text: "Well Done...", duration: 0.5, ease: "none" });
      flyInto(tl, resumeDoc, folder1, landed1, scale1, "<");
      flyInto(tl, secondDoc, folder2, landed2, scale2, "-=1.0");
      tl.to(bubbleText, { text: "Now See Your Matched Candidates", duration: 1, ease: "none" });
    };
    btn.addEventListener("click", handleClick);
    return () => {
      clearTimeout(introTimer);
      btn.removeEventListener("click", handleClick);
      if (pulseRef.current) pulseRef.current.kill();
    };
  }, []);
  return (
    <section id="how-it-works" className="bg-[#F3F3FF] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* ── Heading — matched to global site font sizes ── */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-[#1C1C1C] font-beVietnam text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-semibold leading-tight flex items-center justify-center gap-3 flex-wrap">
            How
            <span className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-[70px] lg:h-[70px] xl:w-[76px] xl:h-[76px] relative flex-shrink-0">
              <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2 absolute left-0 top-0">
                <path d="M37.9367 0V38.0003H0L37.9367 0Z" fill="#9E56FF" />
              </svg>
              <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2 absolute right-0 bottom-0">
                <path d="M0 38.0004V0H37.9317L0 38.0004Z" fill="#5B00D6" />
              </svg>
            </span>
            RecruitRite Works
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#666] font-schibstedGrotesk max-w-2xl mx-auto font-normal leading-relaxed">
            From job description to live interview — see the whole journey, then try it yourself.
          </p>
        </div>
        {/* ── OUTER WRAPPER ── */}
        <div className="relative">
          <style>{`
            @media (max-width: 639px) {
              .resume-doc { width: 75px !important; left: -16px !important; }
            }
            /*
              ── LANDED IMAGE 2 SIZE CONTROL ──
              This is the ONLY place you need to change to adjust the
              second image (candidate pool resumes) size per breakpoint.
              HOW TO ADJUST:
              • Mobile (<640px)  → change width in the first block  e.g. 160px
              • Tablet (640-1023px) → change width in sm block      e.g. 220px
              • Desktop (1024px+)→ change width in lg block         e.g. 420px
              • Large desktop   → change width in xl block          e.g. 500px
              The GSAP animation scale (1.25) multiplies ON TOP of these sizes.
              So desktop 380px × 1.25 = ~475px final rendered size.
            */
            .landed2-img { width: 160px; }                        /* mobile   */
            @media (min-width: 640px)  { .landed2-img { width: 200px; } }  /* sm tablet */
            @media (min-width: 768px)  { .landed2-img { width: 260px; } }  /* md tablet */
            @media (min-width: 1024px) { .landed2-img { width: 380px; } }  /* lg desktop */
            @media (min-width: 1280px) { .landed2-img { width: 440px; } }  /* xl desktop */
            /*
              ── LANDED IMAGE 1 SIZE CONTROL ──
              Same pattern — adjust per breakpoint here.
            */
            .landed1-img { width: 80px; }
            @media (min-width: 640px)  { .landed1-img { width: 100px; } }
            @media (min-width: 768px)  { .landed1-img { width: 120px; } }
            @media (min-width: 1024px) { .landed1-img { width: 160px; } }  /* lg desktop */
            @media (min-width: 1280px) { .landed1-img { width: 180px; } }
          `}</style>
          {/* resum.png — flying doc */}
          <div
            ref={resumeDocRef}
            className="resume-doc absolute z-20"
            style={{
              left: "clamp(-4px, 2vw, 32px)",
              top: "clamp(32px, 4vw, 48px)",
              width: "clamp(100px, 12vw, 160px)",
              transform: "rotate(8deg)",
            }}
          >
            <Image src="/resum.png" alt="Resume" width={180} height={226} className="w-full h-auto" priority />
          </div>
          {/* secondfolderres.png — flying doc */}
          <div
            ref={secondDocRef}
            className="absolute z-20"
            style={{
              right: "clamp(8px, 5vw, 80px)",
              top: "clamp(8px, 2vw, 20px)",
              width: "clamp(50px, 7vw, 120px)",
            }}
          >
            <Image src="/secondfolderres.png" alt="Folder 2" width={120} height={104} className="w-full h-auto" />
          </div>
          {/* CTA Button */}
          <button
            ref={btnRef}
            className="absolute left-0 sm:left-4 md:left-8 lg:left-12 top-40 sm:top-36 md:top-40 bg-[#0F172A] text-white text-[10px] sm:text-sm px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-lg shadow-lg sm:whitespace-nowrap z-30 hover:bg-gray-800 transition-colors cursor-pointer w-[115px] sm:w-auto"
          >
            Click here to See magic Happen ✨
          </button>
          {/* Blue Container */}
          <div className="relative bg-[#C9DAFF] rounded-xl sm:rounded-2xl h-[550px] sm:h-[480px] md:h-[520px] lg:h-[540px] overflow-visible mx-6 sm:mx-20 md:mx-24 lg:mx-28">
            {/* Upload cards */}
            <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-8 md:gap-10 lg:gap-12 px-4 pt-16 sm:pt-0">
              {/* ── Folder 1 — Job Description ── */}
              <div className="flex flex-col items-center">
                <div
                  ref={folder1Ref}
                  className="relative w-[200px] h-[180px] sm:w-[190px] sm:h-[160px] md:w-[220px] md:h-[180px] lg:w-[300px] lg:h-[280px]"
                >
                  {/* LANDED IMAGE 1 — size controlled by .landed1-img in <style> above */}
                  <div
                    ref={landed1Ref}
                    className="absolute left-1/2 pointer-events-none"
                    style={{
                      bottom: "65%",
                      transform: "translateX(-50%)",
                      zIndex: 5,
                      opacity: 0,
                      visibility: "hidden",
                    }}
                  >
                    <Image
                      src="/resum.png"
                      alt="Resume landed"
                      width={180}
                      height={226}
                      className="landed1-img drop-shadow-xl"
                      style={{ height: "auto" }}
                    />
                  </div>
                  {/* Folder SVG — z-[10] */}
                  <Image src="/WHite bg folder.svg" alt="Upload Folder" fill className="object-contain" style={{ zIndex: 10 }} />
                  {/* Folder content — z-[15] */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-3 sm:pt-4 px-4" style={{ zIndex: 15 }}>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 relative">
                      <Image src="/Frame.png" alt="Upload" fill className="object-contain" />
                    </div>
                    <p className="mt-2 sm:mt-2.5 text-sm sm:text-base md:text-base font-medium text-[#0F172A] text-center">
                      Drag and Drop your<br />Job Description
                    </p>
                    <div className="mt-3 sm:mt-4 flex items-start gap-3 sm:gap-4 md:gap-5">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                          <Image src="/Chrome extension.png" alt="Chrome" fill className="object-contain" />
                        </div>
                        <span className="text-[10px] sm:text-xs text-[#64748B] text-center leading-tight">Add Chrome<br />Extension</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                          <Image src="/QR code.png" alt="QR" fill className="object-contain" />
                        </div>
                        <span className="text-[10px] sm:text-xs text-[#64748B] text-center leading-tight">Scan your<br />document</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ── ONLY CHANGE: font-schibstedGrotesk + lg:text-[34px] added ── */}
                <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-[30px] font-bold text-[#0F172A] text-center font-schibstedGrotesk">
                  Add Job Description
                </p>
              </div>
              {/* ── Folder 2 — Candidate Pool ── */}
              <div className="flex flex-col items-center">
                <div
                  ref={folder2Ref}
                  className="relative w-[200px] h-[180px] sm:w-[190px] sm:h-[160px] md:w-[220px] md:h-[180px] lg:w-[300px] lg:h-[280px]"
                >
                  {/* LANDED IMAGE 2 — size controlled by .landed2-img in <style> above */}
                  <div
                    ref={landed2Ref}
                    className="absolute left-1/2 pointer-events-none"
                    style={{
                      bottom: "80%",
                      transform: "translateX(-50%)",
                      zIndex: 5,
                      opacity: 0,
                      visibility: "hidden",
                    }}
                  >
                    <Image
                      src="/secondfolderres.png"
                      alt="Folder 2 landed"
                      width={300}
                      height={262}
                      className="landed2-img drop-shadow-xl"
                      style={{ height: "auto" }}
                    />
                  </div>
                  {/* Folder SVG — z-[10] */}
                  <Image src="/WHite bg folder.svg" alt="Upload Folder" fill className="object-contain" style={{ zIndex: 10 }} />
                  {/* Folder content — z-[15] */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-3 sm:pt-4 px-4" style={{ zIndex: 15 }}>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 relative">
                      <Image src="/Frame.png" alt="Upload" fill className="object-contain" />
                    </div>
                    <p className="mt-2 sm:mt-2.5 text-sm sm:text-base md:text-base font-medium text-[#0F172A] text-center">
                      Drag and Drop your<br />Candidate Resumes
                    </p>
                    <div className="mt-3 sm:mt-4 flex items-start gap-3 sm:gap-4 md:gap-5">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                          <Image src="/Chrome extension.png" alt="Chrome" fill className="object-contain" />
                        </div>
                        <span className="text-[10px] sm:text-xs text-[#64748B] text-center leading-tight">Add Chrome<br />Extension</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                          <Image src="/QR code.png" alt="QR" fill className="object-contain" />
                        </div>
                        <span className="text-[10px] sm:text-xs text-[#64748B] text-center leading-tight">Scan your<br />document</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ── ONLY CHANGE: font-schibstedGrotesk + lg:text-[34px] added ── */}
                <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-[30px] font-bold text-[#0F172A] text-center font-schibstedGrotesk">
                  Add Candidate Pool
                </p>
              </div>
            </div>
            {/* Robot */}
            <div className="absolute right-[-40px] sm:right-[-18px] md:right-[-10px] lg:right-[-5px] bottom-8 sm:bottom-12 md:bottom-14 lg:bottom-16 z-20">
              <div className="flex flex-col items-center pointer-events-none">
                <div
                  ref={bubbleRef}
                  className="absolute bottom-[150%] sm:bottom-[140%] right-[10px] sm:right-[30%] bg-[#E9D9FF] text-purple-900 px-4 py-3 rounded-2xl rounded-br-none shadow-md border-2 border-white min-w-[120px] max-w-[160px] text-center"
                  style={{ opacity: 0, visibility: "hidden" }}
                >
                  <p ref={bubbleTextRef} className="text-xs font-bold leading-snug" />
                  <div className="absolute -bottom-5 sm:-bottom-6 left-auto right-12 sm:right-10 flex gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0F172A] rounded-full" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#0F172A] rounded-full" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#0F172A] rounded-full" />
                  </div>
                </div>
                {/* Mascot */}
                <div
                  ref={mascotRef}
                  className="w-[100px] h-[125px] sm:w-[130px] sm:h-[163px] md:w-[140px] md:h-[175px] lg:w-[150px] lg:h-[188px] relative"
                  style={{ opacity: 0, visibility: "hidden" }}
                >
                  <Image
                    src="/AdobeExpressRobot_mascot_reviews_holographic_resumes11BackgroundRemoved2.png"
                    alt="Robot"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}