import { motion } from 'framer-motion';
import {
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  FileBadge2,
  GraduationCap,
  Users,
} from 'lucide-react';

const evidenceArchive =
  'https://drive.google.com/drive/folders/1W8SvL3gRZgL3-XtHK1k3cqXQE5yl6SRJ';
const patentDocument =
  'https://acrobat.adobe.com/id/urn:aaid:sc:AP:8fc07e2c-b354-4cf1-8ee0-cebfb6ccbb1f';
const researchAcceptance = '/images/ICSCSD2026_Acceptance_CNN.pdf';
const industryProjectEvidence =
  'https://drive.google.com/drive/folders/1dE-_fxKJDNmqdrLRX5nu_4bnT4HFi786';

const highlights = [
  {
    title: 'National Hackathon Finalist',
    description: 'Ranked 17 among 250 finalists, selected from 3,000+ teams.',
    year: '2025',
    icon: Award,
    link: {
      label: 'View finalist announcement',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7434470676826079232/',
    },
  },
  {
    title: 'Research Paper Accepted',
    description: 'SecureSign accepted for conference presentation in artificial intelligence.',
    year: '2026',
    icon: BookOpen,
    link: { label: 'View acceptance letter', href: researchAcceptance },
  },
  {
    title: 'Patent Granted',
    description: 'Smart Whiteboard and Interactive Classroom System patent.',
    year: '2024',
    icon: FileBadge2,
    link: { label: 'View patent', href: patentDocument },
  },
  {
    title: 'Industry-Sponsored Project',
    description: 'Selected for an industry collaboration during third year.',
    year: '2026',
    icon: BriefcaseBusiness,
    link: { label: 'View project evidence', href: industryProjectEvidence },
  },
  {
    title: 'Infosys STEM Scholar',
    description: 'Selected under the Infosys STEM Scholar Program.',
    year: '2024',
    icon: GraduationCap,
    link: {
      label: 'View selection proof',
      href: 'https://drive.google.com/file/d/1GQgGnKE9Nb3a1iQaBA-zsqCjieohIjQP/view?usp=sharing',
    },
  },
  {
    title: 'IEEE Executive Committee',
    description: 'Organized technical events and engineering activities at VIT Pune.',
    year: '2025',
    icon: Users,
    link: { label: 'View IEEE work', href: 'https://lnkd.in/p/dVsuZwTN' },
  },
];

const leadershipItems = [
  {
    title: 'IEEE Executive Committee',
    description: 'Supported event planning, operations, and attendee coordination.',
  },
  {
    title: 'Technical Event Coordination',
    description: 'Helped deliver a technical conclave attended by 500+ people.',
  },
  {
    title: 'Technology Outreach',
    description: 'Introduced AI and web development basics at Girme Vidyalaya.',
  },
];

const researchTimeline = [
  {
    date: '2026',
    title: 'SecureSign Research Paper',
    detail: 'Accepted for conference presentation; acceptance letter available to view.',
    status: 'Accepted',
    href: researchAcceptance,
    linkLabel: 'View acceptance letter',
  },
  {
    date: 'Nov 2024',
    title: 'Smart Whiteboard Patent',
    detail: 'Patent granted for the interactive classroom system.',
    status: 'Granted',
    href: patentDocument,
    linkLabel: 'View patent',
  },
  {
    date: '2026',
    title: 'Industry-Sponsored Project',
    detail: 'Selected for an industry collaboration during third year.',
    status: 'Selected',
    href: industryProjectEvidence,
    linkLabel: 'View project evidence',
  },
];

const certifications = [
  { category: 'Programming', title: 'Python Programming', issuer: 'Infosys Springboard', year: '2024' },
  { category: 'Programming', title: 'C Programming', issuer: 'Infosys Springboard', year: '2024' },
  { category: 'AI', title: 'AI Tools Workshop', issuer: 'be10x', year: '2025' },
  { category: 'Frontend', title: 'Front End Development', issuer: 'Simplilearn', year: '2025' },
  { category: 'Frontend', title: 'React.js Beginner Course', issuer: 'Scrimba', year: '2025' },
  { category: 'Data', title: 'Data Structures & Algorithms', issuer: 'GeeksforGeeks', year: '2025' },
  { category: 'Data', title: 'Microsoft Excel (Advanced)', issuer: 'Udemy', year: '2025' },
  { category: 'Developer Tools', title: 'Git & GitHub Essentials', issuer: 'Coursera', year: '2025' },
];

