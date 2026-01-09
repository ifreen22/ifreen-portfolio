// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Award, Trophy, Code2, Bug } from 'lucide-react';

// const achievements = [
//   {
//     title: 'Infosys Foundation STEM Scholarship',
//     type: 'Scholarship',
//     icon: Award,
//     highlight: true,
//   },
//   {
//     title: 'C Programming Certification',
//     type: 'Certification',
//     icon: Code2,
//     highlight: false,
//   },
//   {
//     title: 'Python Programming Certification',
//     type: 'Certification',
//     icon: Code2,
//     highlight: false,
//   },
//   {
//     title: 'Hackathon of Codezilla',
//     type: 'Participant',
//     icon: Trophy,
//     highlight: false,
//   },
//   {
//     title: 'BugFather Debugging Competition',
//     type: 'Participant',
//     icon: Bug,
//     highlight: false,
//   },
// ];

// export const CertificationsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   return (
//     <section id="certifications" className="bg-muted/30">
//       <div className="section-container" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="section-title">Certifications & Achievements</h2>
//           <p className="section-subtitle max-w-2xl mx-auto">
//             Recognitions, certifications, and competitive experiences
//           </p>
//         </motion.div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
//           {achievements.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
//               className={`glass-card p-5 card-hover ${
//                 item.highlight ? 'ring-2 ring-primary/30 bg-primary/5' : ''
//               }`}
//             >
//               <div className="flex items-start gap-4">
//                 <div className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 ${
//                   item.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
//                 }`}>
//                   <item.icon size={22} />
//                 </div>
//                 <div>
//                   <span className={`text-xs font-medium uppercase tracking-wider ${
//                     item.highlight ? 'text-primary' : 'text-muted-foreground'
//                   }`}>
//                     {item.type}
//                   </span>
//                   <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };




// import { motion } from "framer-motion";
// import { Quote, Trophy, Award, ExternalLink } from "lucide-react";

// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
// import trophies from "@/assets/achievements/awards-collection.jpg";

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-16 px-4 bg-muted/20">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Header - Compact */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b pb-4">
//           <div>
//             <h2 className="text-3xl font-serif font-bold text-foreground">
//               Achievements & Recognition
//             </h2>
//             <p className="text-sm text-muted-foreground mt-1 max-w-xl">
//               Honored by Municipal Corporations and Academic Institutions for excellence.
//             </p>
//           </div>
//           <a
//             href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
//           >
//             View All Proofs <ExternalLink className="w-4 h-4" />
//           </a>
//         </div>

//         {/* BENTO GRID - Zero White Space Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-[minmax(180px,auto)]">
          
//           {/* 1. NEWSPAPER (Left Vertical Column) 
//               Logic: Spans 2 rows vertically. object-left cuts the blank right side. */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="md:col-span-3 md:row-span-2 relative group overflow-hidden rounded-xl border bg-white"
//           >
//             <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold">
//               Media Coverage
//             </div>
//             <img
//               src={newspaper}
//               alt="Newspaper Clipping"
//               // object-left forces the image to align left, cutting off the blank right side
//               className="w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
//             />
//             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
//               <p className="text-white text-xs font-medium leading-tight">
//                 "Outstanding Academic Merit" <br/> 
//                 <span className="opacity-75 text-[10px]">Kalyan Municipal Corporation</span>
//               </p>
//             </div>
//           </motion.div>

//           {/* 2. MAJOR AWARD TEXT (Top Middle) */}
//           <div className="md:col-span-5 bg-card border rounded-xl p-5 flex flex-col justify-center relative overflow-hidden">
//             <div className="absolute top-0 right-0 p-3 opacity-5">
//               <Trophy className="w-24 h-24" />
//             </div>
//             <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Top Honor</span>
//             <h3 className="text-lg font-bold leading-tight mb-2">
//               Kalyan Municipal Corporation Award
//             </h3>
//             <p className="text-sm text-muted-foreground">
//               Secured <strong>1st Rank</strong> among 319 schools. Recognized for highest academic standing in the district.
//             </p>
//             <p className="text-xs text-muted-foreground mt-3 font-mono">
//               November 2018 • Academic Excellence
//             </p>
//           </div>

//           {/* 3. CEREMONY IMAGE (Top Right - Big) 
//               Logic: Visual focus, fills space tightly */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="md:col-span-4 md:row-span-2 relative rounded-xl border overflow-hidden bg-muted"
//           >
//             <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
//               Felicitation Ceremony
//             </div>
//             <img
//               src={ceremony}
//               alt="Award Ceremony"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           {/* 4. THE QUOTE / CITATION (Middle Middle)
//               Logic: Extracts text from the 'Yellow Certificate' concept */}
//           <div className="md:col-span-5 bg-amber-50/50 border border-amber-100 rounded-xl p-5 flex flex-col justify-center">
//             <Quote className="w-6 h-6 text-amber-400 mb-2 fill-current" />
//             <p className="text-sm font-medium text-amber-900 italic leading-relaxed">
//               "Awarded the <span className="font-bold not-italic">Best Student Award</span> for consistent discipline, leadership qualities, and all-round excellence in academics and extracurriculars."
//             </p>
//             <div className="mt-3 flex items-center gap-2">
//               <div className="h-px bg-amber-200 flex-1"></div>
//               <span className="text-[10px] uppercase font-bold text-amber-700">Principal's Citation • 2021</span>
//             </div>
//           </div>

//           {/* 5. TROPHIES (Bottom Left - Wide) */}
//           <div className="md:col-span-4 bg-background border rounded-xl p-4 flex items-center gap-4">
//             <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-muted">
//               <img src={trophies} alt="Trophies" className="w-full h-full object-cover" />
//             </div>
//             <div>
//               <h4 className="font-bold text-sm">Awards Collection</h4>
//               <p className="text-xs text-muted-foreground mt-1">
//                 A collection of trophies and medals representing years of dedication.
//               </p>
//               <div className="flex gap-1 mt-2">
//                 <Award className="w-3 h-3 text-primary" />
//                 <Award className="w-3 h-3 text-primary" />
//                 <Award className="w-3 h-3 text-primary" />
//               </div>
//             </div>
//           </div>

//           {/* 6. SECONDARY AWARD (Bottom Right) */}
//           <div className="md:col-span-8 bg-background border rounded-xl p-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
//             <div className="flex-1">
//               <h4 className="font-bold text-sm flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-green-500"></span>
//                 Academic Excellence Award (2021-2022)
//               </h4>
//               <p className="text-xs text-muted-foreground mt-1">
//                 Consecutive recognition for maintaining top rank in Higher Secondary education.
//               </p>
//             </div>
//             <div className="flex gap-2 text-xs font-mono bg-muted px-3 py-1 rounded border">
//               <span>Rank: 01</span>
//               <span className="text-muted-foreground">|</span>
//               <span>Score: 9.1 CGPA</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };





// import { motion } from "framer-motion";
// import { Quote, Trophy, Award, ExternalLink, Medal } from "lucide-react";

// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
// import trophies from "@/assets/achievements/awards-collection.jpg";

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-16 px-4 bg-muted/20">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b pb-4">
//           <div>
//             <h2 className="text-3xl font-serif font-bold text-foreground">
//               Achievements & Recognition
//             </h2>
//             <p className="text-sm text-muted-foreground mt-1 max-w-xl">
//               Honored by Municipal Corporations and Academic Institutions for excellence.
//             </p>
//           </div>
//           <a
//             href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
//           >
//             View All Proofs <ExternalLink className="w-4 h-4" />
//           </a>
//         </div>

//         {/* BENTO GRID LAYOUT */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(160px,auto)]">
          
//           {/* 1. NEWSPAPER (Left Column - Tall) 
//               Logic: object-left cuts off the blank right side of the paper. */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="md:col-span-3 md:row-span-2 relative group overflow-hidden rounded-xl border bg-white h-full min-h-[350px]"
//           >
//             <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold">
//               Media Coverage
//             </div>
//             <img
//               src={newspaper}
//               alt="Newspaper Clipping"
//               className="w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
//             />
//             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10">
//               <p className="text-white text-xs font-medium leading-tight">
//                 "Outstanding Academic Merit"
//               </p>
//             </div>
//           </motion.div>

//           {/* 2. TOP MIDDLE: Main Award Text */}
//           <div className="md:col-span-5 bg-card border rounded-xl p-5 flex flex-col justify-center relative overflow-hidden">
//             <div className="absolute top-0 right-0 p-3 opacity-5">
//               <Trophy className="w-24 h-24" />
//             </div>
//             <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Top Honor</span>
//             <h3 className="text-lg font-bold leading-tight mb-2">
//               Kalyan Municipal Corporation Award
//             </h3>
//             <p className="text-sm text-muted-foreground">
//               Secured <strong>1st Rank</strong> among 319 schools. Recognized for highest academic standing in the district.
//             </p>
//             <p className="text-xs text-muted-foreground mt-3 font-mono">
//               November 2018
//             </p>
//           </div>

//           {/* 3. CEREMONY IMAGE (Right Column - Tall) 
//               Logic: Takes vertical space to show the full event context. */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="md:col-span-4 md:row-span-2 relative rounded-xl border overflow-hidden bg-muted h-full min-h-[350px]"
//           >
//             <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
//               Felicitation Ceremony
//             </div>
//             <img
//               src={ceremony}
//               alt="Award Ceremony"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           {/* 4. MIDDLE CENTER: The Quote 
//               Logic: Fits perfectly under the main award text. */}
//           <div className="md:col-span-5 bg-amber-50/50 border border-amber-100 rounded-xl p-5 flex flex-col justify-center">
//             <Quote className="w-6 h-6 text-amber-400 mb-2 fill-current" />
//             <p className="text-sm font-medium text-amber-900 italic leading-relaxed">
//               "Awarded the <span className="font-bold not-italic">Best Student Award</span> for consistent discipline, leadership qualities, and all-round excellence."
//             </p>
//             <div className="mt-3 flex items-center gap-2">
//               <div className="h-px bg-amber-200 flex-1"></div>
//               <span className="text-[10px] uppercase font-bold text-amber-700">Principal's Citation • 2021</span>
//             </div>
//           </div>

// {/* 5. AWARDS COLLECTION (Bottom Left - FIXED) 
//               Strategy: Background Image Card. 
//               Allows the full width of the trophy collection to be seen. */}
//           <motion.div 
//             whileHover={{ scale: 1.01 }}
//             className="md:col-span-8 relative rounded-xl overflow-hidden min-h-[200px] group"
//           >
//             {/* Full Background Image */}
//             <img 
//               src={trophies} 
//               alt="Trophy Collection" 
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
//             />
            
//             {/* Dark Gradient Overlay for Text Readability */}
//             <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

//             {/* Content Floating on Top */}
//             <div className="relative z-10 p-6 h-full flex flex-col justify-center">
//               <div className="flex items-center gap-2 mb-2">
//                 <Trophy className="w-4 h-4 text-amber-400" />
//                 <span className="text-xs font-bold uppercase tracking-wide text-amber-400">
//                   Lifetime Collection
//                 </span>
//               </div>
//               <h4 className="text-xl font-bold text-white mb-2">
//                 Awards & Trophies
//               </h4>
//               <p className="text-sm text-gray-200 max-w-md leading-relaxed">
//                 A documented archive of medals, trophies, and certificates representing years of dedication in academics and extracurriculars.
//               </p>
//             </div>
//           </motion.div>

