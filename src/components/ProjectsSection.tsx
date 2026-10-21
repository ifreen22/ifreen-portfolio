import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Terminal,
  Sparkles,
  CheckCircle2,
  Code2,
} from 'lucide-react';

type ProjectFilter = 'all' | 'ai' | 'fullstack' | 'systems';

interface Project {
  id: string;
  category: ProjectFilter;
  badge: string;
  badgeColor: string;
  title: string;
  period: string;
  role: string;
  oneLiner: string;
  metrics: { label: string; value: string }[];
  architecturePoints: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    id: 'workflow-automation',
    category: 'fullstack',
    badge: 'Avinya 4.0 • Internship Selected',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    title: 'Workflow Automation System',
    period: 'May 2026',
    role: 'Full-Stack Developer',
    oneLiner: 'Role-based workflow platform that streamlines employee-manager requests, approvals, and task routing.',
    metrics: [
      { label: 'Access', value: 'Role-Based' },
      { label: 'Routing', value: 'Priority-Based' },
      { label: 'Tracking', value: 'Live Dashboards' },
    ],
    architecturePoints: [
      'Built secure authentication and orchestration for employee requests and manager approvals.',
      'Automated request classification and priority-based task routing to streamline workflow processing.',
      'Created dashboards to track workflow progress and approval timelines.',
    ],
    techStack: ['React.js', 'Firebase', 'REST APIs'],
    githubUrl: 'https://github.com/ifreen22/awis-project',
  },
  {
    id: 'financial-warning-system',
    category: 'ai',
    badge: 'AI & Financial Risk',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    title: 'Financial Warning System',
    period: 'Mar 2026',
    role: 'Machine Learning Engineer',
    oneLiner: 'AI-powered financial risk prediction system for bankruptcy risk analysis with explainable model insights.',
    metrics: [
      { label: 'ROC-AUC', value: '95.05%' },
      { label: 'Model', value: 'XGBoost' },
      { label: 'Insights', value: 'Explainable AI' },
    ],
    architecturePoints: [
      'Developed an end-to-end pipeline for data preprocessing, feature engineering, model training, and real-time inference.',
      'Built an interactive Streamlit dashboard with Plotly visualizations and SHAP explanations.',
      'Used XGBoost to deliver 95.05% ROC-AUC for bankruptcy risk prediction.',
    ],
    techStack: ['Python', 'XGBoost', 'Streamlit', 'Plotly', 'SHAP', 'Pandas', 'NumPy', 'Joblib'],
    githubUrl: 'https://github.com/ifreen22/AI-Financial-Warning-System',
    liveUrl: 'https://ai-financial-warning-system.streamlit.app/',
    liveLabel: 'View Live Project',
  },
  {
    id: 'smart-whiteboard',
    category: 'systems',
    badge: 'Official Patent Granted',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    title: 'Smart Whiteboard & Interactive Classroom System',
    period: 'Nov 2024',
    role: 'Lead System Architect & Patent Inventor',
    oneLiner: 'Patented high-concurrency digital canvas synchronization platform for real-time classroom collaboration.',
    metrics: [
      { label: 'Latency', value: '<60ms Sync' },
      { label: 'Status', value: 'Patent Granted' },
      { label: 'Impact', value: 'Multi-User Sync' },
    ],
    architecturePoints: [
      'Architected delta-compressed WebSocket synchronization pipelines minimizing canvas broadcast overhead under heavy client load.',
      'Designed event-driven stroke smoothing algorithms and raster-to-vector geometry interpolation for seamless cross-device rendering.',
      'Authored the complete technical patent specification detailing hardware-software touch abstraction and session recovery protocols.',
    ],
    techStack: ['System Design', 'Canvas API', 'WebSockets', 'Python', 'EdTech IoT', 'Real-Time Sync'],
    liveUrl: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:8fc07e2c-b354-4cf1-8ee0-cebfb6ccbb1f',
    liveLabel: 'View Official Patent',
    featured: true,
  },
  {
    id: 'cnn-signature',
    category: 'ai',
    badge: 'Accepted for Presentation • ICSCSD 2026',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    title: 'SecureSign: Offline Signature Verification with Confidence-Aware CNN Modeling',
    period: '2026',
    role: 'Research Project',
    oneLiner: 'Offline signature verification research accepted for presentation at the International Conference on Smart Computing for Sustainable Development (ICSCSD 2026).',
    metrics: [
      { label: 'Status', value: 'Accepted' },
      { label: 'Conference', value: 'ICSCSD 2026' },
      { label: 'Track', value: 'AI & ML' },
    ],
    architecturePoints: [
      'Accepted for presentation at the International Conference on Smart Computing for Sustainable Development, scheduled for November 25–27, 2026.',
      'Accepted in Track 1: Artificial Intelligence & Machine Learning for Sustainability.',
      'The paper is available to view or download.',
    ],
    techStack: ['CNN', 'Signature Verification', 'AI & Machine Learning'],
    liveUrl: '/images/CNN_RESEARCH_PAPER_PDF2.pdf',
    liveLabel: 'View / Download Research Paper',
    featured: true,
  },
  {
    id: 'urban-pulse',
    category: 'fullstack',
    badge: 'Full Stack & Enterprise AI',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    title: 'UrbanPulse: Smart City AI Analytics & Telemetry Platform',
    period: 'Jan 2026',
    role: 'Full Stack & AI Engineer',
    oneLiner: 'Civic sensor data aggregator integrating anomaly detection models with responsive real-time geospatial dashboards.',
    metrics: [
      { label: 'Ingestion', value: 'Multi-Sensor API' },
      { label: 'API Speed', value: '<85ms p95' },
      { label: 'Architecture', value: 'Decoupled REST' },
    ],
    architecturePoints: [
      'Engineered high-throughput asynchronous REST endpoints using FastAPI to ingest environmental and traffic telemetry streams.',
      'Constructed modular React dashboard with interactive data visualization, real-time alert thresholds, and responsive status metrics.',
      'Implemented automated time-series anomaly detection flags alerting municipal monitoring nodes to sudden air quality fluctuations.',
    ],
    techStack: ['React.js', 'FastAPI', 'Python', 'Tailwind CSS', 'PostgreSQL', 'REST APIs', 'Vite'],
    githubUrl: 'https://github.com/ifreen22/CivicPulse',
    liveUrl: 'https://civic-pulse-rho-three.vercel.app/',
    liveLabel: 'View Live Project',
    featured: true,
  },
  {
    id: 'bank-management',
    category: 'systems',
    badge: 'Core Systems & Concurrency',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    title: 'High-Concurrency Transaction & Banking Engine',
    period: 'Nov 2025',
    role: 'Systems Engineer',
    oneLiner: 'Modular C++ banking core implementing transactional integrity, atomic balance updates, and binary ledger persistence.',
    metrics: [
      { label: 'Lookup Time', value: 'O(1) Hash Table' },
      { label: 'Integrity', value: '100% ACID' },
      { label: 'Design', value: 'Clean OOP' },
    ],
    architecturePoints: [
      'Developed thread-safe account transaction workflows utilizing object-oriented encapsulation and strict mutex lock semantics.',
      'Designed structured binary persistence ensuring complete crash recovery without partial ledger states or phantom balance deductions.',
      'Implemented robust input sanitization and defensive bounds checking across all user-facing terminal accounting routines.',
    ],
    techStack: ['C++', 'OOP', 'Data Structures', 'File Persistence', 'System Design', 'Memory Safety'],
  },
  {
    id: 'library-dbms',
    category: 'systems',
    badge: 'Database Engineering',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    title: 'Library Management System',
    period: 'Sept 2025',
    role: 'Backend & Database Developer',
    oneLiner: 'A full-stack library management application built with Flask and MySQL.',
    metrics: [],
    architecturePoints: [
      'Engineered a full-stack Flask and MySQL web application using a robust 3-tier architecture.',
      'Automated core transactions, fine calculations, and book status tracking via MySQL stored procedures and triggers.',
      'Integrated advanced SQL views and multi-table JOINs for real-time reporting and CRUD operations.',
    ],
    techStack: ['Python', 'Flask', 'MySQL'],
    githubUrl: 'https://github.com/ifreen22/Student-Library-Management-System',
  },
  {
    id: 'amazon-clone',
    category: 'fullstack',
    badge: 'Web Architecture',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    title: 'E-Commerce Platform & Cart State Engine',
    period: 'Feb 2025',
    role: 'Frontend Engineer',
    oneLiner: 'Full-featured e-commerce catalog featuring debounced multi-facet search, client-side routing, and persistent cart checkout state.',
    metrics: [
      { label: 'Responsiveness', value: '100% Mobile' },
      { label: 'Dependencies', value: 'Zero Heavy UI' },
      { label: 'Bundle Size', value: '<120KB Core' },
    ],
    architecturePoints: [
      'Constructed pure-JavaScript state management pattern coordinating cart updates, tax computations, and local persistence across tabs.',
      'Engineered debounced client-side search filtering through large mock inventory datasets without UI thread blocking.',
      'Optimized asset loading and responsive flex/grid layouts adhering to modern semantic accessibility and keyboard navigation standards.',
    ],
    techStack: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Responsive Design', 'State Management', 'Vite'],
  },
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filterTabs: { id: ProjectFilter; label: string }[] = [
    { id: 'all', label: 'All Projects (8)' },
    { id: 'ai', label: 'AI & Deep Learning' },
    { id: 'fullstack', label: 'Full Stack & APIs' },
    { id: 'systems', label: 'Systems & Databases' },
  ];

  const filteredProjects = projectsData
    .filter((project) => activeFilter === 'all' || project.category === activeFilter)
    .sort((a, b) => {
      const dateA = Date.parse(`${a.period.replace('Sept', 'Sep')} 1`);
      const dateB = Date.parse(`${b.period.replace('Sept', 'Sep')} 1`);
      return dateB - dateA;
    });

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="relative bg-slate-50/50 py-14 sm:py-20 md:py-32 px-5 sm:px-6 md:px-12 border-t border-slate-200/60 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute bottom-1/3 -left-48 w-96 h-96 rounded-full bg-purple-100/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ========================================================
            1. SECTION HEADER
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <Code2 className="w-3.5 h-3.5 text-blue-600" />
            Engineering Execution & Systems
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Featured Projects
          </h2>

          <p className="font-oleo-script text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Production systems, AI-powered applications, and research prototypes engineered with measurable scale, fault tolerance, and clean architecture.
          </p>
        </motion.div>

        {/* ========================================================
            2. DOMAIN FILTER TABS
        ======================================================== */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8 sm:mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`min-h-11 px-4 py-2.5 sm:min-h-0 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-slate-900 text-white shadow-xs scale-102'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ========================================================
            3. PROJECTS BENTO GRID (Deep Architectural Breakdown)
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group bg-white border rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                project.featured
                  ? 'border-blue-200/90 ring-1 ring-blue-500/10'
                  : 'border-slate-200/90'
              }`}
            >
              <div>
                {/* Top Header: Badge, Period, Role */}
                <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${project.badgeColor}`}
                  >
                    <Sparkles className="w-3 h-3" />
                    {project.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {project.period}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                  {project.title}
                </h3>

                {/* Role / Scope */}
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                  Role: {project.role}
                </p>

                {/* One-Liner Value Proposition */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                  {project.oneLiner}
                </p>

                {/* KEY MEASURABLE METRICS */}
                {project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mb-4 p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <p className="text-xs font-bold text-slate-900 tracking-tight">
                          {metric.value}
                        </p>
                        <p className="text-[11px] sm:text-[10px] text-slate-400 uppercase font-semibold mt-0.5">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* ARCHITECTURAL HIGHLIGHTS */}
                <div className="mb-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-slate-500" />
                    Key Architectural Decisions
                  </h4>
                  <ul className="space-y-2">
                    {project.architecturePoints.map((point, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed"
                      >
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TECH STACK CHIPS */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS & VERIFIED AUDIT LINKS */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 sm:min-h-0"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-blue-600 px-4 py-2 rounded-xl shadow-xs transition-all hover:shadow-md sm:min-h-0"
                      aria-label={`${project.title} ${project.liveLabel || 'Live Demo'}`}
                    >
                      <span>{project.liveLabel || 'View Proof'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ========================================================
            4. RECRUITER VERIFICATION BANNER
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-16 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Project Evidence & Resources</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Explore the available project evidence
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Cards show project-specific repositories, deployments, patents, or papers only when a link is available.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