const engineeringJourney = [
  {
    year: '2024',
    chapter: 'Academic foundations and first innovation recognition',
    milestones: [
      {
        title: 'Infosys STEM Scholar',
        description: 'Selected under the Infosys STEM Scholar Program.',
        category: 'Scholarship',
        icon: GraduationCap,
        link: {
          label: 'View selection proof',
          href: 'https://drive.google.com/file/d/1GQgGnKE9Nb3a1iQaBA-zsqCjieohIjQP/view?usp=sharing',
        },
      },
      {
        title: 'Smart Whiteboard Patent Granted',
        description: 'Granted patent for an interactive classroom system.',
        category: 'Innovation',
        icon: FileBadge2,
        link: { label: 'View patent', href: patentDocument },
      },
      {
        title: 'Programming Foundations',
        description: 'Completed Python and C programming credentials through Infosys Springboard.',
        category: 'Certification',
        icon: Code2,
        link: { label: 'View certificates', href: evidenceArchive },
      },
    ],
  },
  {
    year: '2025',
    chapter: 'Engineering leadership and competitive validation',
    milestones: [
      {
        title: 'IEEE Executive Committee',
        description: 'Supported technical events, including a conclave attended by 500+ people.',
        category: 'Leadership',
        icon: Users,
        link: { label: 'View IEEE work', href: 'https://lnkd.in/p/dVsuZwTN' },
      },
      {
        title: 'Jaipur Cybrathon Finalist',
        description: 'Ranked 17 among 250 finalists selected from 3,000+ teams.',
        category: 'Competition',
        icon: Award,
        link: {
          label: 'View finalist announcement',
          href: 'https://www.linkedin.com/feed/update/urn:li:activity:7434470676826079232/',
        },
      },
      {
        title: 'Technical Learning Credentials',
        description: 'Completed courses in frontend development, AI tools, DSA, React, and Git.',
        category: 'Certification',
        icon: Code2,
        link: { label: 'View certificates', href: evidenceArchive },
      },
    ],
  },
  {
    year: '2026',
    chapter: 'Research acceptance and industry collaboration',
    milestones: [
      {
        title: 'Industry-Sponsored AI Project',
        description: 'Selected for an industry collaboration during third year.',
        category: 'Industry',
        icon: BriefcaseBusiness,
        link: { label: 'View project evidence', href: industryProjectEvidence },
      },
      {
        title: 'SecureSign Research Acceptance',
        description: 'Accepted for presentation at ICSCSD 2026 in the AI and ML sustainability track.',
        category: 'Research',
        icon: BookOpen,
        link: { label: 'View acceptance letter', href: researchAcceptance },
      },
    ],
  },
];

const metrics = [
  { value: '9.16', label: 'CGPA' },
  { value: '17 / 250', label: 'Hackathon rank' },
  { value: '3,000+', label: 'Teams considered' },
  { value: '1', label: 'Patent granted' },
  { value: '1', label: 'Paper accepted' },
];

const sectionHeading =
  'text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-500';

