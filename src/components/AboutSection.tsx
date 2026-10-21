import { motion } from 'framer-motion';
import { Layers, Cpu, ShieldCheck, Zap } from 'lucide-react';
import imgSpeech from '@/assets/experience/ieee-speech.jpg';

export const AboutSection = () => {
  // Architectural pillars
  const engineeringPillars = [
    {
      num: '01',
      title: 'Architecture First',
      desc: 'Modular decoupled services, clean schemas & API-first design',
      icon: Layers,
      color: 'text-blue-600',
      border: 'hover:border-blue-300',
    },
    {
      num: '02',
      title: 'Pragmatic AI',
      desc: 'Deploying machine learning models where they create measurable value',
      icon: Cpu,
      color: 'text-purple-600',
      border: 'hover:border-purple-300',
    },
    {
      num: '03',
      title: 'Production Rigor',
      desc: 'Defensive schema validation, strict type safety & automated CI/CD',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      border: 'hover:border-emerald-300',
    },
    {
      num: '04',
      title: 'Performance Mindset',
      desc: 'Low-latency async microservices & optimized query efficiency',
      icon: Zap,
      color: 'text-amber-600',
      border: 'hover:border-amber-300',
    },
  ];

  // Six focused, interactive domains
  const currentFocusAreas = [
    { name: 'Scalable Backend APIs', icon: '⚡', hover: 'hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50/40' },
    { name: 'Applied AI & Vision Pipelines', icon: '🧠', hover: 'hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50/40' },
    { name: 'Distributed Systems & Caching', icon: '🌐', hover: 'hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-50/40' },
    { name: 'Database Architecture & ACID', icon: '🗄️', hover: 'hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50/40' },
    { name: 'Cloud & Container Workflows', icon: '☁️', hover: 'hover:border-sky-400 hover:text-sky-700 hover:bg-sky-50/40' },
    { name: 'System Design Principles', icon: '📐', hover: 'hover:border-rose-400 hover:text-rose-700 hover:bg-rose-50/40' },
  ];

  return (
    <section
      id="about"
      aria-label="About Me"
      className="relative bg-slate-50 py-14 sm:py-16 md:py-20 px-6 md:px-12 border-t border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* ========================================================
              LEFT COLUMN: AUTHENTIC LEADERSHIP & SPEAKING IMAGE
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 h-full flex flex-col justify-center"
          >
            <div className="relative w-full h-full min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200/90 group">
              <img
                src={imgSpeech}
                alt="Ifreen Siddiqui speaking at an IEEE engineering conclave"
                className="w-full h-full object-cover object-center brightness-110 contrast-105 transform transition-transform duration-700 ease-out group-hover:scale-103"
              />

              {/* Clean Bottom Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent pointer-events-none" />

              {/* Verified Leadership Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-600/90 text-[10px] font-bold uppercase tracking-wider mb-1.5 shadow-xs">
                  Leadership &amp; Outreach
                </span>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">
                  IEEE Technical Conclave &amp; AI Outreach
                </p>
                <p className="text-xs text-slate-300 mt-0.5 font-medium">
                  Public speaking &amp; spreading AI literacy to school students
                </p>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: ACHIEVEMENT-BACKED IDENTITY & APPROACH
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-5 lg:space-y-6"
          >
            {/* 1. Header & Headline */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                ABOUT ME
              </span>
              <h2 className="blue-purple-heading text-3xl sm:text-4xl lg:text-4xl font-bold leading-[1.2] tracking-tight">
                Building Intelligent Software
                <br />
                for Real-World Impact.
              </h2>
            </div>

            {/* 2. Achievement-Driven Identity in Clean Professional Typography */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Engineering Identity
              </h3>
              <p className="font-oleo-script text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Computer Science (AI) student at VIT Pune (9.16 CGPA) passionate about backend engineering and AI. National Hackathon Finalist (Rank 17/250), research author, and smart whiteboard patent contributor.
              </p>
            </div>

            {/* 3. Core Architectural Pillars (How I Engineer Software) */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                How I Engineer Software
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {engineeringPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.num}
                      className={`p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs ${pillar.border} hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono text-xs font-bold ${pillar.color}`}>
                          {pillar.num}.
                        </span>
                        <Icon className={`w-3.5 h-3.5 ${pillar.color}`} />
                        <h4 className="text-sm font-bold text-slate-900">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 font-medium leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Current Focus: Interactive Engineering Badges */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Current Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentFocusAreas.map((focus) => (
                  <div
                    key={focus.name}
                    className={`group/focus inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 ${focus.hover} transition-all duration-200 cursor-default select-none`}
                  >
                    <span className="text-xs group-hover/focus:scale-115 transition-transform duration-200">
                      {focus.icon}
                    </span>
                    <span>{focus.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
