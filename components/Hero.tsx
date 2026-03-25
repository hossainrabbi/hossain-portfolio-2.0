"use client";

import gsap from "gsap";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.innerText.split("");
    textRef.current.innerText = "";

    chars.forEach((char) => {
      const span = document.createElement("span");
      span.innerText = char;
      span.style.opacity = "0";
      span.style.display = "inline-block";
      if (char === " ") span.style.width = "0.5em";
      textRef.current?.appendChild(span);
    });

    gsap.to(textRef.current.children, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      stagger: 0.02,
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
      startAt: { y: 20, rotateX: -90 },
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
            Available for work
          </span>
        </motion.div>

        <h1
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold  mb-6 leading-[1.1] perspective-1000"
        >
          Crafting Seamless Web Experiences
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-sans font-light"
        >
          I build robust, scalable web applications using React, Next.js, and
          modern frontend ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-indigo-100 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </a>

          <a
            href="/files/Hossain-Rabbi-Resume.pdf"
            target="_blank"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors"
          >
            Resume{" "}
            <Download
              size={18}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
