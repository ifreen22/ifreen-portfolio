import { motion } from 'framer-motion';

const profileImage = '/images/ifreen-profile.png'; 

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export const HeroSection = () => {
  return (
    // ID CHANGED TO "home" so it doesn't conflict with "about"
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-slate-50">
      
      {/* --- 1. BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-[100px]" 
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* LAYOUT CONTAINER: Professional Medium Width */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* --- 2. LEFT CONTENT --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Open to Work
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Future of AI
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-xl leading-relaxed mb-10">
            Hi, I'm <strong className="text-slate-900">Ifreen Siddiqui</strong>. A high-potential B.Tech CSE-AI student at VIT Pune, engineering real-world software solutions with Patent-backed innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-md">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3.5 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold text-sm hover:border-slate-400 hover:bg-slate-50 transition-all">
              Contact Me
            </a>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* BUCKET 1: ACADEMICS */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <h4 className="text-3xl font-bold text-slate-900">9.03</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">CGPA</p>
              <p className="text-[10px] text-slate-400 mt-1">Academic Excellence</p>
            </div>

            {/* BUCKET 2: SCHOLAR */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-baseline gap-1">
                <h4 className="text-xl font-bold text-slate-900">Infosys</h4>
              </div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">STEM Scholar</p>
              <p className="text-[10px] text-slate-400 mt-1">Selected via Interview</p>
            </div>

            {/* BUCKET 3: EXPERIENCE */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <h4 className="text-3xl font-bold text-slate-900">10+</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Projects</p>
              <p className="text-[10px] text-slate-400 mt-1">Software & AI</p>
            </div>

          </motion.div>
        </motion.div>

        {/* --- 3. RIGHT IMAGE (Sweet Spot Alignment) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end md:pr-24"
        >
          <div className="relative">
            {/* Rotated Background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-100 to-purple-100 rotate-6 transform scale-105" />
            
            {/* Image Container */}
            <div className="relative w-72 h-[20rem] md:w-80 md:h-[24rem] rounded-2xl overflow-hidden bg-white shadow-2xl border-4 border-white">
              <img
                src={profileImage}
                alt="Ifreen Siddiqui"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- 4. SCROLL INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Scroll</span>
      </motion.div>

    </section>
  );
};