//           {/* 6. ACADEMIC EXCELLENCE (Bottom Right - FIXED) 
//               Strategy: Added a Visual Progress Bar to fill empty space. */}
//           <div className="md:col-span-4 bg-background border rounded-xl p-6 flex flex-col justify-between">
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Medal className="w-5 h-5 text-green-600" />
//                 <h4 className="font-bold text-sm">Academic Excellence</h4>
//               </div>
//               <p className="text-xs text-muted-foreground">
//                 Consistently ranked 1st in Higher Secondary (2021-2022).
//               </p>
//             </div>

//             {/* Visual Stat Bar to fill space */}
//             <div className="mt-4">
//               <div className="flex justify-between text-xs font-semibold mb-1">
//                 <span>Performance Score</span>
//                 <span>9.1/10</span>
//               </div>
//               <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
//                 <motion.div 
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "91%" }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                   className="h-full bg-green-500 rounded-full" 
//                 />
//               </div>
//               <div className="mt-2 text-[10px] text-muted-foreground text-right font-mono">
//                 RANK: 01
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };






// import { motion } from "framer-motion";
// import { Quote, Trophy, Award, ExternalLink, GraduationCap, Star, Mic, Brain, Zap, Code } from "lucide-react";

// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
// import trophies from "@/assets/achievements/awards-collection.jpg";

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-20 px-4 bg-slate-50/50">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-b pb-6">
//           <div>
//             <h2 className="text-4xl font-serif font-bold text-slate-900">
//               Achievements & Recognition
//             </h2>
//             <p className="text-base text-slate-600 mt-2 max-w-2xl">
//               A timeline of excellence ranging from <span className="font-semibold text-primary">National Scholarships</span> and <span className="font-semibold text-primary">Hackathons</span> to <span className="font-semibold text-primary">Public Speaking</span> and <span className="font-semibold text-primary">Sports</span>.
//             </p>
//           </div>
//           <a
//             href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
//           >
//             View Verified Proofs <ExternalLink className="w-4 h-4" />
//           </a>
//         </div>

//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(180px,auto)]">
          
//           {/* --- TOP ROW: THE CROWN JEWELS --- */}

//           {/* 1. MEDIA COVERAGE (Left - Tall) */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="md:col-span-3 md:row-span-2 relative group overflow-hidden rounded-2xl border border-slate-200 bg-white h-full min-h-[400px] shadow-sm hover:shadow-md transition-all"
//           >
//             <div className="absolute top-3 left-3 z-10 bg-black/80 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">
//               Press Release
//             </div>
//             <img
//               src={newspaper}
//               alt="Newspaper Clipping"
//               className="w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 pt-12">
//               <p className="text-white text-sm font-semibold leading-snug">
//                 "Outstanding Academic Merit"
//                 <span className="block text-slate-300 text-xs font-normal mt-1">Kalyan City Media Coverage</span>
//               </p>
//             </div>
//           </motion.div>

//           {/* 2. MAYOR'S AWARD (Top Center - The Big Historic Win) */}
//           <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden shadow-sm">
//             <div className="absolute top-0 right-0 p-4 opacity-5">
//               <Trophy className="w-32 h-32" />
//             </div>
//             <div className="flex items-start justify-between mb-3">
//               <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
//                 Rank 01 / 319 Schools
//               </span>
//               <span className="text-slate-400 text-xs font-mono">2016 - 2017</span>
//             </div>
//             <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">
//               Adarsh Vidyarthi Mahapaur Puraskar
//             </h3>
//             <p className="text-sm text-slate-600 font-medium">
//               (Ideal Student Mayor Award)
//             </p>
//             <p className="text-sm text-slate-500 mt-3 leading-relaxed">
//               Honored by <strong>Kalyan Dombivli Municipal Corporation</strong> for securing a historical score of <strong className="text-slate-900">98.75%</strong> in annual examinations, topping 319 schools.
//             </p>
//           </div>

//           {/* 3. INFOSYS SCHOLARSHIP (Top Right - The Big Current Win) */}
//           <div className="md:col-span-4 bg-blue-600 text-white rounded-2xl p-6 relative overflow-hidden shadow-md flex flex-col justify-between">
//             <div className="absolute -bottom-10 -right-10 bg-white/10 w-40 h-40 rounded-full blur-3xl"></div>
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                 <span className="text-xs font-bold uppercase tracking-widest opacity-90">Prestigious Grant</span>
//               </div>
//               <h3 className="text-xl font-bold mb-2">
//                 Infosys STEM Stars Scholar
//               </h3>
//               <p className="text-blue-100 text-sm leading-relaxed">
//                 Selected for the elite <strong>Infosys Foundation Scholarship (2024-25)</strong>. Acknowledged for potential in Science, Technology, Engineering, and Mathematics.
//               </p>
//             </div>
//             <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-end">
//               <span className="text-xs font-mono opacity-80">Feb 2025</span>
//               <img src="/api/placeholder/40/40" alt="Infosys Logo" className="opacity-0 w-8 h-8" /> {/* Placeholder for alignment */}
//             </div>
//           </div>

//           {/* --- MIDDLE ROW: TECHNICAL ARSENAL --- */}

//           {/* 4. HACKATHONS & COMPETITIONS (Wide Middle) */}
//           <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-center">
//             <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-4">
//               <Code className="w-4 h-4 text-purple-600" /> Hackathons & Coding
//             </h4>
//             <div className="space-y-3">
//               <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
//                 <span className="text-slate-700 font-medium">CodeZilla Hackathon</span>
//                 <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Jan 2025</span>
//               </div>
//               <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
//                 <span className="text-slate-700 font-medium">The BugFather (Debugging)</span>
//                 <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Jan 2025</span>
//               </div>
//               <div className="flex justify-between items-center text-sm">
//                 <span className="text-slate-700 font-medium">AI Tools Workshop (be10x)</span>
//                 <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Feb 2025</span>
//               </div>
//             </div>
//           </div>

//           {/* 5. CURRENT ACADEMIC STATUS (Middle Right) */}
//           <div className="md:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
//             <div>
//                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
//                 <GraduationCap className="w-4 h-4 text-green-600" /> B.Tech Engineering
//               </h4>
//               <p className="text-xs text-slate-500">Computer Science (AI)</p>
//             </div>
//             <div className="mt-4">
//               <div className="flex justify-between items-end mb-1">
//                 <span className="text-3xl font-bold text-slate-900">9.1 <span className="text-sm font-normal text-slate-500">SGPA</span></span>
//                 <span className="text-xs font-mono text-green-600 font-bold bg-green-50 px-2 py-1 rounded">TOP 5%</span>
//               </div>
//               <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-2">
//                 <div className="bg-green-500 h-full w-[91%]"></div>
//               </div>
//               <p className="text-[10px] text-slate-400 mt-2 text-right">Semester 3 • Dec 2025</p>
//             </div>
//           </div>

//           {/* --- BOTTOM ROW: THE "ALL-ROUNDER" SECTION (Your Request) --- */}
//           {/* Left Side: 3-4 Buckets of Details | Right Side: Image */}

//           <div className="md:col-span-12 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col md:flex-row h-auto md:min-h-[280px]">
            
//             {/* LEFT SIDE: The Details List (Span 5) */}
//             <div className="md:w-5/12 p-8 flex flex-col justify-center bg-white">
//               <div className="mb-6">
//                 <div className="flex items-center gap-2 mb-1">
//                   <Trophy className="w-4 h-4 text-amber-500" />
//                   <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Beyond Academics</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-900">The "All-Rounder" Proof</h3>
//                 <p className="text-sm text-slate-500 mt-1">Leadership, Oratory & Sports excellence.</p>
//               </div>

//               <div className="space-y-4">
//                 {/* Bucket 1: Speech */}
//                 <div className="flex gap-3 items-start">
//                   <div className="mt-1 bg-purple-100 p-1.5 rounded-md">
//                     <Mic className="w-4 h-4 text-purple-600" />
//                   </div>
//                   <div>
//                     <h5 className="text-sm font-bold text-slate-800">1st Prize: Speech Competition</h5>
//                     <p className="text-xs text-slate-500">Dr. Zakir Husain School • Jan 2020</p>
//                   </div>
//                 </div>

//                 {/* Bucket 2: Quiz */}
//                 <div className="flex gap-3 items-start">
//                   <div className="mt-1 bg-blue-100 p-1.5 rounded-md">
//                     <Brain className="w-4 h-4 text-blue-600" />
//                   </div>
//                   <div>
//                     <h5 className="text-sm font-bold text-slate-800">State Level Islamic Quiz</h5>
//                     <p className="text-xs text-slate-500">Secured 'Mumtaz' (Excellent) Grade • Sep 2018</p>
//                   </div>
//                 </div>

//                 {/* Bucket 3: Sports */}
//                 <div className="flex gap-3 items-start">
//                   <div className="mt-1 bg-orange-100 p-1.5 rounded-md">
//                     <Zap className="w-4 h-4 text-orange-600" />
//                   </div>
//                   <div>
//                     <h5 className="text-sm font-bold text-slate-800">1st Prize: Annual Sports (3-Legs Race)</h5>
//                     <p className="text-xs text-slate-500">Dr. Zakir Husain School • Jan 2020</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE: The Image (Span 7) - WIDE & VISIBLE */}
//             <div className="md:w-7/12 relative min-h-[300px] md:min-h-full">
//               <img 
//                 src={trophies} 
//                 alt="Award Collection" 
//                 className="absolute inset-0 w-full h-full object-cover" 
//               />
//               {/* Subtle Gradient to blend left edge */}
//               <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
              
//               {/* Overlay Text on Image */}
//               <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
//                  <p className="text-white text-xs font-medium">
//                    Lifetime Collection • 20+ Awards
//                  </p>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };





// import { motion } from "framer-motion";
// import { Quote, Trophy, Award, ExternalLink, GraduationCap, Star, Mic, Brain, Zap, Code, FileText } from "lucide-react";

// // --- FIXING YOUR IMPORTS HERE ---
// // 1. Matches your sidebar file: "kalyan-award-2018.jpg"
// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";

// // 2. Matches your sidebar file: "best-student-ceremony.jpg"
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";

// // 3. Matches your sidebar file: "awards-collection.jpg" 
// // (Ensure the new vertical photo is saved with this exact name)
// import trophies from "@/assets/achievements/awards-collection.jpg"; 

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-20 px-4 bg-slate-50/50">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-b pb-6">
//           <div>
//             <h2 className="text-4xl font-serif font-bold text-slate-900">
//               Achievements & Recognition
//             </h2>
//             <p className="text-base text-slate-600 mt-2 max-w-2xl">
//               A timeline of excellence ranging from <span className="font-semibold text-primary">National Scholarships</span> to <span className="font-semibold text-primary">Public Speaking</span> and <span className="font-semibold text-primary">Sports</span>.
//             </p>
//           </div>
//           <a
//             href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
//           >
//             View Verified Proofs <ExternalLink className="w-4 h-4" />
//           </a>
//         </div>

