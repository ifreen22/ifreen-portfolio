import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Target } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Aspiring AI engineer with a disciplined approach to learning and building
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: GraduationCap,
              title: 'Student',
              description: 'B.Tech CSE (AI) at VIT Pune, Class of 2028',
            },
            {
              icon: MapPin,
              title: 'Based in',
              description: 'Pune, Maharashtra, India',
            },
            {
              icon: Target,
              title: 'Focus',
              description: 'AI/ML, Software Engineering, Problem Solving',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 text-center card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I'm a second-year Computer Science Engineering student specializing in Artificial Intelligence 
              at Vishwakarma Institute of Technology, Pune. My journey in tech is driven by a genuine curiosity 
              about how intelligent systems can solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a strong foundation in programming languages like C, C++, and Python, along with 
              solid understanding of data structures, algorithms, and database systems, I'm continuously 
              expanding my technical toolkit. I believe in the power of disciplined learning and 
              consistent practice.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond academics, I'm an active member of the IEEE Student Branch at VIT Pune, where I 
              contribute to organizing technical events and fostering a culture of innovation. Whether 
              it's through hackathons, coding competitions, or collaborative projects, I'm always looking 
              for opportunities to grow and create impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
