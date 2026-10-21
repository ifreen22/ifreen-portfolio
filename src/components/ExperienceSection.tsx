import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

// --- IMAGE IMPORTS ---
import imgTeaching from '@/assets/experience/ieee-teaching.jpg';
import imgTeam from '@/assets/experience/ieee-team.jpg';
import imgSpeech from '@/assets/experience/ieee-speech.jpg';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-slate-900 mb-4"
          >
            Experience & Leadership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-oleo-script text-lg text-slate-600 max-w-2xl mx-auto"
          >
             Bridging technology and management through large-scale event organization, financial logistics, and community leadership.
          </motion.p>
        </div>

        {/* --- EXPERIENCE CARD: IEEE --- */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* LEFT: TEXT CONTENT */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Event Management
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Leadership
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Core Committee Member
              </h3>
              <h4 className="text-xl text-blue-600 font-semibold mb-6">
                IEEE Student Branch, VIT Pune
              </h4>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>Aug 2025 - Present</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Pune, Maharashtra</span>
                </div>
              </div>

              {/* Responsibilities List (Refined for Professionalism) */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-blue-600" />
                  <p className="experience-highlight-copy text-slate-700 leading-relaxed text-sm md:text-base">
                    <strong>Flagship Event Leadership:</strong> Orchestrated <em>"Tech Pe Charcha"</em> featuring industry expert <em>Naveen Reddy (Telusko)</em>. Managed end-to-end logistics, finances, and crowd control for <strong>500+ attendees</strong>.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-blue-600" />
                  <p className="experience-highlight-copy text-slate-700 leading-relaxed text-sm md:text-base">
                    <strong>Revenue & Strategy:</strong> Executed strategic marketing campaigns and ticket sales, mastering real-world negotiation, persuasion, and brand positioning techniques.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-blue-600" />
                  <p className="experience-highlight-copy text-slate-700 leading-relaxed text-sm md:text-base">
                    <strong>Social Initiative:</strong> Led a technical visit to <em>Girme Vidyalaya</em>, teaching AI & Web Development basics to underprivileged students, bridging the digital divide.
                  </p>
                </li>
              </ul>
              
              {/* Impact Stats */}
              <div className="flex items-center gap-4 text-sm font-bold text-slate-900 border-t border-slate-200 pt-6">
                <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span>Resource Management</span>
                </div>
                <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>500+ Impacted</span>
                </div>
              </div>
            </div>

            {/* RIGHT: IMAGE COLLAGE */}
            <div className="relative bg-slate-200 min-h-[450px] lg:min-h-full">
              {/* Decorative Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 pointer-events-none" />
              
              <div className="absolute inset-0 p-4 grid grid-rows-2 gap-4">
                
                {/* TOP ROW: Team Pic (Wide) */}
                <div className="row-span-1 relative rounded-xl overflow-hidden shadow-lg group">
                  <img 
                    src={imgTeam} 
                    alt="IEEE Team" 
                    // FIXED: 'object-bottom' ensures students sitting are visible
                    className="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[10px] font-bold z-20">
                    The Team
                  </div>
                </div>

                {/* BOTTOM ROW: Split (Teaching + Speech) */}
                <div className="row-span-1 grid grid-cols-2 gap-4">
                  {/* Teaching Pic */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img 
                      src={imgTeaching} 
                      alt="Teaching AI" 
                      // FIXED: 'object-top' ensures your face is visible
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[10px] font-bold z-20">
                      Social Visit
                    </div>
                  </div>
                  
                  {/* Speech Pic */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img 
                      src={imgSpeech} 
                      alt="Public Speaking" 
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[10px] font-bold z-20">
                      Leadership
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};