//         {/* MAIN GRID - Professional Bento Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(180px,auto)]">
          
//           {/* --- TOP ROW --- */}

//           {/* 1. MEDIA COVERAGE (Left - Tall) */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="md:col-span-3 md:row-span-2 relative group overflow-hidden rounded-2xl border border-slate-200 bg-white h-full min-h-[400px]"
//           >
//             <div className="absolute top-3 left-3 z-10 bg-black/80 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">
//               Press Release
//             </div>
//             <img
//               src={newspaper}
//               alt="Newspaper Clipping"
//               className="w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 pt-12">
//               <p className="text-white text-sm font-semibold leading-snug">
//                 "Outstanding Academic Merit"
//                 <span className="block text-slate-300 text-xs font-normal mt-1">Kalyan City Media Coverage</span>
//               </p>
//             </div>
//           </motion.div>

//           {/* 2. MAYOR'S AWARD (Top Center - Historic Win) */}
//           <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//             <div className="absolute top-0 right-0 p-4 opacity-5">
//               <Trophy className="w-32 h-32" />
//             </div>
//             <div className="flex items-start justify-between mb-3">
//               <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
//                 Rank 01 / 319 Schools
//               </span>
//               <span className="text-slate-400 text-xs font-mono">2016 - 2017</span>
//             </div>
//             <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">
//               Adarsh Vidyarthi Mahapaur Puraskar
//             </h3>
//             <p className="text-sm text-slate-600 font-medium">
//               (Ideal Student Mayor Award)
//             </p>
//             <p className="text-sm text-slate-500 mt-3 leading-relaxed">
//               Honored by <strong>Kalyan Dombivli Municipal Corporation</strong> for securing a historical score of <strong className="text-slate-900">98.75%</strong> in annual examinations.
//             </p>
//           </div>

//           {/* 3. CEREMONY PHOTO (Replaces Blue Card for Visual Balance) */}
//           <motion.div 
//              className="md:col-span-4 relative rounded-2xl overflow-hidden border border-slate-200 min-h-[250px]"
//           >
//             <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold px-2 py-1 rounded shadow-sm">
//               Felicitation Ceremony
//             </div>
//             <img 
//               src={ceremony} 
//               alt="Award Ceremony" 
//               className="w-full h-full object-cover" 
//             />
//           </motion.div>

//           {/* --- MIDDLE ROW --- */}

//           {/* 4. INFOSYS SCHOLARSHIP (Wide Blue Card) */}
//           <div className="md:col-span-8 bg-blue-600 text-white rounded-2xl p-6 relative overflow-hidden shadow-md flex items-center justify-between">
//             <div className="relative z-10 max-w-lg">
//               <div className="flex items-center gap-2 mb-2">
//                 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                 <span className="text-xs font-bold uppercase tracking-widest opacity-90">Prestigious Grant</span>
//               </div>
//               <h3 className="text-2xl font-bold mb-1">
//                 Infosys STEM Stars Scholar
//               </h3>
//               <p className="text-blue-100 text-sm">
//                 Selected for the elite <strong>Infosys Foundation Scholarship (2024-25)</strong>. Awarded for excellence in Science & Technology.
//               </p>
//             </div>
//             <div className="hidden md:block opacity-20">
//                {/* Decorative Icon */}
//                <Trophy className="w-24 h-24 text-white" />
//             </div>
//           </div>

//           {/* 5. ACADEMIC SCORE */}
//           <div className="md:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-center">
//             <div className="flex justify-between items-end mb-1">
//               <span className="text-4xl font-bold text-slate-900">9.1 <span className="text-sm font-normal text-slate-500">SGPA</span></span>
//               <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded">Distinction</span>
//             </div>
//             <p className="text-xs text-slate-500 mt-1">B.Tech Semester 3 • Dec 2025</p>
//             <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3">
//               <div className="bg-green-500 h-full w-[91%]"></div>
//             </div>
//           </div>

//           {/* --- BOTTOM ROW: CO-CURRICULAR & TROPHIES --- */}

//           {/* LEFT: Co-Curricular List (Span 7) */}
//           <div className="md:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-full justify-between">
//              <div className="mb-6">
//                 <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
//                   <Zap className="w-5 h-5 text-amber-500 fill-amber-500" /> Co-Curricular & Leadership
//                 </h3>
//                 <p className="text-sm text-slate-500 mt-1">A diverse skillset proving excellence beyond the classroom.</p>
//              </div>

//              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {/* Speech */}
//                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-purple-200 transition-colors">
//                   <div className="flex items-center gap-2 mb-1">
//                     <Mic className="w-4 h-4 text-purple-600" />
//                     <span className="font-bold text-sm text-slate-800">1st Prize: Speech</span>
//                   </div>
//                   <p className="text-xs text-slate-500">Dr. Zakir Husain School Competition (2020)</p>
//                 </div>

//                 {/* Quiz */}
//                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
//                   <div className="flex items-center gap-2 mb-1">
//                     <Brain className="w-4 h-4 text-blue-600" />
//                     <span className="font-bold text-sm text-slate-800">State Level Quiz</span>
//                   </div>
//                   <p className="text-xs text-slate-500">Secured 'Mumtaz' (Excellent) Grade (2018)</p>
//                 </div>

//                 {/* Sports */}
//                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-orange-200 transition-colors">
//                   <div className="flex items-center gap-2 mb-1">
//                     <Trophy className="w-4 h-4 text-orange-600" />
//                     <span className="font-bold text-sm text-slate-800">1st Prize: Sports</span>
//                   </div>
//                   <p className="text-xs text-slate-500">Annual Sports Meet - 3 Legs Race (2020)</p>
//                 </div>

//                 {/* Technical */}
//                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-green-200 transition-colors">
//                   <div className="flex items-center gap-2 mb-1">
//                     <FileText className="w-4 h-4 text-green-600" />
//                     <span className="font-bold text-sm text-slate-800">Excel Specialist</span>
//                   </div>
//                   <p className="text-xs text-slate-500">Udemy Advanced Certification (2025)</p>
//                 </div>
//              </div>
//           </div>

//           {/* RIGHT: TROPHY COLLECTION (Span 5) - Full Visibility */}
//           <div className="md:col-span-5 relative rounded-2xl overflow-hidden min-h-[400px] border border-slate-200 bg-slate-900">
//             {/* The Image */}
//             <img 
//               src={trophies} 
//               alt="Award Collection" 
//               className="w-full h-full object-contain" 
//             />
            
//             {/* Overlay Text */}
//             <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
//                <p className="text-white text-xs font-medium text-center opacity-90">
//                  Lifetime Achievement Collection
//                </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };





// import { motion } from "framer-motion";
// import { 
//   Trophy, ExternalLink, Star, 
//   Mic, Brain, Zap, Code, FileText, 
//   Award, Medal, CheckCircle2 
// } from "lucide-react";

// // --- YOUR IMAGE IMPORTS ---
// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
// import trophies from "@/assets/achievements/awards-collection.jpg"; 

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-20 px-4 bg-slate-50">
//       <div className="max-w-7xl mx-auto">
        
//         {/* 1. SECTION HEADER */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-slate-200 pb-6">
//           <div>
//             <h2 className="text-3xl font-serif font-bold text-slate-900">
//               Achievements & Certifications
//             </h2>
//             <p className="text-slate-600 mt-2 max-w-2xl">
//               A comprehensive record of National Scholarships, Technical Certifications, and Leadership Awards.
//             </p>
//           </div>
//           <a
//             href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
//           >
//             View Verified Drive Folder <ExternalLink className="w-4 h-4" />
//           </a>
//         </div>

//         {/* 2. THE "BIG WINS" (Top Tier) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
//             {/* CARD A: Mayor's Award */}
//             <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
//                 <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
//                     <Trophy className="w-24 h-24" />
//                 </div>
//                 <div className="relative z-10">
//                     <div className="flex justify-between items-start mb-4">
//                         <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
//                             Rank 01 / 319 Schools
//                         </span>
//                         <span className="text-slate-400 text-xs font-mono">2016-17</span>
//                     </div>
//                     <h3 className="text-xl font-bold text-slate-900 mb-2">
//                         Adarsh Vidyarthi Mahapaur Puraskar
//                     </h3>
//                     <p className="text-sm text-slate-600 mb-4">
//                         Honored by <strong>Kalyan Dombivli Municipal Corporation</strong> for securing a historical score of <strong className="text-slate-900">98.75%</strong>.
//                     </p>
//                     <div className="flex gap-2">
//                         <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">District Topper</span>
//                         <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Academic Excellence</span>
//                     </div>
//                 </div>
//             </div>

//             {/* CARD B: Infosys Scholarship */}
//             <div className="bg-blue-600 rounded-2xl p-6 shadow-md relative overflow-hidden text-white group hover:shadow-lg transition-all">
//                 <div className="absolute -bottom-10 -right-10 bg-white/10 w-48 h-48 rounded-full blur-3xl"></div>
//                 <div className="relative z-10">
//                     <div className="flex items-center gap-2 mb-4">
//                         <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                         <span className="text-xs font-bold uppercase tracking-widest opacity-90">Prestigious Grant</span>
//                     </div>
//                     <h3 className="text-xl font-bold mb-2">
//                         Infosys STEM Stars Scholar
//                     </h3>
//                     <p className="text-blue-100 text-sm mb-6 leading-relaxed">
//                         Selected for the elite <strong>Infosys Foundation Scholarship (2024-25)</strong>. Awarded to high-potential students in Engineering & Technology.
//                     </p>
//                     <div className="inline-flex items-center gap-2 bg-blue-700/50 px-3 py-1.5 rounded-full border border-blue-500/30 text-xs">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>Verified Selection • Feb 2025</span>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* 3. VISUAL PROOF & MASTER LIST */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
            
//             {/* COLUMN 1: VISUALS (Left Side) */}
//             <div className="md:col-span-3 flex flex-col gap-6 h-full">
//                 {/* Newspaper */}
//                 <div className="relative flex-1 rounded-2xl overflow-hidden border border-slate-200 bg-white min-h-[200px]">
//                     <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">Media Coverage</div>
//                     <img src={newspaper} alt="News" className="w-full h-full object-cover object-left" />
//                 </div>
//                 {/* Ceremony */}
//                 <div className="relative flex-1 rounded-2xl overflow-hidden border border-slate-200 bg-white min-h-[200px]">
//                     <div className="absolute top-2 left-2 z-10 bg-white/90 text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">Felicitation</div>
//                     <img src={ceremony} alt="Ceremony" className="w-full h-full object-cover" />
//                 </div>
//             </div>

//             {/* COLUMN 2: THE REFINED MASTER LIST (Middle) */}
//             <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 p-0 overflow-hidden flex flex-col h-full">
//                 <div className="p-4 border-b border-slate-100 bg-slate-50/50">
//                     <h4 className="font-bold text-slate-900 flex items-center gap-2">
//                         <Medal className="w-4 h-4 text-primary" /> Key Certifications
//                     </h4>
//                 </div>
                
//                 {/* Scrollable List - CLEANED UP */}
//                 <div className="overflow-y-auto p-4 space-y-3 custom-scrollbar">
                    
//                     {/* Category: Technical (Keep ALL these) */}
//                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Technical & Engineering</p>
                    