export const AchievementsSection = () => {
  return (
    <section
      id="certifications"
      aria-labelledby="achievements-heading"
      className="bg-white px-6 py-20 sm:py-24 md:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 max-w-3xl"
        >
          <p className={sectionHeading}>External validation</p>
          <h2
            id="achievements-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-[48px] md:leading-[1.1]"
          >
            Achievements &amp; Recognition
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Independent validation of engineering, research, leadership and technical excellence.
          </p>
        </motion.header>

        <div className="mb-16 grid grid-cols-2 divide-x divide-slate-200 border-y border-slate-200 py-5 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((metric) => (
            <div key={metric.label} className="px-4 py-3 first:pl-0">
              <p className="achievement-metric-value text-2xl font-semibold tracking-tight text-slate-950 sm:text-[28px]">
                {metric.value}
              </p>
              <p className="achievement-metric-value mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <section aria-labelledby="engineering-highlights" className="mb-16">
          <SectionTitle id="engineering-highlights">Engineering Highlights</SectionTitle>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group flex min-h-40 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" strokeWidth={1.8} />
                      <div>
                        <h4 className="text-base font-semibold text-slate-900">{item.title}</h4>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 text-sm text-slate-500">{item.year}</span>
                  </div>
                  {item.link && (
                    <div className="mt-5 pl-8">
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900"
                      >
                        {item.link.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="leadership-impact" className="mb-16">
          <SectionTitle id="leadership-impact">Leadership &amp; Community Impact</SectionTitle>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {leadershipItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl border border-slate-200 p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Users className="h-5 w-5 text-blue-700" strokeWidth={1.8} />
                <h4 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section aria-labelledby="research-innovation" className="mb-16">
          <SectionTitle id="research-innovation">Research &amp; Innovation</SectionTitle>
          <div className="relative mt-5">
            <div className="absolute bottom-5 left-[7px] top-5 w-px bg-slate-200" />
            <div className="space-y-1">
              {researchTimeline.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative grid gap-3 py-4 pl-8 sm:grid-cols-[110px_1fr_auto] sm:items-center sm:gap-6"
                >
                  <span className="absolute left-0 top-[22px] h-[15px] w-[15px] rounded-full border-[3px] border-white bg-blue-700 ring-1 ring-slate-200" />
                  <p className="text-sm font-medium text-slate-500">{item.date}</p>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                  </div>
                  <div className="flex items-center gap-4 sm:justify-end">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
                      <BadgeCheck className="h-4 w-4 text-blue-700" />
                      {item.status}
                    </span>
                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-900"
                      >
                        {item.linkLabel}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="technical-certifications" className="mb-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <SectionTitle id="technical-certifications">Technical Certifications</SectionTitle>
              <p className="mt-2 text-sm text-slate-600">
                Selected credentials with issuer, year, and a shared verification archive.
              </p>
            </div>
            <a
              href={evidenceArchive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900"
            >
              Open certificate archive
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.025 }}
                className="rounded-xl border border-slate-200 p-4 transition duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <Code2 className="h-4 w-4 text-blue-700" strokeWidth={1.8} />
                  <span className="text-xs text-slate-500">{certificate.year}</span>
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {certificate.category}
                </p>
                <h4 className="mt-1 text-sm font-semibold leading-5 text-slate-900">
                  {certificate.title}
                </h4>
                <p className="mt-1 text-sm text-slate-600">{certificate.issuer}</p>
                <a
                  href={evidenceArchive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-900"
                >
                  Verify
                  <ExternalLink className="h-3 w-3" />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section aria-labelledby="engineering-journey" className="scroll-mt-24">
          <div className="max-w-3xl">
            <SectionTitle id="engineering-journey">Engineering Journey</SectionTitle>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              A chronological view of academic growth, engineering milestones, research contributions,
              leadership, competitions and industry recognition.
            </p>
          </div>

          <div className="relative mt-8 space-y-8 before:absolute before:bottom-6 before:left-[19px] before:top-5 before:w-px before:bg-slate-200 md:space-y-10">
            {engineeringJourney.map((chapter, chapterIndex) => (
              <motion.section
                key={chapter.year}
                aria-labelledby={`journey-${chapter.year}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: chapterIndex * 0.05 }}
                className="relative pl-12"
              >
                <span className="absolute left-[12px] top-1.5 z-10 h-4 w-4 rounded-full border-[3px] border-white bg-blue-700 ring-1 ring-blue-200" />
                <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h4 id={`journey-${chapter.year}`} className="text-2xl font-semibold tracking-tight text-slate-950">
                    {chapter.year}
                  </h4>
                  <p className="text-sm text-slate-500">{chapter.chapter}</p>
                </div>
                <div className="grid gap-3 lg:grid-cols-2">
                  {chapter.milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    return (
                      <motion.article
                        key={milestone.title}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-20px' }}
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-6"
                      >
                        <div className="flex items-start gap-3.5">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-blue-700">
                            <Icon className="h-4 w-4" strokeWidth={1.8} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-start justify-between gap-2">
                              <h5 className="text-base font-semibold leading-6 text-slate-900">
                                {milestone.title}
                              </h5>
                              <span className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                                {milestone.category}
                              </span>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {milestone.description}
                            </p>
                            <a
                              href={milestone.link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900"
                            >
                              {milestone.link.label}
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

const SectionTitle = ({ id, children }: { id: string; children: string }) => (
  <h3 id={id} className={sectionHeading}>
    {children}
  </h3>
);
