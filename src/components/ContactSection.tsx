// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { Mail, Linkedin, Send, MapPin } from 'lucide-react';
// import { toast } from '@/hooks/use-toast';

// export const ContactSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       toast({
//         title: "Message sent!",
//         description: "Thank you for reaching out. I'll get back to you soon.",
//       });
//       (e.target as HTMLFormElement).reset();
//     }, 1000);
//   };

//   return (
//     <section id="contact" className="bg-muted/30">
//       <div className="section-container" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="section-title">Let's Connect</h2>
//           <p className="section-subtitle max-w-2xl mx-auto">
//             Open to internship opportunities, collaborations, and conversations about tech
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <div className="glass-card p-6">
//               <h3 className="text-lg font-semibold text-foreground mb-6">Get in Touch</h3>
              
//               <div className="space-y-4">
//                 <a
//                   href="mailto:ifreensiddiqui22@gmail.com"
//                   className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
//                 >
//                   <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                     <Mail size={20} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">Email</p>
//                     <p className="font-medium text-foreground">ifreensiddiqui22@gmail.com</p>
//                   </div>
//                 </a>

//                 <a
//                   href="https://www.linkedin.com/in/ifreen"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
//                 >
//                   <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                     <Linkedin size={20} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">LinkedIn</p>
//                     <p className="font-medium text-foreground">linkedin.com/in/ifreen</p>
//                   </div>
//                 </a>

//                 <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
//                   <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
//                     <MapPin size={20} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">Location</p>
//                     <p className="font-medium text-foreground">Pune, Maharashtra, India</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
//               <h3 className="text-lg font-semibold text-foreground mb-2">Send a Message</h3>
              
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   required
//                   className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
//                   placeholder="What's this about?"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={4}
//                   className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
//                   placeholder="Your message..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-coral-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>Processing...</>
//                 ) : (
//                   <>
//                     <Send size={18} />
//                     Send Message
//                   </>
//                 )}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };



// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { Mail, Linkedin, Send, MapPin, Github, Code2 } from 'lucide-react';
// import { toast } from '@/hooks/use-toast';

// export const ContactSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       toast({
//         title: "Message sent!",
//         description: "Thank you for reaching out. I'll get back to you soon.",
//       });
//       (e.target as HTMLFormElement).reset();
//     }, 1000);
//   };

//   return (
//     <section id="contact" className="bg-muted/30">
//       <div className="section-container" ref={ref}>
//         {/* SECTION HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="section-title">Let's Connect</h2>
//           <p className="section-subtitle max-w-2xl mx-auto">
//             Open to internship opportunities, collaborations, and conversations about tech
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
//           {/* --- LEFT COLUMN: CONTACT INFO --- */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <div className="glass-card p-6">
//               <h3 className="text-lg font-semibold text-foreground mb-6">Get in Touch</h3>
              
//               <div className="space-y-4">
                
//                 {/* 1. EMAIL */}
//                 <a
//                   href="mailto:ifreensiddiqui22@gmail.com"
//                   className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
//                 >
//                   <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                     <Mail size={20} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">Email</p>
//                     <p className="font-medium text-foreground text-sm sm:text-base">ifreensiddiqui22@gmail.com</p>
//                   </div>
//                 </a>

//                 {/* 2. LINKEDIN */}
//                 <a
//                   href="https://www.linkedin.com/in/ifreen"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
//                 >
//                   <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                     <Linkedin size={20} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">LinkedIn</p>
//                     <p className="font-medium text-foreground text-sm sm:text-base">linkedin.com/in/ifreen</p>
//                   </div>
//                 </a>

//                 {/* 3. GITHUB (Added) */}
//                 <a
//                   href="https://github.com/ifreen22"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
//                 >
//                   <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                     <Github size={20} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">GitHub</p>
//                     <p className="font-medium text-foreground text-sm sm:text-base">github.com/ifreen22</p>
//                   </div>
//                 </a>