//                     <ListItem icon={Code} title="Python Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-600" />
//                     <ListItem icon={Code} title="C Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-600" />
//                     <ListItem icon={Code} title="Front End Development" subtitle="Simplilearn (SkillUp) • Apr 2025" color="text-purple-600" />
//                     <ListItem icon={FileText} title="Microsoft Excel: Basic to Advanced" subtitle="Udemy • 26 Hrs • Jan 2025" color="text-green-600" />
//                     <ListItem icon={Brain} title="AI Tools Workshop" subtitle="be10x • Feb 2025" color="text-pink-600" />
//                     <ListItem icon={Zap} title="CodeZilla Hackathon" subtitle="CSI VIT Pune • Participation • Jan 2025" color="text-orange-600" />
                    
//                     {/* SKIPPED: BugFather (Redundant with CodeZilla) */}

//                     {/* Category: Leadership (Keep only the BEST) */}
//                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2">Leadership & Co-Curricular</p>
                    
//                     <ListItem icon={Mic} title="1st Prize: Speech Competition" subtitle="Dr. Zakir Husain School • 2020" color="text-indigo-600" />
//                     <ListItem icon={Trophy} title="1st Prize: Sports (3-Legs Race)" subtitle="Annual Sports Meet • 2020" color="text-red-600" />

//                     {/* SKIPPED: 4th Std Award (Too old, Mayor Award covers it) */}
//                     {/* SKIPPED: Quiz 2018 (Too old) */}
                
//                 </div>
//             </div>

//             {/* COLUMN 3: TROPHY COLLECTION (Right Side) */}
//             <div className="md:col-span-4 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 relative h-[400px] md:h-full">
//                 <img src={trophies} alt="Trophies" className="w-full h-full object-contain" />
//                 <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
//                     <p className="text-white text-xs font-bold uppercase tracking-widest">Lifetime Collection</p>
//                 </div>
//             </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // Helper Component
// const ListItem = ({ icon: Icon, title, subtitle, color }: any) => (
//   <div className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
//     <div className={`mt-0.5 ${color}`}>
//         <Icon className="w-4 h-4" />
//     </div>
//     <div>
//         <h5 className="text-xs font-bold text-slate-800 leading-tight">{title}</h5>
//         <p className="text-[10px] text-slate-500">{subtitle}</p>
//     </div>
//   </div>
// );





// import { motion } from "framer-motion";
// import { 
//   Trophy, ExternalLink, Star, 
//   Mic, Brain, Zap, Code, FileText, 
//   Medal, CheckCircle2 
// } from "lucide-react";

// // --- YOUR IMAGE IMPORTS ---
// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
// import trophies from "@/assets/achievements/awards-collection.jpg"; 

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-20 px-4 bg-slate-50">
//       <div className="max-w-7xl mx-auto">
        
//         {/* 1. HEADER */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-6">
//           <div>
//             <h2 className="text-3xl font-serif font-bold text-slate-900">
//               Achievements & Certifications
//             </h2>
//             <p className="text-slate-600 mt-2 max-w-2xl">
//               A comprehensive record of National Scholarships, Technical Certifications, and Leadership Awards.
//             </p>
//           </div>
//           <a
//             href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
//           >
//             View Verified Drive Folder <ExternalLink className="w-4 h-4" />
//           </a>
//         </div>

//         {/* 2. TOP ROW (Big Wins) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//             {/* Mayor's Award */}
//             <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
//                 <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
//                     <Trophy className="w-24 h-24" />
//                 </div>
//                 <div className="relative z-10">
//                     <div className="flex justify-between items-start mb-4">
//                         <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
//                             Rank 01 / 319 Schools
//                         </span>
//                         <span className="text-slate-400 text-xs font-mono">2016-17</span>
//                     </div>
//                     <h3 className="text-2xl font-bold text-slate-900 mb-2">
//                         Adarsh Vidyarthi Mahapaur Puraskar
//                     </h3>
//                     <p className="text-sm text-slate-600 mb-4">
//                         Honored by <strong>Kalyan Dombivli Municipal Corporation</strong> for securing a historical score of <strong className="text-slate-900">98.75%</strong> in annual examinations.
//                     </p>
//                     <div className="flex gap-2">
//                         <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">District Topper</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Infosys Scholarship */}
//             <div className="bg-blue-600 rounded-2xl p-8 shadow-md relative overflow-hidden text-white group hover:shadow-lg transition-all">
//                 <div className="absolute -bottom-10 -right-10 bg-white/10 w-48 h-48 rounded-full blur-3xl"></div>
//                 <div className="relative z-10">
//                     <div className="flex items-center gap-2 mb-4">
//                         <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                         <span className="text-xs font-bold uppercase tracking-widest opacity-90">Prestigious Grant</span>
//                     </div>
//                     <h3 className="text-2xl font-bold mb-2">
//                         Infosys STEM Stars Scholar
//                     </h3>
//                     <p className="text-blue-100 text-sm mb-6 leading-relaxed">
//                         Selected for the elite <strong>Infosys Foundation Scholarship (2024-25)</strong>. Awarded to high-potential students in Engineering & Technology.
//                     </p>
//                     <div className="inline-flex items-center gap-2 bg-blue-700/50 px-3 py-1.5 rounded-full border border-blue-500/30 text-xs">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>Verified Selection • Feb 2025</span>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* 3. BOTTOM ROW (Visuals + Compact List) */}
//         {/* Changed items-stretch to items-start so list height doesn't force images to stretch weirdly */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
//             {/* LEFT: VISUALS (Span 3) */}
//             <div className="md:col-span-3 flex flex-col gap-4">
//                 <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white h-[240px] shadow-sm">
//                     <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">Media Coverage</div>
//                     <img src={newspaper} alt="News" className="w-full h-full object-cover object-left hover:scale-105 transition-transform duration-700" />
//                 </div>
//                 <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white h-[240px] shadow-sm">
//                     <div className="absolute top-2 left-2 z-10 bg-white/90 text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">Felicitation</div>
//                     <img src={ceremony} alt="Ceremony" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
//                 </div>
//             </div>

//             {/* MIDDLE: COMPACT LIST (Span 5) */}
//             <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col">
//                 <div className="p-4 border-b border-slate-100 bg-slate-50/50">
//                     <h4 className="font-bold text-slate-900 flex items-center gap-2">
//                         <Medal className="w-4 h-4 text-primary" /> Key Certifications
//                     </h4>
//                 </div>
                
//                 {/* COMPACT LIST: Reduced padding (p-3) and spacing (space-y-1) */}
//                 <div className="p-3">
                    
//                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Technical</p>
//                     <div className="space-y-1 mb-4">
//                         <ListItem icon={Code} title="Python Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-600" />
//                         <ListItem icon={Code} title="C Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-600" />
//                         <ListItem icon={Code} title="Front End Development" subtitle="Simplilearn • Apr 2025" color="text-purple-600" />
//                         <ListItem icon={FileText} title="Microsoft Excel: Advanced" subtitle="Udemy • Jan 2025" color="text-green-600" />
//                         <ListItem icon={Brain} title="AI Tools Workshop" subtitle="be10x • Feb 2025" color="text-pink-600" />
//                         <ListItem icon={Zap} title="CodeZilla Hackathon" subtitle="CSI VIT Pune • Jan 2025" color="text-orange-600" />
//                     </div>

//                     <div className="h-px bg-slate-100 my-2 mx-2"></div>

//                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Leadership</p>
//                     <div className="space-y-1">
//                         <ListItem icon={Mic} title="1st Prize: Speech Competition" subtitle="Dr. Zakir Husain School • 2020" color="text-indigo-600" />
//                         <ListItem icon={Trophy} title="1st Prize: Sports (3-Legs Race)" subtitle="Annual Sports Meet • 2020" color="text-red-600" />
//                     </div>
//                 </div>
//             </div>

//             {/* RIGHT: TROPHY COLLECTION (Span 4) */}
//             {/* Height adjusts to match the middle list naturally */}
//             <div className="md:col-span-4 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 relative h-[500px] shadow-sm">
//                 <img src={trophies} alt="Trophies" className="w-full h-full object-contain hover:scale-105 transition-transform duration-700" />
//                 <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-center">
//                     <p className="text-white text-xs font-bold uppercase tracking-widest border border-white/20 inline-block px-3 py-1 rounded-full backdrop-blur-md">
//                         Lifetime Collection
//                     </p>
//                 </div>
//             </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // COMPACT HELPER COMPONENT
// // Reduced padding to p-2 to save height
// const ListItem = ({ icon: Icon, title, subtitle, color }: any) => (
//   <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg transition-all group cursor-default">
//     <div className={`p-1.5 rounded-md bg-slate-50 group-hover:bg-white transition-colors ${color}`}>
//         <Icon className="w-4 h-4" />
//     </div>
//     <div>
//         <h5 className="text-xs font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors">{title}</h5>
//         <p className="text-[10px] text-slate-500">{subtitle}</p>
//     </div>
//   </div>
// );





// import { motion } from "framer-motion";
// import {
//   Trophy,
//   ExternalLink,
//   Star,
//   Mic,
//   Brain,
//   Zap,
//   Code,
//   FileText,
//   Medal,
//   CheckCircle2,
// } from "lucide-react";

// // IMAGE IMPORTS
// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
// import trophies from "@/assets/achievements/awards-collection.jpg";

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-24 px-4 bg-slate-50">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER (CENTERED) */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-serif font-bold text-slate-900">
//             Achievements & Certifications
//           </h2>
//           <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
//             A comprehensive record of National Scholarships, Technical Certifications,
//             and Leadership Awards.
//           </p>

//           <a
//             href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-blue-600 hover:text-blue-800"
//           >
//             View verified certificates <ExternalLink className="w-4 h-4" />
//           </a>
//         </div>

//         {/* TOP HIGHLIGHTS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//           {/* Municipal Award */}
//           <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
//             <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded">
//               Rank 01 / 319 Schools
//             </span>
//             <h3 className="text-2xl font-bold text-slate-900 mt-4">
//               Adarsh Vidyarthi Mahapaur Puraskar
//             </h3>
//             <p className="text-sm text-slate-500 mt-1">2016–2017</p>
//             <p className="text-sm text-slate-600 mt-4 leading-relaxed">
//               Honored by <strong>Kalyan Dombivli Municipal Corporation</strong> for
//               securing a historic <strong>98.75%</strong> in annual examinations.
//             </p>
//           </div>

//           {/* Infosys Scholarship */}
//           <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-md">
//             <div className="flex items-center gap-2 mb-4">
//               <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//               <span className="text-xs font-bold uppercase tracking-wider">
//                 Prestigious Scholarship
//               </span>
//             </div>
//             <h3 className="text-2xl font-bold">
//               Infosys STEM Stars Scholar
//             </h3>
//             <p className="text-sm text-blue-100 mt-4 leading-relaxed">
//               Selected for the Infosys Foundation Scholarship (2024–25),
//               awarded to high-potential engineering students.
//             </p>
//             <div className="mt-6 inline-flex items-center gap-2 bg-blue-700/50 px-3 py-1.5 rounded-full text-xs">
//               <CheckCircle2 className="w-3 h-3" />
//               Verified • Feb 2025
//             </div>
//           </div>
//         </div>

