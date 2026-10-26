'use client';

import { motion } from 'framer-motion';
import { Film, ExternalLink, Cpu } from 'lucide-react';

const projects = [
  {
    title: "ChromaCloak AI",
    tagline: "Invisible Cloak & Computer Vision App",
    description: "An advanced OpenCV-based invisibility cloak effect implemented in Python (`invisible.py`, `app.py`) with automated video-to-GIF processing.",
    tech: ["Python", "OpenCV", "Streamlit", "Computer Vision"],
    github: "https://github.com/sahaniritika/ChromaCloak-AI"
  },
  {
    title: "SmartBite AI",
    tagline: "Food Freshness & Decay Detector",
    description: "A two-person team project using MobileNetV2 deep learning classification and OpenCV for real-time fruit freshness analysis and quality prediction.",
    tech: ["Python", "MobileNetV2", "OpenCV", "Streamlit", "Deep Learning"],
    github: "https://github.com/sahaniritika"
  },
  {
    title: "Automated Software Testing",
    tagline: "CI/CD Pipeline & Unit Testing",
    description: "Robust Python test suite using Pytest for BankAccount class unit tests, generating detailed HTML test reports via automated GitHub Actions CI/CD workflows.",
    tech: ["Python", "Pytest", "GitHub Actions", "CI/CD"],
    github: "https://github.com/sahaniritika/software_testing_project"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950 text-zinc-100 relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-indigo-400 text-xs uppercase tracking-[0.25em] font-medium mb-4">
            <Film className="w-3 h-3" />
            Featured Screenings
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-800/80 text-indigo-300 border border-zinc-700">
                    {project.tagline}
                  </span>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIndex) => (
                    <span key={tIndex} className="text-[11px] font-medium px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800/80 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}