//                 {/* 4. LEETCODE (Added) */}
//                 <a
//                   href="https://leetcode.com/u/ifreen2007/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
//                 >
//                   <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                     {/* Used Code2 icon for LeetCode representation */}
//                     <Code2 size={20} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">LeetCode</p>
//                     <p className="font-medium text-foreground text-sm sm:text-base">leetcode.com/u/ifreen2007</p>
//                   </div>
//                 </a>

//                 {/* 5. LOCATION */}
//                 <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
//                   <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
//                     <MapPin size={20} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">Location</p>
//                     <p className="font-medium text-foreground text-sm sm:text-base">Pune, Maharashtra, India</p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </motion.div>

//           {/* --- RIGHT COLUMN: FORM --- */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
//               <h3 className="text-lg font-semibold text-foreground mb-2">Send a Message</h3>
              
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   required
//                   className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
//                   placeholder="What's this about?"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={4}
//                   className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
//                   placeholder="Your message..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-coral-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>Processing...</>
//                 ) : (
//                   <>
//                     <Send size={18} />
//                     Send Message
//                   </>
//                 )}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };



// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { Mail, Linkedin, Send, MapPin, Github, Code2, CheckCircle2 } from 'lucide-react';

// export const ContactSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });
  
//   // States for the form
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setErrorMessage("");

//     const formData = new FormData(e.currentTarget);
    
//     try {
//         // REPLACE THE URL BELOW WITH YOUR FORMSPREE ENDPOINT
//         const response = await fetch("https://formspree.io/f/YOUR_FORM_ID_HERE", {
//             method: "POST",
//             body: formData,
//             headers: {
//                 'Accept': 'application/json'
//             }
//         });

//         if (response.ok) {
//             setIsSuccess(true);
//             (e.target as HTMLFormElement).reset();
//         } else {
//             const data = await response.json();
//             if (Object.hasOwn(data, 'errors')) {
//                 setErrorMessage(data["errors"].map((error: any) => error["message"]).join(", "));
//             } else {
//                 setErrorMessage("Oops! There was a problem submitting your form");
//             }
//         }
//     } catch (error) {
//         setErrorMessage("Oops! There was a problem submitting your form");
//     } finally {
//         setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="bg-slate-50 py-24 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto" ref={ref}>
        
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Let's Connect</h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Open to internship opportunities, collaborations, and conversations about AI & Tech.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
//           {/* --- LEFT COLUMN: CONTACT INFO --- */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
//               <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Details</h3>
              
//               <div className="space-y-6">
                
//                 {/* 1. EMAIL */}
//                 <a href="mailto:ifreensiddiqui22@gmail.com" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
//                     <Mail size={24} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
//                     <p className="font-medium text-slate-900 break-all">ifreensiddiqui22@gmail.com</p>
//                   </div>
//                 </a>

//                 {/* 2. LINKEDIN */}
//                 <a href="https://www.linkedin.com/in/ifreen" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
//                     <Linkedin size={24} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">LinkedIn</p>
//                     <p className="font-medium text-slate-900">linkedin.com/in/ifreen</p>
//                   </div>
//                 </a>

//                 {/* 3. GITHUB */}
//                 <a href="https://github.com/ifreen22" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-all">
//                     <Github size={24} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">GitHub</p>
//                     <p className="font-medium text-slate-900">github.com/ifreen22</p>
//                   </div>
//                 </a>

//                 {/* 4. LOCATION */}
//                 <div className="flex items-start gap-5 p-4 rounded-2xl">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600">
//                     <MapPin size={24} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
//                     <p className="font-medium text-slate-900">Pune, Maharashtra, India</p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </motion.div>

//           {/* --- RIGHT COLUMN: FORM --- */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg relative overflow-hidden">
                
//               {/* SUCCESS STATE UI (Prevents Blank Screen) */}
//               {isSuccess ? (
//                 <div className="flex flex-col items-center justify-center text-center h-[400px] animate-fade-in">
//                     <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
//                         <CheckCircle2 className="w-10 h-10 text-green-600" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
//                     <p className="text-slate-600 max-w-xs mx-auto mb-8">
//                         Thank you for reaching out. I will get back to you as soon as possible.
//                     </p>
//                     <button 
//                         onClick={() => setIsSuccess(false)}
//                         className="px-6 py-2 bg-slate-100 text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
//                     >
//                         Send Another Message
//                     </button>
//                 </div>
//               ) : (
//                 /* FORM UI */
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>
                  