//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

//           {/* LEFT: MEDIA */}
//           <div className="md:col-span-3 flex flex-col gap-4">
//             <div className="bg-white border rounded-xl p-3">
//               <p className="text-[11px] font-bold text-slate-500 mb-2">
//                 Media Coverage
//               </p>
//               <img
//                 src={newspaper}
//                 alt="Newspaper Recognition"
//                 className="w-full object-contain rounded-md"
//               />
//             </div>

//             <div className="bg-white border rounded-xl p-3">
//               <p className="text-[11px] font-bold text-slate-500 mb-2">
//                 Award Ceremony
//               </p>
//               <img
//                 src={ceremony}
//                 alt="Award Ceremony"
//                 className="w-full object-cover rounded-md"
//               />
//             </div>
//           </div>

//           {/* MIDDLE: CERTIFICATIONS */}
//           <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
//             <div className="p-4 border-b bg-slate-50">
//               <h4 className="font-bold flex items-center gap-2">
//                 <Medal className="w-4 h-4 text-primary" />
//                 Key Certifications
//               </h4>
//             </div>

//             <div className="p-4 space-y-4">
//               <Section title="Technical">
//                 <ListItem icon={Code} title="Python Programming" subtitle="Infosys Springboard • Dec 2024" />
//                 <ListItem icon={Code} title="C Programming" subtitle="Infosys Springboard • Dec 2024" />
//                 <ListItem icon={Code} title="Front End Development" subtitle="Simplilearn • Apr 2025" />
//                 <ListItem icon={FileText} title="Microsoft Excel (Advanced)" subtitle="Udemy • Jan 2025" />
//                 <ListItem icon={Brain} title="AI Tools Workshop" subtitle="be10x • Feb 2025" />
//                 <ListItem icon={Zap} title="CodeZilla Hackathon" subtitle="CSI VIT Pune • Jan 2025" />
//               </Section>

//               <Section title="Leadership">
//                 <ListItem icon={Mic} title="1st Prize – Speech Competition" subtitle="2020" />
//                 <ListItem icon={Trophy} title="1st Prize – Sports (3-Legs Race)" subtitle="2020" />
//                 <ListItem icon={Trophy} title="3rd Prize – Quiz Competition" subtitle="2018" />
//               </Section>
//             </div>
//           </div>

//           {/* RIGHT: TROPHIES (NO OVERLAY, CENTERED) */}
//           <div className="md:col-span-4 bg-white border rounded-2xl p-4 flex items-center justify-center">
//             <img
//               src={trophies}
//               alt="Awards Collection"
//               className="w-full max-h-[520px] object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ---------- HELPERS ---------- */

// const Section = ({ title, children }: any) => (
//   <div>
//     <p className="text-[11px] font-bold text-slate-400 uppercase mb-2">
//       {title}
//     </p>
//     <div className="space-y-1">{children}</div>
//   </div>
// );

// const ListItem = ({ icon: Icon, title, subtitle }: any) => (
//   <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50">
//     <Icon className="w-4 h-4 text-primary mt-0.5" />
//     <div>
//       <p className="text-xs font-semibold text-slate-800">{title}</p>
//       <p className="text-[10px] text-slate-500">{subtitle}</p>
//     </div>
//   </div>
// );





// import { motion } from "framer-motion";
// import {
//   Trophy,
//   ExternalLink,
//   Star,
//   Mic,
//   Brain,
//   Zap,
//   Code,
//   FileText,
//   Medal,
//   CheckCircle2,
// } from "lucide-react";

// // --- YOUR IMAGE IMPORTS ---
// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
// import trophies from "@/assets/achievements/awards-collection.jpg";

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-20 px-4 bg-slate-50">
//       <div className="max-w-7xl mx-auto">
        
//         {/* 1. SECTION HEADER */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-slate-200 pb-6">
//           <div>
//             <h2 className="text-3xl font-serif font-bold text-slate-900">
//               Achievements & Certifications
//             </h2>
//             <p className="text-slate-600 mt-2 max-w-2xl">
//               A comprehensive record of National Scholarships, Technical Certifications, and Leadership Awards.
//             </p>
//           </div>
//           <a
//             href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors mt-4 md:mt-0"
//           >
//             View Verified Drive Folder <ExternalLink className="w-4 h-4" />
//           </a>
//         </div>

//         {/* 2. THE "BIG WINS" (Top Tier Cards) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
//           {/* CARD A: Mayor's Award */}
//           <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
//             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
//               <Trophy className="w-24 h-24" />
//             </div>
//             <div className="relative z-10">
//               <div className="flex justify-between items-start mb-4">
//                 <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
//                   Rank 01 / 319 Schools
//                 </span>
//                 <span className="text-slate-400 text-xs font-mono">2016-17</span>
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 mb-2">
//                 Adarsh Vidyarthi Mahapaur Puraskar
//               </h3>
//               <p className="text-sm text-slate-600 mb-4">
//                 Honored by <strong>Kalyan Dombivli Municipal Corporation</strong> for securing a historical score of <strong className="text-slate-900">98.75%</strong>.
//               </p>
//             </div>
//           </div>

//           {/* CARD B: Infosys Scholarship */}
//           <div className="bg-blue-600 rounded-2xl p-6 shadow-md relative overflow-hidden text-white group hover:shadow-lg transition-all">
//             <div className="absolute -bottom-10 -right-10 bg-white/10 w-48 h-48 rounded-full blur-3xl"></div>
//             <div className="relative z-10">
//               <div className="flex items-center gap-2 mb-4">
//                 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                 <span className="text-xs font-bold uppercase tracking-widest opacity-90">Prestigious Grant</span>
//               </div>
//               <h3 className="text-xl font-bold mb-2">
//                 Infosys STEM Stars Scholar
//               </h3>
//               <p className="text-blue-100 text-sm mb-6 leading-relaxed">
//                 Selected for the elite <strong>Infosys Foundation Scholarship (2024-25)</strong>. Awarded to high-potential students in Engineering & Technology.
//               </p>
//               <div className="inline-flex items-center gap-2 bg-blue-700/50 px-3 py-1.5 rounded-full border border-blue-500/30 text-xs">
//                 <CheckCircle2 className="w-3 h-3" />
//                 <span>Verified Selection • Feb 2025</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 3. MAIN DISPLAY GRID (Equal Height Columns) */}
//         {/* 'items-stretch' ensures all 3 columns are the same height */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
//           {/* LEFT COLUMN: Media Images (Spaced to fill height) */}
//           <div className="md:col-span-3 flex flex-col gap-6 h-full justify-between">
//             {/* Newspaper */}
//             <div className="relative flex-1 rounded-2xl overflow-hidden border border-slate-200 bg-white min-h-[220px]">
//               <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">Media Coverage</div>
//               <img src={newspaper} alt="News" className="w-full h-full object-cover object-left" />
//             </div>
//             {/* Ceremony */}
//             <div className="relative flex-1 rounded-2xl overflow-hidden border border-slate-200 bg-white min-h-[220px]">
//               <div className="absolute top-2 left-2 z-10 bg-white/90 text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">Felicitation</div>
//               <img src={ceremony} alt="Ceremony" className="w-full h-full object-cover" />
//             </div>
//           </div>

//           {/* MIDDLE COLUMN: Certifications List (Vertically Centered) */}
//           <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-center h-full">
            
//             <div className="mb-6 border-b border-slate-100 pb-2">
//               <h4 className="font-bold text-slate-900 flex items-center gap-2 text-lg">
//                 <Medal className="w-5 h-5 text-blue-600" /> Key Certifications
//               </h4>
//             </div>
            
//             <div className="space-y-4">
//               {/* Technical Section */}
//               <div>
//                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Technical</p>
//                  <div className="space-y-2">
//                     <ListItem icon={Code} title="Python Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-600" />
//                     <ListItem icon={Code} title="C Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-600" />
//                     <ListItem icon={Code} title="Front End Development" subtitle="Simplilearn • Apr 2025" color="text-purple-600" />
//                     <ListItem icon={FileText} title="Microsoft Excel (Advanced)" subtitle="Udemy • Jan 2025" color="text-green-600" />
//                     <ListItem icon={Brain} title="AI Tools Workshop" subtitle="be10x • Feb 2025" color="text-pink-600" />
//                     <ListItem icon={Zap} title="CodeZilla Hackathon" subtitle="CSI VIT Pune • Jan 2025" color="text-orange-600" />
//                  </div>
//               </div>

//               {/* Leadership Section */}
//               <div className="pt-2">
//                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Leadership</p>
//                  <div className="space-y-2">
//                     <ListItem icon={Mic} title="1st Prize: Speech Competition" subtitle="Dr. Zakir Husain School • 2020" color="text-indigo-600" />
//                     <ListItem icon={Trophy} title="1st Prize: Sports (3-Legs Race)" subtitle="Annual Sports Meet • 2020" color="text-red-600" />
//                  </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: Trophy Collection (Matches Height) */}
//           <div className="md:col-span-4 rounded-2xl overflow-hidden border border-slate-200 bg-white relative h-full flex items-center justify-center p-4">
//             <img src={trophies} alt="Trophies" className="max-w-full max-h-[600px] object-contain" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // Helper Component for List Items
// const ListItem = ({ icon: Icon, title, subtitle, color }: any) => (
//   <div className="flex items-start gap-3 p-1.5 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
//     <div className={`mt-0.5 ${color}`}>
//         <Icon className="w-4 h-4" />
//     </div>
//     <div>
//         <h5 className="text-xs font-bold text-slate-800 leading-tight">{title}</h5>
//         <p className="text-[10px] text-slate-500">{subtitle}</p>
//     </div>
//   </div>
// );





// import { motion } from "framer-motion";
// import {
//   Trophy,
//   ExternalLink,
//   Star,
//   Mic,
//   Brain,
//   Zap,
//   Code,
//   FileText,
//   Medal,
//   CheckCircle2,
//   Award,
//   // NEW ICONS ADDED HERE
//   Database,
//   GitBranch,
//   Layers,
// } from "lucide-react";

// // IMAGE IMPORTS
// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
// import trophies from "@/assets/achievements/awards-collection.jpg";

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-24 px-6 bg-slate-50">
//       <div className="max-w-[1150px] mx-auto">
        
//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-serif font-bold text-slate-900 flex items-center justify-center gap-3">
//             <Award className="w-10 h-10 text-amber-500" />
//             Achievements & Certifications
//           </h2>
//         </div>

//         {/* MAIN BENTO GRID */}
//         {/* items-stretch ensures both big columns are same height */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

//           {/* --- LEFT COLUMN: VISUAL SHOWCASE (5/12) --- */}
//           <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            
//             {/* Trophy Card */}
//             <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-1 shadow-lg overflow-hidden relative group flex-1 min-h-[px]">
//               <div className="absolute top-4 left-4 z-10">
//                 <span className="bg-white/90 text-amber-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
//                   <Trophy className="w-3 h-3" /> Trophy Collection
//                 </span>
//               </div>
//               <div className="bg-white rounded-[20px] h-full w-full overflow-hidden flex items-center justify-center p-6 relative">
//                  <img
//                   src={trophies}
//                   alt="Awards Collection"
//                   className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </div>

