// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const navLinks = [
//   { href: "#about", label: "About" },
//   { href: "#skills", label: "Skills" },
//   { href: "#experience", label: "Experience" },
//   { href: "#education", label: "Education" },
//   { href: "#projects", label: "Projects" },
//   { href: "#certifications", label: "Achievements" },
//   { href: "#contact", label: "Contact" },
// ];

// export const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO / BRAND */}
//         <a
//           href="#"
//           className="text-xl font-semibold tracking-tight text-foreground"
//         >
//           Ifreen Siddiqui
//         </a>

//         {/* DESKTOP NAVIGATION */}
//         <ul className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
//               >
//                 {link.label}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full" />
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-foreground"
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </nav>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25 }}
//             className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
//           >
//             <ul className="px-6 py-6 space-y-4">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };





// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const navLinks = [
//   { href: '#about', label: 'About' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#experience', label: 'Experience' },
//   { href: '#education', label: 'Education' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#certifications', label: 'Achievements' },
//   { href: '#contact', label: 'Contact' },
// ];

// export const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 60);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.4, ease: 'easeOut' }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo / Branding */}
//         <a
//           href="#"
//           className="font-serif text-xl font-semibold text-foreground"
//         >
//           Portfolio
//         </a>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
//               >
//                 {link.label}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-foreground"
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25 }}
//             className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
//           >
//             <ul className="px-6 py-4 space-y-4">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };




// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const navLinks = [
//   { href: '#about', label: 'About' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#experience', label: 'Experience' },
//   { href: '#education', label: 'Education' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#certifications', label: 'Achievements' },
//   { href: '#contact', label: 'Contact' },
// ];

// export const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Trigger effect earlier (at 20px) to separate nav quickly
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled
//           ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50 py-3'
//           : 'bg-white/10 backdrop-blur-sm border-b border-white/10 py-5'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
//         {/* LOGO - Modern Serif */}
//         <a href="#" className="flex items-center gap-2 group">
//           <span className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-serif font-bold text-xl group-hover:scale-105 transition-transform">
//             I
//           </span>
//           <span className="font-serif text-xl font-bold text-slate-900 tracking-tight">
//             Ifreen.
//           </span>
//         </a>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:block">
//           <ul className="flex items-center gap-8">
//             {navLinks.map((link, i) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   className={`text-sm font-semibold tracking-wide transition-all duration-300 relative group ${
//                     isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-800 hover:text-blue-600'
//                   }`}
//                 >
//                   {link.label}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
//                 </a>
//               </li>
//             ))}
//             {/* CTA Button in Nav */}
//             <li>
//                 <a 
//                     href="#contact"
//                     className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
//                 >
//                     Let's Talk
//                 </a>
//             </li>
//           </ul>
//         </nav>

//         {/* MOBILE TOGGLE */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* MOBILE MENU OVERLAY */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: '100vh' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl overflow-hidden"
//           >
//             <ul className="flex flex-col p-6 space-y-4">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="block text-lg font-medium text-slate-800 hover:text-blue-600 hover:pl-2 transition-all"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };




// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const navLinks = [
//   { href: '#about', label: 'About' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#experience', label: 'Experience' },
//   { href: '#education', label: 'Education' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#certifications', label: 'Achievements' },
//   { href: '#contact', label: 'Contact' },
// ];

// export const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled
//           ? 'bg-slate-900/90 backdrop-blur-md shadow-md border-b border-slate-800/50 py-3' // Scrolled: Frosted dark
//           : 'bg-slate-900 border-b border-slate-800 py-5' // Top: Solid dark, premium look
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
//         {/* LOGO */}
//         <a href="#" className="flex items-center gap-2 group">
//           <span className="w-8 h-8 bg-white text-slate-900 rounded-lg flex items-center justify-center font-serif font-bold text-xl group-hover:scale-105 transition-transform">
//             I
//           </span>
//           <span className="font-serif text-xl font-bold text-white tracking-tight">
//             Ifreen.
//           </span>
//         </a>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:block">
//           <ul className="flex items-center gap-8">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group tracking-wide"
//                 >
//                   {link.label}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
//                 </a>
//               </li>
//             ))}
//             {/* CTA Button */}
//             <li>
//                 <a 
//                     href="#contact"
//                     className="px-5 py-2.5 bg-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
//                 >
//                     Let's Talk
//                 </a>
//             </li>
//           </ul>
//         </nav>

//         {/* MOBILE TOGGLE */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: '100vh' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-xl overflow-hidden"
//           >
//             <ul className="flex flex-col p-6 space-y-4">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="block text-lg font-medium text-slate-300 hover:text-white hover:pl-2 transition-all"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };





// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const navLinks = [
//   { href: '#about', label: 'About' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#experience', label: 'Experience' },
//   { href: '#education', label: 'Education' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#certifications', label: 'Achievements' },
//   { href: '#contact', label: 'Contact' },
// ];

