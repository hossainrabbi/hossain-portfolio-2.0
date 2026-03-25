import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-display font-bold tracking-tighter mb-2">
            HOSSAIN<span className="text-indigo-400">.</span>
          </span>
          <p className="text-sm font-mono text-gray-500 uppercase">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/hossainrabbi"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hossainrabbi"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
