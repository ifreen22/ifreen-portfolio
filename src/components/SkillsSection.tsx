import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Layout,
  Server,
  Brain,
  Database,
  Cloud,
  Binary,
  Wrench,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Terminal,
  Code2,
  GitBranch,
  Layers,
  Zap,
  ArrowRight,
  Cpu,
} from 'lucide-react';

// Categories tailored to real-world software engineering
type CategoryFilter = 'all' | 'frontend' | 'backend' | 'ai' | 'data' | 'devops' | 'cs';

interface TechItem {
  name: string;
  badge?: string;
  isLearning?: boolean;
}

interface ToolkitCategory {
  id: string;
  filterType: CategoryFilter;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  iconBg: string;
  borderHover: string;
  titleHover: string;
  badgeHoverText: string;
  technologies: TechItem[];
  proofOfExperience: string[];
}

const toolkitData: ToolkitCategory[] = [
  {
    id: 'frontend',
    filterType: 'frontend',
    title: 'Frontend Engineering',
    tagline: 'Modern, component-driven, responsive user interfaces',
    icon: Layout,
    accentColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200/80',
    borderHover: 'hover:border-blue-300 hover:shadow-blue-900/5',
    titleHover: 'group-hover:text-blue-600',
    badgeHoverText: 'group-hover/chip:text-blue-700',
    technologies: [
      { name: 'React.js', badge: 'Multi-Page Web Apps' },
      { name: 'Next.js', badge: 'SSR & App Router' },
      { name: 'TypeScript', badge: 'Type-Safe Architecture' },
      { name: 'JavaScript (ES6+)', badge: 'Async & DOM' },
      { name: 'Tailwind CSS', badge: 'Design Systems' },
      { name: 'HTML5 & CSS3', badge: 'Semantic & Accessible' },
      { name: 'Vite', badge: 'Build Pipeline' },
      { name: 'REST API Integration', badge: 'Async Data Fetching' },
    ],
    proofOfExperience: [
      'Portfolio Website & Reusable Design System',
      'UrbanPulse Smart City Platform User Interfaces',
      'Responsive, Cross-Device Production Web Applications',
    ],
  },
  {
    id: 'backend',
    filterType: 'backend',
    title: 'Backend Engineering',
    tagline: 'High-throughput APIs, services, and secure architectures',
    icon: Server,
    accentColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-200/80',
    borderHover: 'hover:border-blue-300 hover:shadow-blue-900/5',
    titleHover: 'group-hover:text-blue-700',
    badgeHoverText: 'group-hover/chip:text-blue-700',
    technologies: [
      { name: 'FastAPI', badge: 'Async Python Microservices' },
      { name: 'Node.js', badge: 'Event-Driven Runtime' },
      { name: 'Express.js', badge: 'Server & Routing' },
      { name: 'RESTful API Design', badge: 'Clean Contract Specs' },
      { name: 'JWT Authentication', badge: 'Token Guards & Security' },
      { name: 'Prisma ORM', badge: 'Type-Safe Data Layer' },
      { name: 'Server Architecture', badge: 'Modular Services' },
      { name: 'JSON Schema Validation', badge: 'Data Contracts' },
    ],
    proofOfExperience: [
      'Industry-Sponsored Enterprise AI Project Backend',
      'Telemetry Data Ingestion & Transformation APIs',
      'Robust Authentication & Protected Endpoint Handlers',
    ],
  },
  {
    id: 'ai-ml',
    filterType: 'ai',
    title: 'Artificial Intelligence & ML',
    tagline: 'Applied machine learning, deep learning, and vision pipelines',
    icon: Brain,
    accentColor: 'text-purple-600',
    iconBg: 'bg-purple-50 border-purple-200/80',
    borderHover: 'hover:border-blue-300 hover:shadow-blue-900/5',
    titleHover: 'group-hover:text-blue-700',
    badgeHoverText: 'group-hover/chip:text-blue-700',
    technologies: [
      { name: 'Python', badge: 'Core AI Language' },
      { name: 'TensorFlow & Keras', badge: 'Deep Learning Networks' },
      { name: 'Scikit-learn', badge: 'Classical Classifiers' },
      { name: 'OpenCV', badge: 'Computer Vision & Images' },
      { name: 'Pandas & NumPy', badge: 'Vectorized Data Processing' },
      { name: 'Streamlit', badge: 'Rapid AI Deployments' },
      { name: 'Prompt Engineering', badge: 'LLM Agentic Workflows' },
      { name: 'Feature Engineering', badge: 'Pipeline Optimization' },
    ],
    proofOfExperience: [
      'Peer-Reviewed Academic Research Paper Publication',
      'Signature Verification Deep Learning CNN Model',
      'AI-Powered Smart City Environmental Analysis',
      'Anomaly Detection Models & Preprocessing Workflows',
    ],
  },
  {
    id: 'databases',
    filterType: 'data',
    title: 'Databases & Data Management',
    tagline: 'Relational schemas, ACID consistency, and realtime persistence',
    icon: Database,
    accentColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50 border-indigo-200/80',
    borderHover: 'hover:border-blue-300 hover:shadow-blue-900/5',
    titleHover: 'group-hover:text-blue-700',
    badgeHoverText: 'group-hover/chip:text-blue-700',
    technologies: [
      { name: 'MySQL', badge: 'Relational Schemas' },
      { name: 'PostgreSQL', badge: 'ACID & Complex Joins' },
      { name: 'SQLite', badge: 'Embedded Storage' },
      { name: 'Firebase / Firestore', badge: 'Realtime Document DB' },
      { name: 'SQL Query Optimization', badge: 'Indexing & Performance' },
      { name: 'Relational Modeling', badge: 'Foreign Keys & Normalization' },
    ],
    proofOfExperience: [
      'User Authentication & State Management Data Stores',
      'Industry Project Telemetry Schema & Persistence Layer',
      'Relational Database Modeling with Normalized Tables',
    ],
  },
  {
    id: 'cloud-devops',
    filterType: 'devops',
    title: 'Cloud & DevOps Engineering',
    tagline: 'Source control, continuous deployment, and container workflows',
    icon: Cloud,
    accentColor: 'text-sky-600',
    iconBg: 'bg-sky-50 border-sky-200/80',
    borderHover: 'hover:border-blue-300 hover:shadow-blue-900/5',
    titleHover: 'group-hover:text-blue-700',
    badgeHoverText: 'group-hover/chip:text-blue-700',
    technologies: [
      { name: 'Git', badge: '50+ Commits & Branching' },
      { name: 'GitHub', badge: 'PRs & Code Reviews' },
      { name: 'Docker', badge: 'Containerization Basics' },
      { name: 'Linux / Bash', badge: 'CLI & Server Operations' },
      { name: 'Vercel', badge: 'Automated CI/CD' },
      { name: 'Netlify', badge: 'Edge Deployments' },
      { name: 'GitHub Actions', badge: 'Automated Workflows' },
    ],
    proofOfExperience: [
      'Production Web Deployments with Custom Domain Setup',
      'Version Control Discipline with Git Flow & Commit Hygiene',
      'Collaborative Development Across Hackathons & IEEE Conclaves',
    ],
  },
  {
    id: 'cs-foundations',
    filterType: 'cs',
    title: 'Computer Science Foundations',
    tagline: 'Algorithmic fundamentals, systems architecture, and core theory',
    icon: Binary,
    accentColor: 'text-rose-600',
    iconBg: 'bg-rose-50 border-rose-200/80',
    borderHover: 'hover:border-blue-300 hover:shadow-blue-900/5',
    titleHover: 'group-hover:text-blue-700',
    badgeHoverText: 'group-hover/chip:text-blue-700',
    technologies: [
      { name: 'Data Structures & Algorithms', badge: 'LeetCode & Problem Solving' },
      { name: 'Object-Oriented Programming', badge: 'C++ & Python Architecture' },
      { name: 'Operating Systems', badge: 'Memory, Threads & Processes' },
      { name: 'Database Management Systems', badge: 'Concurrency, Indexing & ACID' },
      { name: 'Computer Networks', badge: 'TCP/IP, HTTP/HTTPS & Sockets' },
      { name: 'System Design Principles', badge: 'Scalability & Decoupling' },
    ],
    proofOfExperience: [
      'Applied Across All Software Architecture & Hackathon Sprints',
      'Strong Academic Performance (CGPA 9.16 at VIT Pune)',
      'National Hackathon Finalist (Jaipur Cybrathon Rank 17/250)',
    ],
  },
  {
    id: 'dev-tools',
    filterType: 'frontend',
    title: 'Developer Tooling & Productivity',
    tagline: 'Engineering utilities that streamline testing and acceleration',
    icon: Wrench,
    accentColor: 'text-amber-600',
    iconBg: 'bg-amber-50 border-amber-200/80',
    borderHover: 'hover:border-blue-300 hover:shadow-blue-900/5',
    titleHover: 'group-hover:text-blue-700',
    badgeHoverText: 'group-hover/chip:text-blue-700',
    technologies: [
      { name: 'VS Code', badge: 'Daily Primary Editor' },
      { name: 'Postman', badge: 'API Testing & Validation' },
      { name: 'Jupyter Notebooks', badge: 'EDA & Model Prototyping' },
      { name: 'Cursor & Claude Code', badge: 'AI-Assisted Engineering' },
      { name: 'GitHub Copilot', badge: 'Pair Programming Acceleration' },
      { name: 'npm / bun', badge: 'Package Ecosystems' },
      { name: 'Figma', badge: 'Design System Handoffs' },
    ],
    proofOfExperience: [
      'Daily Engineering, Debugging & Testing Workflows',
      'Endpoint Verification & Schema Contract Testing',
      'AI-Augmented Rapid Prototyping & Code Reviews',
    ],
  },
];

