"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Frontend Developer",
    company: "UpscaleBD Ltd",
    period: "Jan 2025 - Present",
    description:
      "Built and maintained complex React applications. Integrated RESTful APIs and optimized frontend performance for high-traffic sites.",
  },
  {
    role: "Junior Frontend Developer",
    company: "Market Access Analytics and Consultancy",
    period: "Jan 2023 - Dec 2024",
    description:
      "Started journey in web development. Developing scalable web applications using React, Redux-Saga and integrated RESTful APIs",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const items = timelineRef.current.querySelectorAll(".timeline-item");

    gsap.fromTo(
      items,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      },
    );
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
            Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium">
            Work <span className="text-gradient">Experience</span>
          </h3>
        </div>

        <div
          ref={timelineRef}
          className="relative border-l border-white/10 ml-4 md:ml-0"
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item mb-16 last:mb-0 pl-8 md:pl-12 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-1.5 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

              <div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h4 className="text-2xl font-display font-medium text-white group-hover:text-indigo-300 transition-colors">
                    {exp.role}
                  </h4>
                  <span className="text-sm font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 w-fit">
                    {exp.period}
                  </span>
                </div>
                <h5 className="text-lg text-gray-300 mb-4 font-medium">
                  {exp.company}
                </h5>
                <p className="text-gray-400 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
