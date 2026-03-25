"use client";

import { useForm } from "@formspree/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [state, handleSubmit] = useForm("mdojvnoy");
  const [visibleMessage, setVisibleMessage] = useState<
    "success" | "error" | null
  >(null);

  const prevSubmitting = useRef(false);

  useEffect(() => {
    if (prevSubmitting.current && !state.submitting) {
      if (state.succeeded) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisibleMessage("success");
        formRef.current?.reset();
      } else if (state.errors) {
        setVisibleMessage("error");
      }

      const timer = setTimeout(() => {
        setVisibleMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }

    prevSubmitting.current = state.submitting;
  }, [state.submitting, state.succeeded, state.errors]);

  useEffect(() => {
    if (!sectionRef.current || !formRef.current || !infoRef.current) return;

    gsap.fromTo(
      infoRef.current.children,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );

    gsap.fromTo(
      formRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 relative z-10 bg-black/50 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium">
            Let&apos;s build something{" "}
            <span className="text-gradient">amazing</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div ref={infoRef} className="space-y-12">
            <div>
              <h4 className="text-2xl font-display font-medium text-white mb-4">
                Contact Information
              </h4>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                I&apos;m currently open for new opportunities. Whether you have
                a question or just want to say hi, I&apos;ll try my best to get
                back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                  <Mail size={20} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-500 uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:hossainrabbi259@gmail.com"
                    className="text-lg text-white hover:text-indigo-400 transition-colors"
                  >
                    hossainrabbi259@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                  <Phone size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-500 uppercase">
                    Phone
                  </p>
                  <a
                    href="tel:+8801518712204"
                    className="text-lg text-white hover:text-purple-400 transition-colors"
                  >
                    +880 1518-712204
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                  <MapPin size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-500 uppercase">
                    Location
                  </p>
                  <p className="text-lg text-white">Pabna, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-panel p-8 md:p-10 rounded-3xl space-y-6"
          >
            {/* ✅ MESSAGE */}
            {visibleMessage && (
              <p
                className={`text-sm text-center p-3 rounded-md ${
                  visibleMessage === "success"
                    ? "text-green-400 bg-green-300/10"
                    : "text-red-400 bg-red-300/10"
                }`}
              >
                {visibleMessage === "success"
                  ? "✅ Message sent successfully!"
                  : "❌ Failed to send message"}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-mono text-gray-400 uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-mono text-gray-400 uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-mono text-gray-400 uppercase"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                placeholder="Enter subject"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-mono text-gray-400 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none"
                placeholder="Message..."
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-medium overflow-hidden transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                {state.submitting ? "Sending..." : "Send Message"}
                {!state.submitting && (
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                )}
              </span>
              <div className="absolute inset-0 bg-indigo-100 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
