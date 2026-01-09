import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['C', 'C++', 'Python'],
  },
  {
    title: 'CS Fundamentals',
    icon: Database,
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'SQL'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Tools & Productivity',
    icon: Wrench,
    skills: ['Microsoft Excel', 'Microsoft PowerPoint', 'Git'],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="bg-background">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Building a versatile foundation across programming, fundamentals, and modern tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              className="glass-card p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <category.icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
