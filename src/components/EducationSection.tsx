import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const educationTimeline = [
  {
    degree: 'B.Tech in Artificial Intelligence',
    institution: 'Vishwakarma Institute of Technology, Pune',
    period: '2024 – 2028',
    icon: GraduationCap,
    current: true,
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'SMT. CHM College, Ulhasnagar',
    period: '2022 – 2024',
    icon: BookOpen,
    current: false,
  },
  {
    degree: 'Secondary Education',
    institution: 'Dr. Zakir Hussain Urdu School',
    period: '2017 – 2022',
    icon: School,
    current: false,
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="bg-background">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Academic journey and continuous learning
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            <div className="space-y-8">
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-1.5 mt-8 md:mt-6 z-10" />

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className={`glass-card p-6 card-hover ${item.current ? 'ring-2 ring-primary/30' : ''}`}>
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                          <item.icon size={20} />
                        </div>
                        <span className="text-sm font-medium text-primary">{item.period}</span>
                        {item.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.degree}</h3>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
