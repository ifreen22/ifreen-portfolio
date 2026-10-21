import { motion } from 'framer-motion';
import {
  FileCheck2,
  ExternalLink,
  Award,
  BookOpen,
  Github,
  Code2,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Users,
  Trophy,
  GraduationCap,
  BriefcaseBusiness,
} from 'lucide-react';

interface ProofCard {
  title: string;
  category: string;
  badge: string;
  badgeColor: string;
  description: string;
  metadata: string;
  link: string;
  actionText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const proofData: ProofCard[] = [
  {
    title: 'Official Patent Grant Document',
    category: 'Intellectual Property',
    badge: 'Patent Granted',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    description: 'Smart Whiteboard & Interactive Classroom collaboration architecture with multi-client real-time synchronization.',
    metadata: 'Granted Nov 2024 • Indian Patent Office',
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:8fc07e2c-b354-4cf1-8ee0-cebfb6ccbb1f',
    actionText: 'View Patent Certificate (PDF)',
    icon: FileCheck2,
  },
  {
    title: 'SecureSign Research Acceptance',
    category: 'Academic Research',
    badge: 'Accepted for Presentation',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'SecureSign was accepted for presentation at ICSCSD 2026, Track 1: AI and ML for Sustainability.',
    metadata: 'Conference dates: November 25–27, 2026',
    link: '/images/ICSCSD2026_Acceptance_CNN.pdf',
    actionText: 'View Acceptance Letter',
    icon: BookOpen,
  },
  {
    title: 'SecureSign Research Paper',
    category: 'Research Paper',
    badge: 'Paper',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    description: 'Offline signature verification research using confidence-aware CNN modeling.',
    metadata: 'Accepted for ICSCSD 2026 presentation',
    link: '/images/CNN_RESEARCH_PAPER_PDF2.pdf',
    actionText: 'View Research Paper',
    icon: FileText,
  },
  {
    title: 'Technical Certificates Archive',
    category: 'Verified Credentials',
    badge: 'Drive Vault',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Certificate archive for technical courses listed in the portfolio.',
    metadata: 'Infosys Springboard, GeeksforGeeks, Simplilearn, Coursera, and Udemy',
    link: 'https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ',
    actionText: 'Open Google Drive Vault',
    icon: Award,
  },
  {
    title: 'Infosys STEM Scholar Selection',
    category: 'Scholarship',
    badge: 'Selected',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Selection under the Infosys STEM Scholar Program.',
    metadata: 'Selection proof',
    link: 'https://drive.google.com/file/d/1GQgGnKE9Nb3a1iQaBA-zsqCjieohIjQP/view?usp=sharing',
    actionText: 'View Selection Proof',
    icon: GraduationCap,
  },
  {
    title: 'Industry-Sponsored AI Project',
    category: 'Industry Collaboration',
    badge: 'Selected',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    description: 'Project communication and meeting records for the industry collaboration.',
    metadata: 'Industry project evidence archive',
    link: 'https://drive.google.com/drive/folders/1dE-_fxKJDNmqdrLRX5nu_4bnT4HFi786',
    actionText: 'View Project Evidence',
    icon: BriefcaseBusiness,
  },
  {
    title: 'GitHub Profile',
    category: 'Source Code',
    badge: 'GitHub',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
    description: 'Public GitHub profile with repositories available for review.',
    metadata: 'github.com/ifreen22',
    link: 'https://github.com/ifreen22',
    actionText: 'View GitHub Profile',
    icon: Github,
  },
  {
    title: 'LeetCode Problem Solving Record',
    category: 'Algorithmic Competence',
    badge: 'Algorithms & DSA',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Consistent practice in dynamic programming, graph traversal, trees, arrays, and algorithmic complexity.',
    metadata: 'leetcode.com/u/ifreen2007 • Active',
    link: 'https://leetcode.com/u/ifreen2007/',
    actionText: 'Inspect LeetCode Profile',
    icon: Code2,
  },
  {
    title: 'National Hackathon Finalist',
    category: 'Competitive Engineering',
    badge: 'Rank 17/250',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Jaipur Cybrathon finalist, ranked 17 among 250 finalists from 3,000+ teams.',
    metadata: 'Finalist announcement on LinkedIn',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7434470676826079232/',
    actionText: 'View Finalist Announcement',
    icon: Trophy,
  },
  {
    title: 'Academic Grade Card & 9.16 CGPA',
    category: 'Institutional Rigor',
    badge: 'Top Tier (VIT Pune)',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description: 'Academic record for B.Tech Computer Science (Artificial Intelligence) at VIT Pune.',
    metadata: 'Class of 2028 • VIT Pune',
    link: 'https://drive.google.com/file/d/1oCU9mgGXurT0rnzedX7VH35XXSVFdYYi/view?usp=sharing',
    actionText: 'View CGPA Evidence',
    icon: GraduationCap,
  },
  {
    title: 'IEEE Executive Committee',
    category: 'Organizational Leadership',
    badge: 'Operations & Impact',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    description: 'IEEE Student Branch leadership, including technical event coordination and community outreach.',
    metadata: 'IEEE Student Branch VIT Pune',
    link: 'https://lnkd.in/p/dVsuZwTN',
    actionText: 'View IEEE Work',
    icon: Users,
  },
];

export const ProofCenterSection = () => {
  return (
    <section
      id="proof-center"
      aria-label="Engineering Proof Center"
      className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 border-t border-slate-200/60 overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-blue-100/25 blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-purple-100/25 blur-3xl" />
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Recruiter Verification Hub
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Engineering Evidence Hub
          </h2>

          <p className="font-oleo-script text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Review available records for research, recognition, leadership, credentials, and engineering work.
          </p>
        </motion.div>

        {/* ========================================================
            2. VERIFICATION BENTO GRID
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {proofData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md hover:bg-white hover:-translate-y-1 hover:border-blue-300/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 mt-2">
                  <p className="text-[10px] font-medium text-slate-400 mb-2.5">
                    {item.metadata}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>{item.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================
            3. AUDIT TRANSPARENCY NOTICE
        ======================================================== */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Need additional documentation or references? Send a request through the contact form.
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 font-bold text-slate-900 ring-1 ring-slate-200 transition-colors hover:bg-blue-50 hover:text-blue-700 shrink-0"
          >
            Request Additional References →
          </a>
        </div>
      </div>
    </section>
  );
};
