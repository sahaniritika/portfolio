'use client';

import { motion } from 'framer-motion';
import { Cpu, Terminal, Wrench, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages & Core",
    icon: Terminal,
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    title: "Frameworks & UI",
    icon: Layers,
    skills: ["React", "Next.js 16", "Tailwind CSS", "Framer Motion", "Streamlit"],
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    title: "AI & Data Science",
    icon: Cpu,
    skills: ["OpenCV", "MobileNetV2", "Computer Vision", "Deep Learning Classifiers"],
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "group-hover:border-emerald-500/50"
  },
  {
    title: "Tools & Testing",
    icon: Wrench,
    skills: ["Git & GitHub", "GitHub Actions CI/CD", "Pytest", "VS Code", "PowerShell"],
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "group-hover:border-amber-500/50"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950 text-zinc-100 relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-indigo-400 text-xs uppercase tracking-[0.25em] font-medium mb-4">
            <Cpu className="w-3 h-3" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            The Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Toolkit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 ${cat.borderColor} transition-all duration-300 backdrop-blur-sm`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-wide">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {cat.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex}
                      className="px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-zinc-800/90 text-zinc-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}