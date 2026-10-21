import { motion } from 'framer-motion';
import {
  Blocks,
  BookOpenCheck,
  Compass,
  Layers3,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from 'lucide-react';

const principles = [
  {
    number: '01',
    title: 'Ownership',
    description:
      'Take responsibility for features from planning through deployment, with quality and reliability in mind.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Continuous Learning',
    description:
      'Learn unfamiliar technologies quickly and apply them to practical engineering problems.',
    icon: BookOpenCheck,
  },
  {
    number: '03',
    title: 'Adaptability',
    description:
      'Move across frontend, backend, AI, databases, and cloud as project needs evolve.',
    icon: Compass,
  },
  {
    number: '04',
    title: 'Design Before Code',
    description:
      'Consider architecture, scalability, and maintainability before implementation.',
    icon: Layers3,
  },
  {
    number: '05',
    title: 'Team Collaboration',
    description:
      'Communicate openly, support teammates, and contribute effectively in collaborative environments.',
    icon: MessageCircle,
  },
  {
    number: '06',
    title: 'Problem Solving',
    description:
      'Break complex challenges into smaller engineering tasks and iterate toward practical solutions.',
    icon: Blocks,
  },
  {
    number: '07',
    title: 'User-First Thinking',
    description:
      'Build software around real user problems, avoiding complexity that adds little value.',
    icon: UserRound,
  },
  {
    number: '08',
    title: 'Continuous Improvement',
    description:
      'Use each project to strengthen engineering practices, code quality, and technical skills.',
    icon: Lightbulb,
  },
];

export const InterestsSection = () => {
  return (
    <section
      aria-labelledby="engineering-mindset-title"
      className="bg-white px-5 sm:px-6 pt-8 pb-14 sm:pt-12 sm:pb-20 md:px-12 md:pb-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-9 sm:mb-12 max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            How I work
          </p>
          <h2
            id="engineering-mindset-title"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-[46px]"
          >
            Engineering Mindset
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            The principles that guide how I build software, collaborate with teams, and continuously
            improve as an engineer.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: (index % 2) * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/[0.06]"
              >
                <div className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-700">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-[11px] font-medium tracking-wide text-slate-400">
                        {principle.number}
                      </span>
                      <h3 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-[15px]">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-9 text-center text-xs text-slate-500 sm:text-sm">
          Outside engineering, I enjoy badminton, travelling, music and personal development through
          books.
        </p>
      </div>
    </section>
  );
};
