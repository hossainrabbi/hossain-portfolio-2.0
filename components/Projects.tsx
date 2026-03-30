"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DownloadIcon, ExternalLink, Eye } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "ManpowerX",
    description:
      "Mission-driven LMS preparing Bangladeshi skilled workers with certifications to meet global job market demands.",
    image: "/images/manPowerX.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "SSL"],
    liveUrl: "https://manpowerx.org/",
    detailsUrl: "https://manpowerx.org/user-manual",
    githubUrl: "#",
  },
  {
    title: "DigiGo",
    description:
      "A digital HR and payroll management solution. Features complex data grids, employee management, and automated payroll calculations.",
    image: "/images/digigo.png",
    tags: ["React", "Ant Design", "TypeScript", "RTK Query"],
    liveUrl: "https://app.sbusiness.xyz",
    detailsUrl: "https://upscalebd.com/case-studies/2",
    githubUrl: "#",
  },
  {
    title: "Smart School",
    description:
      "A comprehensive school management system for managing students, teachers, classes, attendance, and results. Currently under development.",
    image: "/images/smart-school.png",
    tags: ["React", "Ant Design", "TypeScript", "RTK Query"],
    liveUrl: "https://smart-school-frontend-five.vercel.app",
    detailsUrl: "",
    githubUrl: "#",
  },
  {
    title: "ManpowerX App",
    description:
      "The ManpowerX app is currently in the design phase, and development is paused",
    image: "/images/manpowerX-app.jpeg",
    tags: ["React", "React Native", "TypeScript"],
    detailsUrl: "",
    githubUrl: "#",
    downloadLink: "/files/ManpowerX.apk",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  useEffect(() => {
    if (!sectionRef.current || !projectsRef.current) return;

    gsap.fromTo(
      projectsRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
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
    <section id="projects" ref={sectionRef} className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
              Selected Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium">
              Featured <span className="text-gradient">Projects</span>
            </h3>
          </div>

          {/* <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 mt-6 md:mt-0 group">
            <span className="font-mono text-sm uppercase tracking-wider">View All Projects</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a> */}
        </div>

        <div ref={projectsRef} className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}
            >
              <motion.div
                style={{ y: index % 2 === 0 ? y1 : y2 }}
                className="w-full lg:w-3/5 relative aspect-video rounded-3xl overflow-hidden glass-panel group"
              >
                <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />

                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={2000}
                    className="w-full h-auto transition-transform duration-[2000ms] ease-linear group-hover:-translate-y-[40%]"
                  />
                </div>
              </motion.div>

              <div className="w-full lg:w-2/5 space-y-6">
                <h4 className="text-3xl md:text-4xl font-display font-medium text-white">
                  {project.title}
                </h4>

                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                  {!!project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors group"
                    >
                      {/*<span className="font-medium">Live Demo</span>*/}
                      <ExternalLink
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </a>
                  )}

                  {!!project.detailsUrl && (
                    <a
                      href={project.detailsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                      {/*<span className="font-medium">Details</span>*/}
                      <Eye
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </a>
                  )}

                  {!!project.downloadLink && (
                    <a
                      href={project.downloadLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                      {/*<span className="font-medium">Details</span>*/}
                      <DownloadIcon
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