// export const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       // FIX: Reduced padding (py-3) to make it slim, not "too vertical"
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-2 shadow-md' // Scrolled: Very slim
//           : 'bg-slate-900 border-b border-slate-800 py-3' // Top: Compact & Professional
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
//         {/* LOGO */}
//         <a href="#" className="flex items-center gap-2 group">
//           {/* <span className="w-8 h-8 bg-white text-slate-900 rounded-md flex items-center justify-center font-serif font-bold text-lg group-hover:scale-105 transition-transform">
//             I
//           </span> */}
//           <span className="font-serif text-lg font-bold text-white tracking-tight">
//             Ifreen  Siddiqui
//           </span>
//         </a>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:block">
//           <ul className="flex items-center gap-6">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
//                 >
//                   {link.label}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
//                 </a>
//               </li>
//             ))}
//             {/* CTA Button */}
//             <li>
//                 <a 
//                     href="#contact"
//                     className="px-4 py-2 bg-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md hover:bg-slate-200 transition-all"
//                 >
//                     Let's Talk
//                 </a>
//             </li>
//           </ul>
//         </nav>

//         {/* MOBILE TOGGLE */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
//         >
//           {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: '100vh' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-xl overflow-hidden"
//           >
//             <ul className="flex flex-col p-6 space-y-4">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="block text-lg font-medium text-slate-300 hover:text-white hover:pl-2 transition-all"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };





// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const navLinks = [
//   { href: '#about', label: 'About' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#experience', label: 'Experience' },
//   { href: '#education', label: 'Education' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#certifications', label: 'Achievements' },
//   // Removed "Contact" from here because we have the main button
// ];

// export const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-3 shadow-xl'
//           : 'bg-slate-900 border-b border-slate-800 py-4'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
//         {/* LOGO */}
//         <a href="#" className="flex items-center gap-2 group">
//           <span className="font-serif text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
//             Ifreen Siddiqui
//           </span>
//         </a>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:block">
//           <ul className="flex items-center gap-8">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group tracking-wide"
//                 >
//                   {link.label}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
//                 </a>
//               </li>
//             ))}
            
//             {/* "LET'S CONNECT" BUTTON - DISTINCT STYLE */}
//             <li>
//                 <a 
//                     href="#contact"
//                     className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
//                 >
//                     Let's Connect
//                 </a>
//             </li>
//           </ul>
//         </nav>

//         {/* MOBILE TOGGLE */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: '100vh' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-xl overflow-hidden"
//           >
//             <ul className="flex flex-col p-6 space-y-6">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="block text-lg font-medium text-slate-300 hover:text-white hover:pl-2 transition-all"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//               {/* Mobile CTA */}
//               <li>
//                 <a
//                   href="#contact"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg"
//                 >
//                   Let's Connect
//                 </a>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };





// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const navLinks = [
//   // "About" usually refers to the top Hero section, or the specific About Me section.
//   // If you want "About" to go to the Hero section, change this to "#about" and ensure Hero has id="about".
//   { href: '#about', label: 'About' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#experience', label: 'Experience' },
//   { href: '#education', label: 'Education' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#certifications', label: 'Achievements' },
//   // Removed "Contact" from list since it's a button now
// ];

// export const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-3 shadow-xl'
//           : 'bg-slate-900 border-b border-slate-800 py-4'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
//         {/* LOGO */}
//         <a href="#" className="flex items-center gap-2 group">
//           <span className="font-serif text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
//             Ifreen Siddiqui
//           </span>
//         </a>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:block">
//           <ul className="flex items-center gap-8">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group tracking-wide"
//                 >
//                   {link.label}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
//                 </a>
//               </li>
//             ))}
            
//             {/* "LET'S CONNECT" BUTTON */}
//             <li>
//                 <a 
//                     href="#contact"
//                     className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
//                 >
//                     Let's Connect
//                 </a>
//             </li>
//           </ul>
//         </nav>

//         {/* MOBILE TOGGLE */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: '100vh' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-xl overflow-hidden"
//           >
//             <ul className="flex flex-col p-6 space-y-6">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="block text-lg font-medium text-slate-300 hover:text-white hover:pl-2 transition-all"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//               {/* Mobile CTA */}
//               <li>
//                 <a
//                   href="#contact"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg"
//                 >
//                   Let's Connect
//                 </a>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };




import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  // 1. ADDED "HOME" HERE
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Achievements' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-3 shadow-xl'
          : 'bg-slate-900 border-b border-slate-800 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO - Now points to Home */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-serif text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
            Ifreen Siddiqui
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group tracking-wide"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
            
            {/* BUTTON */}
            <li>
                <a 
                    href="#contact"
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                    Let's Connect
                </a>
            </li>
          </ul>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium text-slate-300 hover:text-white hover:pl-2 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg"
                >
                  Let's Connect
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};