'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950 text-zinc-100 relative overflow-hidden border-t border-zinc-900">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs uppercase tracking-[0.25em] font-medium mb-4">
            <MessageSquare className="w-3 h-3" />
            Epilogue &bull; Initiate Contact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Extraordinary</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

          <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Whether you have an exciting engineering role, an innovative project idea, or just want to discuss advanced web architectures and AI — my inbox is always open.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="mailto:ritika@example.com" 
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Direct Mail</span>
            </a>
            <a 
              href="https://github.com/sahaniritika" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium hover:bg-zinc-800/80 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Profile</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Ritika. Crafted with Next.js, Tailwind CSS & Framer Motion.</p>
            <p className="tracking-widest uppercase">Designed with a Cinematic Vision</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}