//             {/* Media Grid (Fixed Height) */}
//             <div className="grid grid-cols-2 gap-4 h-48">
//               <MediaCard image={newspaper} label="Media Coverage" color="bg-blue-100 text-blue-800" />
//               <MediaCard image={ceremony} label="Felicitation" color="bg-purple-100 text-purple-800" />
//             </div>
//           </div>

//           {/* --- RIGHT COLUMN: CERTIFICATIONS HUB (7/12) --- */}
//           {/* h-full and justify-between ensure it fills space and spreads content */}
//           <div className="lg:col-span-7 bg-white rounded-3xl shadow-lg p-8 border border-slate-100 h-full flex flex-col justify-between">
            
//             <div>
//                 <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
//                 <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
//                     <Medal className="w-6 h-6 text-blue-600" />
//                     Key Certifications
//                 </h3>
//                 <a
//                     href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
//                 >
//                     Verify <ExternalLink className="w-3.5 h-3.5" />
//                 </a>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                
//                 {/* Technical Section - EXPANDED WITH PLACEHOLDERS */}
//                 <div className="md:col-span-2">
//                     <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//                     <Code className="w-4 h-4" /> Technical Skills
//                     </h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <ListItem icon={Code} title="Python Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
//                         <ListItem icon={Code} title="C Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
//                         <ListItem icon={Code} title="Front End Development" subtitle="Simplilearn • Apr 2025" color="text-indigo-500" bgColor="bg-indigo-100" />
//                         <ListItem icon={Brain} title="AI Tools Workshop" subtitle="be10x • Feb 2025" color="text-purple-500" bgColor="bg-purple-100" />
                        
//                         {/* --- NEW PLACEHOLDERS: REPLACE THESE! --- */}
//                         <ListItem icon={Database} title="Data Structures & Algo" subtitle="GeeksforGeeks • Mar 2025" color="text-cyan-600" bgColor="bg-cyan-100" />
//                         <ListItem icon={FileText} title="Microsoft Excel (Adv.)" subtitle="Udemy • Jan 2025" color="text-green-500" bgColor="bg-green-100" />
//                         <ListItem icon={GitBranch} title="Git & GitHub Essentials" subtitle="Coursera • Feb 2025" color="text-orange-600" bgColor="bg-orange-100" />
//                         <ListItem icon={Layers} title="React.js Beginner Course" subtitle="Scrimba • Apr 2025" color="text-sky-600" bgColor="bg-sky-100" />
//                         {/* ---------------------------------------- */}

//                     </div>
//                 </div>
//                 </div>
//             </div>

//              {/* Leadership Section at bottom */}
//             <div className="mt-6 pt-6 border-t border-slate-100">
//                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//                     <Trophy className="w-4 h-4" /> Leadership & Awards
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <ListItem icon={Mic} title="1st Prize: Speech Competition" subtitle="Dr. Zakir Husain School • 2020" color="text-pink-500" bgColor="bg-pink-100" />
//                     <ListItem icon={Trophy} title="1st Prize: Sports (3-Legs Race)" subtitle="Annual Sports Meet • 2020" color="text-red-500" bgColor="bg-red-100" />
//                 </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// /* --- HELPER COMPONENTS (No changes needed here) --- */
// const MediaCard = ({ image, label, color }: any) => (
//   <div className="relative rounded-3xl overflow-hidden shadow-md h-full group">
//     <div className={`absolute top-3 left-3 z-10 ${color} text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm`}>
//       {label}
//     </div>
//     <img
//       src={image}
//       alt={label}
//       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//     />
//   </div>
// );

// const ListItem = ({ icon: Icon, title, subtitle, color, bgColor }: any) => (
//   <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
//     <div className={`p-2.5 rounded-xl ${bgColor} ${color} group-hover:scale-110 transition-transform shadow-sm`}>
//       <Icon className="w-5 h-5" />
//     </div>
//     <div>
//       <h5 className="text-sm font-bold text-slate-900 leading-tight">{title}</h5>
//       <p className="text-[11px] text-slate-500 mt-1 font-medium">{subtitle}</p>
//     </div>
//   </div>
// );




// import { motion } from "framer-motion";
// import {
//   Trophy,
//   ExternalLink,
//   Mic,
//   Brain,
//   Code,
//   FileText,
//   Medal,
//   Award,
//   Database,
//   GitBranch,
//   Layers,
//   HeartHandshake,
// } from "lucide-react";

// // IMAGE IMPORTS
// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// // import ceremony from "@/assets/achievements/best-student-ceremony.jpg"; // Removed as per request to focus on RTO/Media at bottom
// import trophies from "@/assets/achievements/awards-collection.jpg";
// import socialWork from "@/assets/achievements/SocialWorkRTO.jpeg";

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-24 px-6 bg-slate-50">
//       <div className="max-w-[1150px] mx-auto">
        
//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-serif font-bold text-slate-900 flex items-center justify-center gap-3">
//             <Award className="w-10 h-10 text-amber-500" />
//             Achievements & Certifications
//           </h2>
//         </div>

//         {/* MAIN BENTO GRID */}
//         {/* items-stretch IS KEY HERE: It forces both columns to be the same height */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

//           {/* --- LEFT COLUMN: VISUAL SHOWCASE (5/12) --- */}
//           {/* h-full ensures it respects the stretch */}
//           <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            
//             {/* 1. TOP: Trophy Collection (TALLER - flex-1 makes it grow) */}
//             <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-1 shadow-lg overflow-hidden relative group flex-1 min-h-[400px]">
//               <div className="absolute top-4 left-4 z-10">
//                 <span className="bg-white/90 text-amber-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
//                   <Trophy className="w-3 h-3" /> Trophy Collection
//                 </span>
//               </div>
//               <div className="bg-white rounded-[20px] h-full w-full overflow-hidden flex items-center justify-center p-6 relative">
//                  <img
//                   src={trophies}
//                   alt="Awards Collection"
//                   className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </div>

//             {/* 2. BOTTOM: Media & RTO Grid (Fixed Height) */}
//             <div className="grid grid-cols-2 gap-4 h-48 shrink-0">
//               <MediaCard image={newspaper} label="Media Coverage" color="bg-blue-100 text-blue-800" />
//               <MediaCard image={socialWork} label="RTO Campaign" color="bg-green-100 text-green-800" />
//             </div>

//           </div>

//           {/* --- RIGHT COLUMN: CERTIFICATIONS HUB (7/12) --- */}
//           <div className="lg:col-span-7 bg-white rounded-3xl shadow-lg p-8 border border-slate-100 h-full">
            
//             <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
//             <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
//                 <Medal className="w-6 h-6 text-blue-600" />
//                 Key Certifications
//             </h3>
//             <a
//                 href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
//             >
//                 Verify <ExternalLink className="w-3.5 h-3.5" />
//             </a>
//             </div>
            
//             {/* Combined Lists Container */}
//             <div className="flex flex-col gap-8">
                
//                 {/* Technical Section */}
//                 <div>
//                     <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//                     <Code className="w-4 h-4" /> Technical Skills
//                     </h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <ListItem icon={Code} title="Python Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
//                         <ListItem icon={Code} title="C Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
//                         <ListItem icon={Code} title="Front End Development" subtitle="Simplilearn • Apr 2025" color="text-indigo-500" bgColor="bg-indigo-100" />
//                         <ListItem icon={Brain} title="AI Tools Workshop" subtitle="be10x • Feb 2025" color="text-purple-500" bgColor="bg-purple-100" />
//                         <ListItem icon={Database} title="Data Structures & Algo" subtitle="GeeksforGeeks • Mar 2025" color="text-cyan-600" bgColor="bg-cyan-100" />
//                         <ListItem icon={FileText} title="Microsoft Excel (Adv.)" subtitle="Udemy • Jan 2025" color="text-green-500" bgColor="bg-green-100" />
//                         <ListItem icon={GitBranch} title="Git & GitHub Essentials" subtitle="Coursera • Feb 2025" color="text-orange-600" bgColor="bg-orange-100" />
//                         <ListItem icon={Layers} title="React.js Beginner Course" subtitle="Scrimba • Apr 2025" color="text-sky-600" bgColor="bg-sky-100" />
//                     </div>
//                 </div>

//                 {/* Leadership Section */}
//                 <div>
//                     <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//                         <Trophy className="w-4 h-4" /> Leadership & Awards
//                     </h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <ListItem icon={Mic} title="1st Prize: Speech Competition" subtitle="Dr. Zakir Husain School • 2020" color="text-pink-500" bgColor="bg-pink-100" />
//                         <ListItem icon={Trophy} title="1st Prize: Sports (3-Legs Race)" subtitle="Annual Sports Meet • 2020" color="text-red-500" bgColor="bg-red-100" />
//                     </div>
//                 </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// /* --- HELPER COMPONENTS --- */
// const MediaCard = ({ image, label, color }: any) => (
//   <div className="relative rounded-3xl overflow-hidden shadow-md h-full group">
//     <div className={`absolute top-3 left-3 z-10 ${color} text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap`}>
//       {label}
//     </div>
//     <img
//       src={image}
//       alt={label}
//       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//     />
//   </div>
// );

// const ListItem = ({ icon: Icon, title, subtitle, color, bgColor }: any) => (
//   <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
//     <div className={`p-2.5 rounded-xl ${bgColor} ${color} group-hover:scale-110 transition-transform shadow-sm`}>
//       <Icon className="w-5 h-5" />
//     </div>
//     <div>
//       <h5 className="text-sm font-bold text-slate-900 leading-tight">{title}</h5>
//       <p className="text-[11px] text-slate-500 mt-1 font-medium">{subtitle}</p>
//     </div>
//   </div>
// );






// import { motion } from "framer-motion";
// import {
//   Trophy,
//   ExternalLink,
//   Mic,
//   Brain,
//   Code,
//   FileText,
//   Medal,
//   Award,
//   Database,
//   GitBranch,
//   Layers,
//   HeartHandshake,
// } from "lucide-react";

// // IMAGE IMPORTS
// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
// import trophies from "@/assets/achievements/awards-collection.jpg";
// import socialWork from "@/assets/achievements/SocialWorkRTO.jpeg";

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-24 px-6 bg-slate-50">
//       <div className="max-w-[1150px] mx-auto">
        
//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-serif font-bold text-slate-900 flex items-center justify-center gap-3">
//             <Award className="w-10 h-10 text-amber-500" />
//             Achievements & Certifications
//           </h2>
//         </div>

//         {/* MAIN BENTO GRID */}
//         {/* items-stretch forces both columns to be the same height */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

//           {/* --- LEFT COLUMN: VISUAL SHOWCASE (5/12) --- */}
//           <div className="lg:col-span-5 flex flex-col gap-4 h-full">
            
//             {/* 1. TOP: Trophy Collection (Tallest, flex-1 makes it fill space) */}
//             <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-1 shadow-lg overflow-hidden relative group flex-1 min-h-[250px]">
//               <div className="absolute top-4 left-4 z-10">
//                 <span className="bg-white/90 text-amber-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
//                   <Trophy className="w-3 h-3" /> Trophy Collection
//                 </span>
//               </div>
//               <div className="bg-white rounded-[20px] h-full w-full overflow-hidden flex items-center justify-center p-6 relative">
//                  <img
//                   src={trophies}
//                   alt="Awards Collection"
//                   className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </div>