//                   <div className="grid sm:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label htmlFor="name" className="text-sm font-bold text-slate-700">Name</label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         required
//                         className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="email" className="text-sm font-bold text-slate-700">Email</label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                         placeholder="john@example.com"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       required
//                       className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                       placeholder="Collaboration / Inquiry"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
//                       placeholder="Hi Ifreen, I'd like to discuss..."
//                     />
//                   </div>

//                   {errorMessage && (
//                     <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg">
//                         {errorMessage}
//                     </p>
//                   )}

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isSubmitting ? (
//                       <span>Sending...</span>
//                     ) : (
//                       <>
//                         <Send size={20} />
//                         Send Message
//                       </>
//                     )}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };




// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { Mail, Linkedin, Send, MapPin, Github, Code2, CheckCircle2 } from 'lucide-react';

// export const ContactSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });
  
//   // States for the form
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setErrorMessage("");

//     const formData = new FormData(e.currentTarget);
    
//     try {
//         // --------------------------------------------------------
//         // 🔴 IMPORTANT: REPLACE 'YOUR_FORM_ID_HERE' WITH YOUR ID
//         // Example: "https://formspree.io/f/mqazklmp"
//         // --------------------------------------------------------
//         const response = await fetch("https://formspree.io/f/YOUR_FORM_ID_HERE", {
//             method: "POST",
//             body: formData,
//             headers: {
//                 'Accept': 'application/json'
//             }
//         });

//         if (response.ok) {
//             setIsSuccess(true);
//             (e.target as HTMLFormElement).reset();
//         } else {
//             const data = await response.json();
//             if (Object.hasOwn(data, 'errors')) {
//                 setErrorMessage(data["errors"].map((error: any) => error["message"]).join(", "));
//             } else {
//                 setErrorMessage("Oops! Form ID is invalid. Did you create a Formspree account?");
//             }
//         }
//     } catch (error) {
//         setErrorMessage("Network error. Please try again later.");
//     } finally {
//         setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="bg-slate-50 py-24 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto" ref={ref}>
        
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Let's Connect</h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Open to internship opportunities, collaborations, and conversations about AI & Tech.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
//           {/* --- LEFT COLUMN: CONTACT INFO --- */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
//               <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Details</h3>
              
//               <div className="space-y-6">
                
//                 {/* 1. EMAIL */}
//                 <a href="mailto:ifreensiddiqui22@gmail.com" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
//                     <Mail size={24} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
//                     <p className="font-medium text-slate-900 break-all">ifreensiddiqui22@gmail.com</p>
//                   </div>
//                 </a>

//                 {/* 2. LINKEDIN */}
//                 <a href="https://www.linkedin.com/in/ifreen" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
//                     <Linkedin size={24} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">LinkedIn</p>
//                     <p className="font-medium text-slate-900">linkedin.com/in/ifreen</p>
//                   </div>
//                 </a>

//                 {/* 3. GITHUB */}
//                 <a href="https://github.com/ifreen22" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-all">
//                     <Github size={24} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">GitHub</p>
//                     <p className="font-medium text-slate-900">github.com/ifreen22</p>
//                   </div>
//                 </a>

//                 {/* 4. LEETCODE */}
//                 <a href="https://leetcode.com/u/ifreen2007/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
//                     <Code2 size={24} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">LeetCode</p>
//                     <p className="font-medium text-slate-900">leetcode.com/u/ifreen2007</p>
//                   </div>
//                 </a>

//                 {/* 5. LOCATION */}
//                 <div className="flex items-start gap-5 p-4 rounded-2xl">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600">
//                     <MapPin size={24} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
//                     <p className="font-medium text-slate-900">Pune, Maharashtra, India</p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </motion.div>

//           {/* --- RIGHT COLUMN: FORM --- */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg relative overflow-hidden">
                
//               {/* SUCCESS STATE UI */}
//               {isSuccess ? (
//                 <div className="flex flex-col items-center justify-center text-center h-[400px] animate-fade-in">
//                     <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
//                         <CheckCircle2 className="w-10 h-10 text-green-600" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
//                     <p className="text-slate-600 max-w-xs mx-auto mb-8">
//                         Thank you for reaching out. I will get back to you as soon as possible.
//                     </p>
//                     <button 
//                         onClick={() => setIsSuccess(false)}
//                         className="px-6 py-2 bg-slate-100 text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
//                     >
//                         Send Another Message
//                     </button>
//                 </div>
//               ) : (
//                 /* FORM UI */
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>
                  
//                   <div className="grid sm:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label htmlFor="name" className="text-sm font-bold text-slate-700">Name</label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         required
//                         className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                         placeholder="Your Name"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="email" className="text-sm font-bold text-slate-700">Email</label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                         placeholder="your@email.com"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       required
//                       className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                       placeholder="Collaboration / Inquiry"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
//                       placeholder="Hi Ifreen, I'd like to discuss..."
//                     />
//                   </div>

//                   {errorMessage && (
//                     <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
//                         {errorMessage}
//                     </p>
//                   )}

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isSubmitting ? (
//                       <span>Sending...</span>
//                     ) : (
//                       <>
//                         <Send size={20} />
//                         Send Message
//                       </>
//                     )}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };




// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Mail, Linkedin, MapPin, Github, ArrowRight, ExternalLink } from 'lucide-react';

// export const ContactSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   return (
//     <section id="contact" className="bg-slate-50 py-24 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto" ref={ref}>
        
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Let's Connect</h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          
//           {/* --- LEFT: CONTACT DETAILS --- */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-6">Find me on</h3>
                
//                 <div className="space-y-6">
//                     {/* LINKEDIN */}
//                     <a href="https://www.linkedin.com/in/ifreen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
//                         <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
//                             <Linkedin size={24} />
//                         </div>
//                         <div>
//                             <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">LinkedIn</p>
//                             <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">linkedin.com/in/ifreen</p>
//                         </div>
//                         <ExternalLink size={16} className="text-slate-300 ml-auto group-hover:text-blue-600 transition-colors" />
//                     </a>

//                     {/* GITHUB */}
//                     <a href="https://github.com/ifreen22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
//                         <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
//                             <Github size={24} />
//                         </div>
//                         <div>
//                             <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">GitHub</p>
//                             <p className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">github.com/ifreen22</p>
//                         </div>
//                         <ExternalLink size={16} className="text-slate-300 ml-auto group-hover:text-slate-900 transition-colors" />
//                     </a>

//                     {/* LOCATION */}
//                     <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
//                             <MapPin size={24} />
//                         </div>
//                         <div>
//                             <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Location</p>
//                             <p className="font-semibold text-slate-900">Pune, Maharashtra, India</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           </motion.div>

//           {/* --- RIGHT: DIRECT EMAIL CTA (The Solution) --- */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <div className="bg-slate-900 rounded-3xl p-10 text-center text-white shadow-xl relative overflow-hidden group">
                
//                 {/* Background Glow */}
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
//                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

//                 <div className="relative z-10">
//                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6 backdrop-blur-sm">
//                         <Mail size={32} />
//                     </div>
                    
//                     <h3 className="text-3xl font-serif font-bold mb-4">Have an Idea?</h3>
//                     <p className="text-slate-300 mb-8 max-w-sm mx-auto leading-relaxed">
//                         I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
//                     </p>

//                     {/* THE MAGIC BUTTON - OPENS EMAIL APP DIRECTLY */}
//                     <a 
//                         href="mailto:ifreensiddiqui22@gmail.com"
//                         className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 hover:scale-105 transition-all shadow-lg group-hover:shadow-blue-500/25"
//                     >
//                         <span>Say Hello</span>
//                         <ArrowRight size={20} />
//                     </a>
                    
//                     <p className="mt-6 text-xs text-slate-500">
//                         Response time: Usually within 24 hours
//                     </p>
//                 </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };




// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { Mail, Linkedin, MapPin, Github, Code2, Send, CheckCircle2 } from 'lucide-react';

// export const ContactSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });
  
//   // --- FORM STATE ---
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setErrorMessage("");

//     const formData = new FormData(e.currentTarget);
    
//     try {
//         // ---------------------------------------------------------
//         // YOUR FORMSPREE LINK IS NOW INTEGRATED HERE 👇
//         // ---------------------------------------------------------
//         const response = await fetch("https://formspree.io/f/mlggredg", {
//             method: "POST",
//             body: formData,
//             headers: {
//                 'Accept': 'application/json'
//             }
//         });

//         if (response.ok) {
//             setIsSuccess(true);
//             (e.target as HTMLFormElement).reset();
//         } else {
//             setErrorMessage("Oops! Something went wrong. Please try again.");
//         }
//     } catch (error) {
//         setErrorMessage("Connection error. Please check your internet.");
//     } finally {
//         setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="bg-slate-50 py-24 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto" ref={ref}>
        
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Let's Connect</h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
//           {/* --- LEFT: CONTACT DETAILS --- */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-8">Find me on</h3>
                
//                 <div className="space-y-5">
                    
//                     {/* 1. EMAIL */}
//                     <a href="mailto:ifreensiddiqui22@gmail.com" className="flex items-center gap-4 group">
//                         <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
//                             <Mail size={24} />
//                         </div>
//                         <div>
//                             <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
//                             <p className="font-semibold text-slate-900 break-all group-hover:text-orange-600 transition-colors">ifreensiddiqui22@gmail.com</p>
//                         </div>
//                     </a>

//                     {/* 2. LINKEDIN */}
//                     <a href="https://www.linkedin.com/in/ifreen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
//                         <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
//                             <Linkedin size={24} />
//                         </div>
//                         <div>
//                             <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">LinkedIn</p>
//                             <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">linkedin.com/in/ifreen</p>
//                         </div>
//                     </a>

//                     {/* 3. GITHUB */}
//                     <a href="https://github.com/ifreen22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
//                         <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
//                             <Github size={24} />
//                         </div>
//                         <div>
//                             <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">GitHub</p>
//                             <p className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">github.com/ifreen22</p>
//                         </div>
//                     </a>

//                     {/* 4. LEETCODE */}
//                     <a href="https://leetcode.com/u/ifreen2007/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
//                         <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-all">
//                             <Code2 size={24} />
//                         </div>
//                         <div>
//                             <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">LeetCode</p>
//                             <p className="font-semibold text-slate-900 group-hover:text-yellow-600 transition-colors">leetcode.com/u/ifreen2007</p>
//                         </div>
//                     </a>

//                     {/* 5. LOCATION */}
//                     <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
//                         <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
//                             <MapPin size={24} />
//                         </div>
//                         <div>
//                             <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</p>
//                             <p className="font-semibold text-slate-900">Pune, Maharashtra, India</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//           </motion.div>

//           {/* --- RIGHT: CONTACT FORM (CONNECTED) --- */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl h-full relative overflow-hidden">
                
//                 {isSuccess ? (
//                     // SUCCESS MESSAGE
//                     <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px]">
//                         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
//                             <CheckCircle2 className="w-10 h-10 text-green-600" />
//                         </div>
//                         <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
//                         <p className="text-slate-600 max-w-xs mx-auto mb-8">
//                             Thank you for reaching out. I'll check my inbox and get back to you soon.
//                         </p>
//                         <button 
//                             onClick={() => setIsSuccess(false)}
//                             className="px-6 py-2 bg-slate-100 text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
//                         >
//                             Send Another
//                         </button>
//                     </div>
//                 ) : (
//                     // FORM
//                     <form onSubmit={handleSubmit} className="space-y-5">
//                         <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
                        
//                         <div className="grid sm:grid-cols-2 gap-4">
//                             <div className="space-y-2">
//                                 <label htmlFor="name" className="text-sm font-bold text-slate-700">Name</label>
//                                 <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Your Name" />
//                             </div>
//                             <div className="space-y-2">
//                                 <label htmlFor="email" className="text-sm font-bold text-slate-700">Email</label>
//                                 <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="hello@example.com" />
//                             </div>
//                         </div>

//                         <div className="space-y-2">
//                             <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
//                             <input type="text" name="subject" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Project Inquiry" />
//                         </div>

//                         <div className="space-y-2">
//                             <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
//                             <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none" placeholder="Hi Ifreen, I'd like to discuss..."></textarea>
//                         </div>

//                         {errorMessage && (
//                             <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg text-center">{errorMessage}</p>
//                         )}

//                         <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-700 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
//                             {isSubmitting ? <span>Sending...</span> : <><Send size={20} /> Send Message</>}
//                         </button>
//                     </form>
//                 )}
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };





import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, MapPin, Github, Code2, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // --- FORM STATE ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    try {
        const response = await fetch("https://formspree.io/f/mlggredg", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();
        } else {
            setErrorMessage("Oops! Something went wrong. Please try again.");
        }
    } catch (error) {
        setErrorMessage("Connection error. Please check your internet.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        
        {/* HEADER - TYPOGRAPHY FIXED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        {/* GRID - FIXED FOR EQUAL HEIGHT (items-stretch) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* --- LEFT: CONTACT DETAILS --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full" 
          >
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Find me on</h3>
                
                {/* Contact List - Uses flex-grow to distribute space if needed */}
                <div className="space-y-6 flex-grow">
                    
                    {/* 1. EMAIL */}
                    <a href="mailto:ifreensiddiqui22@gmail.com" className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email</p>
                            <p className="font-semibold text-slate-900 break-all group-hover:text-orange-600 transition-colors">ifreensiddiqui22@gmail.com</p>
                        </div>
                    </a>

                    {/* 2. LINKEDIN */}
                    <a href="https://www.linkedin.com/in/ifreen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Linkedin size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">LinkedIn</p>
                            <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">linkedin.com/in/ifreen</p>
                        </div>
                    </a>

                    {/* 3. GITHUB */}
                    <a href="https://github.com/ifreen22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Github size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">GitHub</p>
                            <p className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">github.com/ifreen22</p>
                        </div>
                    </a>

                    {/* 4. LEETCODE */}
                    <a href="https://leetcode.com/u/ifreen2007/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Code2 size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">LeetCode</p>
                            <p className="font-semibold text-slate-900 group-hover:text-yellow-600 transition-colors">leetcode.com/u/ifreen2007</p>
                        </div>
                    </a>
                </div>

                {/* 5. LOCATION (Pushed to bottom) */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Location</p>
                        <p className="font-semibold text-slate-900">Pune, Maharashtra, India</p>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* --- RIGHT: CONTACT FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-full"
          >
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl h-full relative overflow-hidden flex flex-col justify-center">
                
                {isSuccess ? (
                    // SUCCESS MESSAGE
                    <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                        <p className="text-slate-600 max-w-xs mx-auto mb-8">
                            Thank you for reaching out. I'll check my inbox and get back to you soon.
                        </p>
                        <button 
                            onClick={() => setIsSuccess(false)}
                            className="px-6 py-2 bg-slate-100 text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
                        >
                            Send Another
                        </button>
                    </div>
                ) : (
                    // FORM
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-slate-700">Name</label>
                                <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-slate-700">Email</label>
                                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="hello@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
                            <input type="text" name="subject" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Project Inquiry" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                            <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none" placeholder="Hi Ifreen, I'd like to discuss..."></textarea>
                        </div>

                        {errorMessage && (
                            <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg text-center">{errorMessage}</p>
                        )}

                        <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-700 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                            {isSubmitting ? <span>Sending...</span> : <><Send size={20} /> Send Message</>}
                        </button>
                    </form>
                )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};