// Engineering Practices that top hiring teams look for
const engineeringPractices = [
  { name: 'Version Control & Git Flow', desc: 'Feature branches, PR reviews, and semantic commit hygiene.' },
  { name: 'Clean Architecture & Modular Code', desc: 'Decoupled layers, high cohesion, and readable self-documenting code.' },
  { name: 'API-First Contract Design', desc: 'Predictable schemas, RESTful standards, and robust error handling.' },
  { name: 'Component-Based UI Architecture', desc: 'Atomic design, reusability, and accessible design system tokens.' },
  { name: 'Agile & Hackathon Sprints', desc: 'Delivering functional MVP increments under tight 36-hour timelines.' },
  { name: 'Documentation & Technical Specs', desc: 'System architecture diagrams, RFC writeups, and clear README files.' },
  { name: 'Defensive Coding & Validation', desc: 'Schema sanitization, input boundaries, and token authorization.' },
  { name: 'Performance Profiling Mindset', desc: 'Minimizing runtime render cycles, caching queries, and latency audits.' },
];

// Active Engineering Pursuits (Outcomes & Capabilities)
const currentlyLearning = [
  { name: 'Building Containerized Applications (Docker)', tag: 'Active Implementation', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { name: 'Deploying Cloud-Native Systems (AWS)', tag: 'Architecture', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { name: 'In-Memory Caching & Latency Reduction (Redis)', tag: 'Performance', color: 'bg-red-50 text-red-700 border-red-200' },
  { name: 'Vector Search & GraphRAG Retrieval Systems', tag: 'Applied AI', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { name: 'Agentic Workflows & Multi-Agent AI (LangGraph)', tag: 'Deep Dive', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { name: 'Container Orchestration (Kubernetes)', tag: 'Infrastructure', color: 'bg-sky-50 text-sky-700 border-sky-200' },
  { name: 'High-Throughput System Design Scaling', tag: 'System Design', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { name: 'Automated CI/CD Deployment Pipelines', tag: 'DevOps', color: 'bg-slate-100 text-slate-800 border-slate-200' },
];

export const SkillsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Domains (7)' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'data', label: 'Databases' },
    { id: 'devops', label: 'Cloud & DevOps' },
    { id: 'cs', label: 'CS Foundations' },
  ];

  const filteredCategories =
    activeFilter === 'all'
      ? toolkitData
      : toolkitData.filter((cat) => cat.filterType === activeFilter);

  return (
    <section
      id="skills"
      ref={ref}
      aria-label="Engineering Toolkit"
      className="relative bg-slate-50/60 py-24 md:py-32 px-6 md:px-12 border-t border-slate-200/60 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-blue-100/35 blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full bg-indigo-100/35 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ========================================================
            1. SECTION HEADER
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            Technical Architecture & Execution
          </div>

          {/* Heading (Preserves serif font) */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Engineering Toolkit
          </h2>

          {/* Recruiter-Focused Subtitle */}
          <p className="font-timmana text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed">
            A practical engineering stack developed through production-grade projects, research publications, hackathons, and industry-sponsored collaboration.
          </p>
        </motion.div>

        {/* ========================================================
            2. RECRUITER DOMAIN FILTER TABS
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center flex-wrap gap-2 mb-12"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-slate-900 text-white shadow-xs scale-102'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* ========================================================
            3. CORE TOOLKIT CARDS (WITH VERIFIED PROOF)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20 md:mb-24">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
                className={`group bg-white hover:bg-blue-50/30 border border-slate-200/90 rounded-2xl md:rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 ${category.borderHover} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Card Header: Icon + Title + Tagline */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${category.iconBg} ${category.accentColor} group-hover:scale-108 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold text-slate-900 ${category.titleHover} transition-colors`}>
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {category.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Technology Chips with Interactive High-Contrast Hover Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="group/chip inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:border-blue-200 hover:text-slate-900 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        <span className="group-hover/chip:text-white transition-colors">{tech.name}</span>
                        {tech.badge && (
                          <span
                            className={`text-[10px] font-semibold text-slate-600 bg-white border border-slate-200/90 px-1.5 py-0.5 rounded-md group-hover/chip:bg-white ${category.badgeHoverText} group-hover/chip:border-blue-200 transition-all duration-200`}
                          >
                            {tech.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* MANDATORY PROOF OF EXPERIENCE BOX */}
                <div className="pt-4 border-t border-slate-100 bg-slate-50/70 group-hover:bg-slate-50 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-4 sm:p-5 rounded-b-2xl md:rounded-b-3xl transition-colors duration-300">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Experience & Project Evidence</span>
                  </div>
                  <ul className="space-y-1.5">
                    {category.proofOfExperience.map((proof, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed"
                      >
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{proof}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================
            4. ENGINEERING PRACTICES (Habits of Exceptional Engineers)
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xs mb-16 md:mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Team & Code Standards</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Engineering Practices & Workflows
              </h3>
            </div>
            <p className="font-oleo-script text-sm sm:text-base text-slate-500 max-w-md">
              The engineering habits, architectural principles, and collaboration standards I apply to write scalable, production-ready code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringPractices.map((practice, index) => (
              <div
                key={practice.name}
                className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-xs hover:border-slate-300 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {practice.name}
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {practice.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ========================================================
            5. CURRENTLY LEARNING & GROWTH MINDSET
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-7 sm:p-9 shadow-xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Continuous Engineering Evolution</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Currently Exploring & Mastering
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Technologies and distributed architectures I am actively practicing to prepare for high-scale enterprise engineering teams.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {currentlyLearning.map((item) => (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/90 border border-slate-700/80 text-xs sm:text-sm text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="font-semibold">{item.name}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${item.color}`}>
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Recruiter Guarantee Footer */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                Proven ability to ramp up on new tech stacks in days, not weeks.
              </span>
              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                <span>View Real-World Implementations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
