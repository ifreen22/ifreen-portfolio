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
    <section id="contact" className="contact-playfair bg-slate-50 py-14 sm:py-20 md:py-24 px-5 sm:px-6 overflow-hidden">
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
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-xl h-full relative overflow-hidden flex flex-col justify-center">
                
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