//             {/* 2. MIDDLE: Ceremony (Fixed height) */}
//             <div className="h-52 shrink-0">
//                  <MediaCard image={ceremony} label="Mohana Award Ceremony" color="bg-purple-100 text-purple-800" />
//             </div>

//             {/* 3. BOTTOM: Media & RTO Grid (Side-by-side, fixed height) */}
//             <div className="grid grid-cols-2 gap-4 h-40 shrink-0">
//               <MediaCard image={newspaper} label="Media Coverage" color="bg-blue-100 text-blue-800" />
//               <MediaCard image={socialWork} label="RTO Campaign" color="bg-green-100 text-green-800" />
//             </div>

//           </div>

//           {/* --- RIGHT COLUMN: CERTIFICATIONS HUB (7/12) --- */}
//           <div className="lg:col-span-7 bg-white rounded-3xl shadow-lg p-8 border border-slate-100 h-full">
            
//             <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
//             <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
//                 <Medal className="w-6 h-6 text-blue-600" />
//                 Key Certifications
//             </h3>
//             <a
//                 href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
//             >
//                 Verify <ExternalLink className="w-3.5 h-3.5" />
//             </a>
//             </div>
            
//             {/* Combined Lists Container */}
//             <div className="flex flex-col gap-8">
                
//                 {/* Technical Section */}
//                 <div>
//                     <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//                     <Code className="w-4 h-4" /> Technical Skills
//                     </h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <ListItem icon={Code} title="Python Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
//                         <ListItem icon={Code} title="C Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
//                         <ListItem icon={Code} title="Front End Development" subtitle="Simplilearn • Apr 2025" color="text-indigo-500" bgColor="bg-indigo-100" />
//                         <ListItem icon={Brain} title="AI Tools Workshop" subtitle="be10x • Feb 2025" color="text-purple-500" bgColor="bg-purple-100" />
//                         <ListItem icon={Database} title="Data Structures & Algo" subtitle="GeeksforGeeks • Mar 2025" color="text-cyan-600" bgColor="bg-cyan-100" />
//                         <ListItem icon={FileText} title="Microsoft Excel (Adv.)" subtitle="Udemy • Jan 2025" color="text-green-500" bgColor="bg-green-100" />
//                         <ListItem icon={GitBranch} title="Git & GitHub Essentials" subtitle="Coursera • Feb 2025" color="text-orange-600" bgColor="bg-orange-100" />
//                         <ListItem icon={Layers} title="React.js Beginner Course" subtitle="Scrimba • Apr 2025" color="text-sky-600" bgColor="bg-sky-100" />
//                     </div>
//                 </div>

//                 {/* Leadership Section */}
//                 <div>
//                     <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//                         <Trophy className="w-4 h-4" /> Leadership & Awards
//                     </h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <ListItem icon={Mic} title="1st Prize: Speech Competition" subtitle="Dr. Zakir Husain School • 2020" color="text-pink-500" bgColor="bg-pink-100" />
//                         <ListItem icon={Trophy} title="1st Prize: Sports (3-Legs Race)" subtitle="Annual Sports Meet • 2020" color="text-red-500" bgColor="bg-red-100" />
//                     </div>
//                 </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// /* --- HELPER COMPONENTS --- */
// const MediaCard = ({ image, label, color }: any) => (
//   <div className="relative rounded-3xl overflow-hidden shadow-md h-full group">
//     <div className={`absolute top-3 left-3 z-10 ${color} text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap`}>
//       {label}
//     </div>
//     <img
//       src={image}
//       alt={label}
//       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//     />
//   </div>
// );

// const ListItem = ({ icon: Icon, title, subtitle, color, bgColor }: any) => (
//   <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
//     <div className={`p-2.5 rounded-xl ${bgColor} ${color} group-hover:scale-110 transition-transform shadow-sm`}>
//       <Icon className="w-5 h-5" />
//     </div>
//     <div>
//       <h5 className="text-sm font-bold text-slate-900 leading-tight">{title}</h5>
//       <p className="text-[11px] text-slate-500 mt-1 font-medium">{subtitle}</p>
//     </div>
//   </div>
// );





// import { motion } from "framer-motion";
// import {
//   Trophy,
//   ExternalLink,
//   Mic,
//   Brain,
//   Code,
//   FileText,
//   Medal,
//   Award,
//   Database,
//   GitBranch,
//   Layers,
//   HeartHandshake,
// } from "lucide-react";

// // IMAGE IMPORTS
// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
// import trophies from "@/assets/achievements/awards-collection.jpg";
// import socialWork from "@/assets/achievements/SocialWorkRTO.jpeg";

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-24 px-6 bg-slate-50">
//       <div className="max-w-[1150px] mx-auto">
        
//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-serif font-bold text-slate-900 flex items-center justify-center gap-3">
//             <Award className="w-10 h-10 text-amber-500" />
//             Achievements & Certifications
//           </h2>
//         </div>

//         {/* MAIN BENTO GRID */}
//         {/* items-stretch forces both columns to be the same height */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

//           {/* --- LEFT COLUMN: VISUAL SHOWCASE (5/12) --- */}
//           <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            
//             {/* 1. TOP: Trophy Collection (Tallest, flex-1 makes it fill space) */}
//             <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-1 shadow-lg overflow-hidden relative group flex-1 min-h-[300px]">
//               <div className="absolute top-4 left-4 z-10">
//                 <span className="bg-white/90 text-amber-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
//                   <Trophy className="w-3 h-3" /> Trophy Collection
//                 </span>
//               </div>
//               <div className="bg-white rounded-[20px] h-full w-full overflow-hidden flex items-center justify-center p-6 relative">
//                  <img
//                   src={trophies}
//                   alt="Awards Collection"
//                   className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </div>

//             {/* 2. BOTTOM: Ceremony (Fixed height) */}
//             <div className="h-64 shrink-0">
//                  <MediaCard image={ceremony} label="Mohana Award Ceremony" color="bg-purple-100 text-purple-800" />
//             </div>

//           </div>

//           {/* --- RIGHT COLUMN: CERTIFICATIONS HUB (7/12) --- */}
//           {/* Added flex flex-col justify-between to organize content vertically */}
//           <div className="lg:col-span-7 bg-white rounded-3xl shadow-lg p-8 border border-slate-100 h-full flex flex-col justify-between">
            
//             {/* Wrapper for Header and Lists */}
//             <div>
//                 <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
//                 <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
//                     <Medal className="w-6 h-6 text-blue-600" />
//                     Key Certifications
//                 </h3>
//                 <a
//                     href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
//                 >
//                     Verify <ExternalLink className="w-3.5 h-3.5" />
//                 </a>
//                 </div>
                
//                 {/* Combined Lists Container */}
//                 <div className="flex flex-col gap-8">
                    
//                     {/* Technical Section */}
//                     <div>
//                         <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//                         <Code className="w-4 h-4" /> Technical Skills
//                         </h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <ListItem icon={Code} title="Python Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
//                             <ListItem icon={Code} title="C Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
//                             <ListItem icon={Code} title="Front End Development" subtitle="Simplilearn • Apr 2025" color="text-indigo-500" bgColor="bg-indigo-100" />
//                             <ListItem icon={Brain} title="AI Tools Workshop" subtitle="be10x • Feb 2025" color="text-purple-500" bgColor="bg-purple-100" />
//                             <ListItem icon={Database} title="Data Structures & Algo" subtitle="GeeksforGeeks • Mar 2025" color="text-cyan-600" bgColor="bg-cyan-100" />
//                             <ListItem icon={FileText} title="Microsoft Excel (Adv.)" subtitle="Udemy • Jan 2025" color="text-green-500" bgColor="bg-green-100" />
//                             <ListItem icon={GitBranch} title="Git & GitHub Essentials" subtitle="Coursera • Feb 2025" color="text-orange-600" bgColor="bg-orange-100" />
//                             <ListItem icon={Layers} title="React.js Beginner Course" subtitle="Scrimba • Apr 2025" color="text-sky-600" bgColor="bg-sky-100" />
//                         </div>
//                     </div>

//                     {/* Leadership Section */}
//                     <div>
//                         <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//                             <Trophy className="w-4 h-4" /> Leadership & Awards
//                         </h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <ListItem icon={Mic} title="1st Prize: Speech Competition" subtitle="Dr. Zakir Husain School • 2020" color="text-pink-500" bgColor="bg-pink-100" />
//                             <ListItem icon={Trophy} title="1st Prize: Sports (3-Legs Race)" subtitle="Annual Sports Meet • 2020" color="text-red-500" bgColor="bg-red-100" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* --- NEW LOCATION: Media & RTO Grid at bottom of Right Column --- */}
//             <div className="mt-8 pt-6 border-t border-slate-100">
//                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//                     <HeartHandshake className="w-4 h-4" /> Social Impact & Media
//                 </h4>
//                 <div className="grid grid-cols-2 gap-4 h-40 shrink-0">
//                 <MediaCard image={newspaper} label="Media Coverage" color="bg-blue-100 text-blue-800" />
//                 <MediaCard image={socialWork} label="RTO Campaign" color="bg-green-100 text-green-800" />
//                 </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// /* --- HELPER COMPONENTS --- */
// const MediaCard = ({ image, label, color }: any) => (
//   <div className="relative rounded-3xl overflow-hidden shadow-md h-full group">
//     <div className={`absolute top-3 left-3 z-10 ${color} text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap`}>
//       {label}
//     </div>
//     <img
//       src={image}
//       alt={label}
//       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//     />
//   </div>
// );

// const ListItem = ({ icon: Icon, title, subtitle, color, bgColor }: any) => (
//   <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
//     <div className={`p-2.5 rounded-xl ${bgColor} ${color} group-hover:scale-110 transition-transform shadow-sm`}>
//       <Icon className="w-5 h-5" />
//     </div>
//     <div>
//       <h5 className="text-sm font-bold text-slate-900 leading-tight">{title}</h5>
//       <p className="text-[11px] text-slate-500 mt-1 font-medium">{subtitle}</p>
//     </div>
//   </div>
// );





// import { motion } from "framer-motion";
// import {
//   Trophy,
//   ExternalLink,
//   Mic,
//   Brain,
//   Code,
//   FileText,
//   Medal,
//   Award,
//   Database,
//   GitBranch,
//   Layers,
//   HeartHandshake,
//   User,   // New icon for "My Journey"
//   Target, // New icon for "Looking Ahead"
// } from "lucide-react";

// // IMAGE IMPORTS
// import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
// import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
// import trophies from "@/assets/achievements/awards-collection.jpg";
// import socialWork from "@/assets/achievements/SocialWorkRTO.jpeg";

// export const AchievementsSection = () => {
//   return (
//     <section id="certifications" className="py-24 px-6 bg-slate-50">
//       <div className="max-w-[1150px] mx-auto">
        
//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-serif font-bold text-slate-900 flex items-center justify-center gap-3">
//             <Award className="w-10 h-10 text-amber-500" />
//             Achievements & Certifications
//           </h2>
//         </div>

//         {/* MAIN BENTO GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

//           {/* --- LEFT COLUMN: VISUALS & STORY (5/12) --- */}
//           <div className="lg:col-span-5 flex flex-col gap-6">
            
