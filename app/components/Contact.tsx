'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

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
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub Profile</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Ritika. Crafted with Next.js, Tailwind CSS & Framer Motion.</p>
            <p className="tracking-widest uppercase">Designed with a Cinematic Vision</p>
          </div>
        </motion.div>
      </div>