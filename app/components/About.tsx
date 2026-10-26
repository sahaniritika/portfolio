'use client';

import { motion } from 'framer-motion';
import { User, Code2 } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-950 text-zinc-100 relative overflow-hidden border-t border-zinc-900">
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs uppercase tracking-[0.25em] font-medium mb-4">
            <User className="w-3 h-3" />
            Prologue &bull; The Developer
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Purpose</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
            {/* Developer Photo Frame */}
            <div className="relative mx-auto w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity" />
              <img 
                src="/ritika.jpg" 
                alt="Ritika" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Hi there, I&apos;m Ritika.
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed font-light">
                I am a Full-Stack Software Developer who loves bridging the gap between rigorous technical architecture and immersive visual storytelling. Whether it&apos;s training computer vision models with Python & OpenCV or architecting responsive web applications with Next.js and TypeScript, I focus on clean code and exceptional user experience.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Currently exploring advanced AI applications, full-stack ecosystems, and modern motion design. Open to software development internships and engineering roles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}