//             {/* 1. Trophy Collection */}
//             <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-1 shadow-lg overflow-hidden relative group h-[300px]">
//               <div className="absolute top-4 left-4 z-10">
//                 <span className="bg-white/90 text-amber-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
//                   <Trophy className="w-3 h-3" /> Trophy Collection
//                 </span>
//               </div>
//               <div className="bg-white rounded-[20px] h-full w-full overflow-hidden flex items-center justify-center p-6 relative">
//                  <img
//                   src={trophies}
//                   alt="Awards Collection"
//                   className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </div>

//             {/* 2. NEW: "My Journey" Text Card */}
//             <div className="bg-white rounded-3xl shadow-md p-6 border border-slate-100">
//               <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
//                 <User className="w-5 h-5 text-blue-600" />
//                 My Journey
//               </h4>
//               <p className="text-slate-600 text-sm leading-relaxed">
//                 My path has been defined by a relentless pursuit of academic excellence, active engagement in leadership roles, and a deep-seated commitment to social responsibility. These recognitions are not just awards, but milestones in my ongoing quest for personal and professional growth.
//               </p>
//             </div>

//             {/* 3. Ceremony Image */}
//             <div className="h-60 shrink-0">
//                  <MediaCard image={ceremony} label="Mohana Award Ceremony" color="bg-purple-100 text-purple-800" />
//             </div>

//             {/* 4. Media & RTO Grid (at bottom of left column) */}
//             <div className="grid grid-cols-2 gap-4 h-40 shrink-0">
//               <MediaCard image={newspaper} label="Media Coverage" color="bg-blue-100 text-blue-800" />
//               <MediaCard image={socialWork} label="RTO Campaign" color="bg-green-100 text-green-800" />
//             </div>

//           </div>

//           {/* --- RIGHT COLUMN: CERTIFICATIONS & FUTURE (7/12) --- */}
//           <div className="lg:col-span-7 bg-white rounded-3xl shadow-lg p-8 border border-slate-100 flex flex-col gap-8">
            
//             {/* Header & Verify Link */}
//             <div className="flex items-center justify-between pb-4 border-b border-slate-100">
//                 <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
//                     <Medal className="w-6 h-6 text-blue-600" />
//                     Key Certifications
//                 </h3>
//                 <a
//                     href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
//                 >
//                     Verify <ExternalLink className="w-3.5 h-3.5" />
//                 </a>
//             </div>
            
//             {/* Technical Section */}
//             <div>
//                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//                 <Code className="w-4 h-4" /> Technical Skills
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <ListItem icon={Code} title="Python Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
//                     <ListItem icon={Code} title="C Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
//                     <ListItem icon={Code} title="Front End Development" subtitle="Simplilearn • Apr 2025" color="text-indigo-500" bgColor="bg-indigo-100" />
//                     <ListItem icon={Brain} title="AI Tools Workshop" subtitle="be10x • Feb 2025" color="text-purple-500" bgColor="bg-purple-100" />
//                     <ListItem icon={Database} title="Data Structures & Algo" subtitle="GeeksforGeeks • Mar 2025" color="text-cyan-600" bgColor="bg-cyan-100" />
//                     <ListItem icon={FileText} title="Microsoft Excel (Adv.)" subtitle="Udemy • Jan 2025" color="text-green-500" bgColor="bg-green-100" />
//                     <ListItem icon={GitBranch} title="Git & GitHub Essentials" subtitle="Coursera • Feb 2025" color="text-orange-600" bgColor="bg-orange-100" />
//                     <ListItem icon={Layers} title="React.js Beginner Course" subtitle="Scrimba • Apr 2025" color="text-sky-600" bgColor="bg-sky-100" />
//                 </div>
//             </div>

//             {/* Leadership Section */}
//             <div>
//                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//                     <Trophy className="w-4 h-4" /> Leadership & Awards
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <ListItem icon={Mic} title="1st Prize: Speech Competition" subtitle="Dr. Zakir Husain School • 2020" color="text-pink-500" bgColor="bg-pink-100" />
//                     <ListItem icon={Trophy} title="1st Prize: Sports (3-Legs Race)" subtitle="Annual Sports Meet • 2020" color="text-red-500" bgColor="bg-red-100" />
//                 </div>
//             </div>

//             {/* NEW: "Looking Ahead" Text Card */}
//             <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mt-auto">
//                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
//                  <Target className="w-4 h-4 text-blue-600" />
//                  Looking Ahead
//                </h4>
//                <p className="text-slate-600 text-sm leading-relaxed">
//                  I am dedicated to continuous learning, currently focusing on advancing my skills in full-stack development and exploring the potential of AI in solving real-world problems.
//                </p>
//              </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// /* --- HELPER COMPONENTS --- */
// const MediaCard = ({ image, label, color }: any) => (
//   <div className="relative rounded-3xl overflow-hidden shadow-md h-full group">
//     <div className={`absolute top-3 left-3 z-10 ${color} text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap`}>
//       {label}
//     </div>
//     <img
//       src={image}
//       alt={label}
//       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//     />
//   </div>
// );

// const ListItem = ({ icon: Icon, title, subtitle, color, bgColor }: any) => (
//   <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
//     <div className={`p-2.5 rounded-xl ${bgColor} ${color} group-hover:scale-110 transition-transform shadow-sm`}>
//       <Icon className="w-5 h-5" />
//     </div>
//     <div>
//       <h5 className="text-sm font-bold text-slate-900 leading-tight">{title}</h5>
//       <p className="text-[11px] text-slate-500 mt-1 font-medium">{subtitle}</p>
//     </div>
//   </div>
// );




import {
  Trophy,
  ExternalLink,
  Mic,
  Brain,
  Code,
  FileText,
  Medal,
  Award,
  Database,
  GitBranch,
  Layers,
  HeartHandshake,
} from "lucide-react";

// IMAGE IMPORTS
// MAKE SURE THESE PATHS ARE CORRECT FOR YOUR PROJECT
import newspaper from "@/assets/achievements/kalyan-award-2018.jpg";
import ceremony from "@/assets/achievements/best-student-ceremony.jpg";
import trophies from "@/assets/achievements/awards-collection.jpg";
import socialWork from "@/assets/achievements/SocialWorkRTO.jpeg";

export const AchievementsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-slate-50">
      <div className="max-w-[1150px] mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 flex items-center justify-center gap-3">
            <Award className="w-10 h-10 text-amber-500" />
            Achievements & Certifications
          </h2>
        </div>

        {/* MAIN BENTO GRID */}
        {/* items-stretch forces both columns to be the same height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* --- LEFT COLUMN: VISUAL SHOWCASE (5/12) --- */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            
            {/* 1. TOP: Trophy Collection */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-1 shadow-lg overflow-hidden relative group flex-1 min-h-[300px]">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/90 text-amber-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Trophy className="w-3 h-3" /> Trophy Collection
                </span>
              </div>
              <div className="bg-white rounded-[20px] h-full w-full overflow-hidden flex items-center justify-center p-6 relative">
                 <img
                  src={trophies}
                  alt="Awards Collection"
                  // Using object-contain to show full image without cropping
                  className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* 2. BOTTOM: Ceremony (Fixed height is fine here as it's a wide image) */}
            <div className="h-64 shrink-0">
                 <MediaCard image={ceremony} label="Mohana Award Ceremony" color="bg-purple-100 text-purple-800" />
            </div>

          </div>

          {/* --- RIGHT COLUMN: CERTIFICATIONS HUB (7/12) --- */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-lg p-8 border border-slate-100 h-full flex flex-col">
            
            {/* Wrapper for Header and Lists (Takes needed space) */}
            <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <Medal className="w-6 h-6 text-blue-600" />
                    Key Certifications
                </h3>
                <a
                    href="https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
                >
                    Verify <ExternalLink className="w-3.5 h-3.5" />
                </a>
                </div>
                
                {/* Combined Lists Container */}
                <div className="flex flex-col gap-8">
                    
                    {/* Technical Section */}
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Code className="w-4 h-4" /> Technical Skills
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ListItem icon={Code} title="Python Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
                            <ListItem icon={Code} title="C Programming" subtitle="Infosys Springboard • Dec 2024" color="text-blue-500" bgColor="bg-blue-100" />
                            <ListItem icon={Code} title="Front End Development" subtitle="Simplilearn • Apr 2025" color="text-indigo-500" bgColor="bg-indigo-100" />
                            <ListItem icon={Brain} title="AI Tools Workshop" subtitle="be10x • Feb 2025" color="text-purple-500" bgColor="bg-purple-100" />
                            <ListItem icon={Database} title="Data Structures & Algo" subtitle="GeeksforGeeks • Mar 2025" color="text-cyan-600" bgColor="bg-cyan-100" />
                            <ListItem icon={FileText} title="Microsoft Excel (Adv.)" subtitle="Udemy • Jan 2025" color="text-green-500" bgColor="bg-green-100" />
                            <ListItem icon={GitBranch} title="Git & GitHub Essentials" subtitle="Coursera • Feb 2025" color="text-orange-600" bgColor="bg-orange-100" />
                            <ListItem icon={Layers} title="React.js Beginner Course" subtitle="Scrimba • Apr 2025" color="text-sky-600" bgColor="bg-sky-100" />
                        </div>
                    </div>

                    {/* Leadership Section */}
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Trophy className="w-4 h-4" /> Leadership & Awards
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ListItem icon={Mic} title="1st Prize: Speech Competition" subtitle="Dr. Zakir Husain School • 2020" color="text-pink-500" bgColor="bg-pink-100" />
                            <ListItem icon={Trophy} title="1st Prize: Sports (3-Legs Race)" subtitle="Annual Sports Meet • 2020" color="text-red-500" bgColor="bg-red-100" />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Media & RTO Grid at bottom --- */}
            {/* flex-1 makes this section grow to fill remaining space */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col flex-1">
                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2 shrink-0">
                    <HeartHandshake className="w-4 h-4" /> Social Impact & Media
                </h4>
                {/* The grid itself now grows to fill the container */}
                <div className="grid grid-cols-2 gap-4 flex-1 min-h-[200px]">
                    <MediaCard image={newspaper} label="Media Coverage" color="bg-blue-100 text-blue-800" />
                    <MediaCard image={socialWork} label="RTO Campaign" color="bg-green-100 text-green-800" />
                </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

/* --- HELPER COMPONENTS --- */
const MediaCard = ({ image, label, color }: any) => (
  <div className="relative rounded-3xl overflow-hidden shadow-md h-full group bg-slate-100/50">
    <div className={`absolute top-3 left-3 z-10 ${color} text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap`}>
      {label}
    </div>
    <img
      src={image}
      alt={label}
      // KEY CHANGE: object-contain ensures the whole image is seen, no cutting.
      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
    />
  </div>
);

const ListItem = ({ icon: Icon, title, subtitle, color, bgColor }: any) => (
  <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
    <div className={`p-2.5 rounded-xl ${bgColor} ${color} group-hover:scale-110 transition-transform shadow-sm`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h5 className="text-sm font-bold text-slate-900 leading-tight">{title}</h5>
      <p className="text-[11px] text-slate-500 mt-1 font-medium">{subtitle}</p>
    </div>
  </div>
);