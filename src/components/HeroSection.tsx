import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  FileDown,
  Eye,
  GraduationCap,
  Sparkles,
  Trophy,
  Cpu,
  Users,
  Lightbulb,
  FileText,
  ShieldCheck,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Authentic images for interactive professional gallery
import imgTeam from '@/assets/experience/ieee-team.jpg';
import imgSpeech from '@/assets/experience/ieee-speech.jpg';
import imgTeaching from '@/assets/experience/ieee-teaching.jpg';

const profileImage = '/images/ifreen-profile.png';

// Count-up helper for numerical statistic cards
const HeroCountUp = ({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;
    const duration = 1500;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setVal(ease * target);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setVal(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return (
    <span>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const HeroSection = () => {
  // Gallery Tabs for Interactive Photo Showcase
  const [activeTab, setActiveTab] = useState<'portrait' | 'ieee' | 'presentation' | 'outreach'>('portrait');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);

  const galleryItems = [
    {
      id: 'portrait' as const,
      label: 'Portrait',
      image: profileImage,
      tag: 'Software Engineer',
      title: 'Ifreen Siddiqui',
      subtitle: 'B.Tech CSE (AI) • VIT Pune (9.16 CGPA)',
      objectPosition: 'object-top',
    },
    {
      id: 'ieee' as const,
      label: 'IEEE Event',
      image: imgTeam,
      tag: 'Executive Committee',
      title: 'IEEE Student Branch Team',
      subtitle: 'Led operations & logistics for 500+ attendees',
      objectPosition: 'object-bottom',
      imageScale: 'scale-[1.25] origin-bottom',
    },
    {
      id: 'presentation' as const,
      label: 'Presentation',
      image: imgSpeech,
      tag: 'Technical Keynote',
      title: 'Public Speaking & Leadership',
      subtitle: 'Flagship conclave technical communication',
      objectPosition: 'object-center',
    },
    {
      id: 'outreach' as const,
      label: 'AI Outreach',
      image: imgTeaching,
      tag: 'Social Initiative & Mentorship',
      title: 'School AI Awareness Initiative',
      subtitle: 'Teaching foundational AI & spreading tech literacy at Girme Vidyalaya',
      objectPosition: 'object-top',
    },
  ];

  const currentItem = galleryItems.find((item) => item.id === activeTab) || galleryItems[0];

  useEffect(() => {
    if (isGalleryPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = galleryItems.findIndex((item) => item.id === currentTab);
        return galleryItems[(currentIndex + 1) % galleryItems.length].id;
      });
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [activeTab, isGalleryPaused]);

  const showAdjacentImage = (direction: -1 | 1) => {
    setActiveTab((currentTab) => {
      const currentIndex = galleryItems.findIndex((item) => item.id === currentTab);
      const nextIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
      return galleryItems[nextIndex].id;
    });
  };

  const resumes = [
    {
      title: 'Software Engineering',
      description: 'Full-stack development, software architecture, and engineering projects.',
      file: '/images/Resume/Software_Engineering_Resume.pdf',
      downloadName: 'Ifreen-Siddiqui-Software-Engineering-Resume.pdf',
    },
    {
      title: 'Backend Engineering',
      description: 'Backend systems, APIs, databases, and scalable infrastructure.',
      file: '/images/Resume/Backend_Engineering_Resume.pdf',
      downloadName: 'Ifreen-Siddiqui-Backend-Engineering-Resume.pdf',
    },
    {
      title: 'Machine Learning & Data Science',
      description: 'Applied AI, machine learning, data science, and research.',
      file: '/images/Resume/ML_DataScience_Resume.pdf',
      downloadName: 'Ifreen-Siddiqui-Machine-Learning-Data-Science-Resume.pdf',
    },
  ];

  const tickerItems = [
    { icon: '🏆', text: 'Jaipur Cybrathon Rank 17/250 Finalists (3,000+ Teams)' },
    { icon: '🎓', text: 'Infosys STEM Scholar — Elite Interview-Selected Cohort' },
    { icon: '💡', text: 'Official Patent Granted — Smart Whiteboard Architecture' },
    { icon: '📄', text: 'Peer-Reviewed Research Paper Accepted' },
    { icon: '🤝', text: 'IEEE Executive Committee — 500+ Attendees Led' },
    { icon: '🚀', text: 'Industry-Sponsored AI Engineering Project' },
  ];

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-0 overflow-hidden bg-slate-50"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[20%] -right-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-200/25 to-purple-200/25 blur-[120px]"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto pt-2 pb-6">
        {/* Two-column layout with Left (Identity, CTAs & 6 Badges) and Right (Photo Gallery) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ========================================================
              LEFT COLUMN: IDENTITY, SUMMARY, ACTIONS & 6 BADGES
          ======================================================== */}
          <div className="lg:col-span-7 text-left flex flex-col justify-start">
            {/* 1. Recruiter Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide mb-3 shadow-xs hover:border-blue-300 transition-colors w-fit"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Software Engineering &amp; AI Internships (Summer 2027 • India • Remote • International)</span>
            </motion.div>

            {/* 2. Professional Engineering Identity Heading (Stepped up by one size scale) */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="blue-purple-heading text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight leading-[1.18] mb-10"
            >
              Software Engineer{" "}
              <span className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-[34px]">
                specializing in
              </span>
              <span className="block font-bold mt-1">
                Scalable Full-Stack &amp; AI Systems
              </span>
            </motion.h1>

            {/* 3. Executive Summary (16px, Inter Italic, with generous breathing room above & below) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="font-oleo-script text-base text-slate-500 max-w-2xl leading-relaxed mt-2 mb-5 sm:mb-6 font-normal"
            >
              B.Tech CS (AI) scholar at VIT Pune (9.16 CGPA), engineering high-performance full-stack architectures and real-world applied AI systems - recognized through national hackathon finals, patent innovation, and technical leadership.
            </motion.p>

            {/* 4. Primary CTA Actions & Recruiter Verification Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3 mb-4"
            >
              {/* Primary & Secondary Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="px-6 py-2.5 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsResumeModalOpen(true)}
                  className="px-6 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xs hover:border-slate-400 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-slate-600" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Minimal Recruiter Text Links with Dividers */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold text-slate-600 pt-0.5">
                <a
                  href="https://github.com/ifreen22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://www.linkedin.com/in/ifreen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:8fc07e2c-b354-4cf1-8ee0-cebfb6ccbb1f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  Research
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:8fc07e2c-b354-4cf1-8ee0-cebfb6ccbb1f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  Patent
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="mailto:ifreensiddiqui22@gmail.com"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  Email
                </a>
              </div>
            </motion.div>

            {/* 5. THE 6 BADGES: Utilizing blank space smoothly on left column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1"
            >
              {/* Card 1: CGPA */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-blue-300 transition-all duration-200">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                    <HeroCountUp target={9.16} decimals={2} />
                  </h4>
                  <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                </div>
                <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wide">CGPA 9.16</p>
                <p className="text-[10px] text-slate-500 font-medium truncate">Academic Rigor • VIT</p>
              </div>

              {/* Card 2: Hackathon */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-amber-300 transition-all duration-200">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                    <HeroCountUp target={17} decimals={0} prefix="Rank " suffix="/250" />
                  </h4>
                  <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                </div>
                <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wide">Cybrathon Finalist</p>
                <p className="text-[10px] text-slate-500 font-medium truncate">Top 17 of 3k+ Teams</p>
              </div>

              {/* Card 3: Industry Project */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-emerald-300 transition-all duration-200">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">Selected</h4>
                  <Cpu className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>
                <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wide">Industry AI</p>
                <p className="text-[10px] text-slate-500 font-medium truncate">Sponsored Project</p>
              </div>

              {/* Card 4: Research Paper */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-purple-300 transition-all duration-200">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">Accepted</h4>
                  <FileText className="w-4 h-4 text-purple-600 shrink-0" />
                </div>
                <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wide">Research Paper</p>
                <p className="text-[10px] text-slate-500 font-medium truncate">Peer-Reviewed ML</p>
              </div>

              {/* Card 5: Patent */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-rose-300 transition-all duration-200">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">Granted</h4>
                  <Lightbulb className="w-4 h-4 text-rose-500 shrink-0" />
                </div>
                <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wide">Official Patent</p>
                <p className="text-[10px] text-slate-500 font-medium truncate">Smart Whiteboard IP</p>
              </div>

              {/* Card 6: IEEE Leadership */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-indigo-300 transition-all duration-200">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">Exec Comm</h4>
                  <Users className="w-4 h-4 text-indigo-600 shrink-0" />
                </div>
                <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wide">IEEE Leadership</p>
                <p className="text-[10px] text-slate-500 font-medium truncate">500+ Attendees Led</p>
              </div>
            </motion.div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: INTERACTIVE PROFESSIONAL GALLERY
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start"
          >
            <div
              className="w-full max-w-md"
              onMouseEnter={() => setIsGalleryPaused(true)}
              onMouseLeave={() => setIsGalleryPaused(false)}
              onFocus={() => setIsGalleryPaused(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setIsGalleryPaused(false);
                }
              }}
            >
              {/* Interactive Tabs Header */}
              <div className="flex items-center justify-between gap-1 p-1 bg-slate-200/60 rounded-2xl mb-2.5 overflow-x-auto max-w-full">
                {galleryItems.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={activeTab === tab.id}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Main Image Showcase with Increased Height */}
              <div className="relative group" aria-roledescription="carousel" aria-label="Professional photo gallery">
                {/* Diffuse Radiant Aura */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/20 blur-2xl transform group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

                {/* Image Frame - Increased height to ~27-30rem to match the left column seamlessly */}
                <div className="relative w-full h-[26rem] sm:h-[28.5rem] lg:h-[30.5rem] rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border-4 border-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentItem.id}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={currentItem.image}
                        alt={currentItem.title}
                        className={`w-full h-full object-cover brightness-110 contrast-105 ${currentItem.objectPosition} ${'imageScale' in currentItem ? currentItem.imageScale : ''}`}
                      />

                      {/* Scrim Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent pointer-events-none" />

                      {/* Caption & Metadata Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-600/90 text-[10px] font-bold uppercase tracking-wider mb-1 shadow-xs">
                          {currentItem.tag}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                          {currentItem.title}
                        </h4>
                        <p className="text-xs text-slate-300 mt-0.5 font-medium">
                          {currentItem.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={() => showAdjacentImage(-1)}
                    aria-label="Show previous gallery image"
                    className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-slate-900 shadow-md backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => showAdjacentImage(1)}
                    aria-label="Show next gallery image"
                    className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-slate-900 shadow-md backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Floating Verified Badge */}
                <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-[11px] font-bold text-slate-800">
                    Documented Evidence
                  </span>
                </div>
              </div>

              {/* Gallery Indicator Helper */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <ImageIcon className="w-3.5 h-3.5 text-slate-400" />
                  Interactive Professional Gallery
                </span>
                <span className="font-mono text-[10px]">
                  {galleryItems.findIndex((i) => i.id === activeTab) + 1} / {galleryItems.length}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          INFINITE ACHIEVEMENT TICKER (BASE RIBBON)
      ======================================================== */}
      <div className="relative w-full bg-slate-900 border-y border-slate-800 py-3.5 overflow-hidden mt-8">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {/* Track 1 */}
          <div className="flex items-center gap-8 shrink-0 pr-8">
            {tickerItems.map((item, idx) => (
              <div
                key={`track1-${idx}`}
                className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 whitespace-nowrap"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 ml-6" />
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for Seamless Infinite Loop) */}
          <div className="flex items-center gap-8 shrink-0 pr-8">
            {tickerItems.map((item, idx) => (
              <div
                key={`track2-${idx}`}
                className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 whitespace-nowrap"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 ml-6" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Self-Contained Resume Chooser Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative z-10 w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsResumeModalOpen(false)}
                className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>

              <div className="space-y-2 pr-6 mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Choose a resume</h2>
                <p className="text-sm leading-relaxed text-slate-600">
                  Select the version that best fits the role. You can preview it in a new tab or download the PDF.
                </p>
              </div>

              <div className="space-y-3">
                {resumes.map((resume) => (
                  <div
                    key={resume.file}
                    className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/40"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 rounded-lg bg-white p-2 text-blue-600 shadow-sm ring-1 ring-slate-200">
                          <FileText className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900">{resume.title}</h3>
                          <p className="mt-1 text-xs leading-relaxed text-slate-600">{resume.description}</p>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-2 pl-11 sm:pl-0">
                        <a
                          href={resume.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                          View
                        </a>
                        <a
                          href={resume.file}
                          download={resume.downloadName}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
