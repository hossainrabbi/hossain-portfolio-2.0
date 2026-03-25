"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !imageRef.current) return;

    gsap.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0, rotate: -5 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      },
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="space-y-8">
            <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium leading-tight">
              Building robust{" "}
              <span className="text-gradient">web applications</span> and{" "}
              <span className="text-gradient">interfaces</span>.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              With a strong focus on React, Next.js, and TypeScript, I craft
              digital experiences that are highly performant, scalable, and
              accessible.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              My approach combines clean code architecture with modern styling
              solutions like Tailwind CSS and Ant Design. I believe that great
              software should be maintainable, intuitive, and run flawlessly
              across all devices.
            </p>

            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
              <div>
                <h4 className="text-4xl font-display font-bold text-white mb-2">
                  3+
                </h4>
                <p className="text-sm font-mono text-gray-500 uppercase">
                  Years Experience
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-bold text-white mb-2">
                  15+
                </h4>
                <p className="text-sm font-mono text-gray-500 uppercase">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>

          <motion.div
            style={{ y }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden glass-panel p-2"
            ref={imageRef}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 mix-blend-overlay z-10 rounded-3xl" />
            <Image
              src="/images/HossainRabbi.jpeg"
              alt="Developer Workspace"
              fill
              className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
