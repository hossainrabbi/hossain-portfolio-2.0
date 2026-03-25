"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Cpu, Layers, Layout, Smartphone, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: "Frontend Frameworks",
    description: "React, Next.js, TypeScript, JavaScript (ES6+)",
    icon: <Code2 size={32} className="text-indigo-400" />,
  },
  {
    title: "Styling & UI Libraries",
    description:
      "Tailwind CSS, Ant Design (antd), CSS Modules, Styled Components",
    icon: <Layout size={32} className="text-purple-400" />,
  },
  {
    title: "Mobile Development",
    description: "React Native (Beginner), Expo, Cross-platform Apps",
    icon: <Smartphone size={32} className="text-emerald-400" />,
  },
  {
    title: "State Management",
    description: "Redux, Context API, Zustand, React Query",
    icon: <Layers size={32} className="text-yellow-400" />,
  },
  {
    title: "Backend Integration",
    description: "REST APIs, Node.js, MongoDB, Firebase",
    icon: <Cpu size={32} className="text-blue-400" />,
  },
  {
    title: "Performance & Tools",
    description: "Git, Webpack, Vite, Code Splitting",
    icon: <Zap size={32} className="text-pink-400" />,
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.children,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 relative z-10 bg-black/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
            Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium">
            My <span className="text-gradient">Skills</span> & Tools
          </h3>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                {skill.icon}
              </div>

              <h4 className="text-2xl font-display font-medium text-white mb-3">
                {skill.title}
              </h4>

              <p className="text-gray-400 font-light leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
