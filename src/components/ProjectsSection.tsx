// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Amazon Clone Website",
//     period: "May 2025",
//     description: [
//       "Developed a front-end e-commerce website inspired by Amazon",
//       "Implemented product listings, search functionality, and cart system",
//       "Created responsive pages using HTML, CSS, and JavaScript"
//     ],
//     tech: ["HTML", "CSS", "JavaScript"]
//   },
//   {
//     title: "Real-Time Weather Application",
//     period: "Feb 2025",
//     description: [
//       "Built a real-time weather application using Python and Streamlit",
//       "Integrated OpenWeather API for live city-based weather data",
//       "Handled invalid inputs with user-friendly error messages"
//     ],
//     tech: ["Python", "Streamlit", "API"]
//   },
//   {
//     title: "Library Management System",
//     period: "2025–2026",
//     description: [
//       "Full-stack DBMS project using Flask and MySQL",
//       "Implemented CRUD operations and transaction-safe stored procedures",
//       "Generated reports using JOIN queries and automated fine calculation"
//     ],
//     tech: ["Python", "Flask", "MySQL", "DBMS"]
//   },
//   {
//     title: "CryptIQ – Dungeon-Based Quiz Game",
//     period: "May 2025",
//     description: [
//       "Terminal-based quiz game written in C",
//       "Used structs, arrays, file handling, and ASCII-based interface",
//       "Designed level progression with monsters and boss battles"
//     ],
//     tech: ["C", "File Handling", "Structs"]
//   }
// ];

// export const ProjectsSection = () => {
//   return (
//     <section
//       id="projects"
//       className="relative py-20 px-6 max-w-6xl mx-auto"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-4xl font-bold text-center mb-14"
//       >
//         Projects
//       </motion.h2>

//       <div className="space-y-10">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="border border-white/10 rounded-xl p-6 hover:border-blue-500 transition"
//           >
//             <h3 className="text-xl font-semibold">
//               {project.title}
//             </h3>

//             <p className="text-sm text-gray-400">
//               {project.period}
//             </p>

//             <ul className="list-disc list-inside mt-4 space-y-1">
//               {project.description.map((point, i) => (
//                 <li key={i}>{point}</li>
//               ))}
//             </ul>

//             <div className="flex flex-wrap gap-2 mt-4">
//               {project.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="text-sm px-3 py-1 rounded-full bg-white/10"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Amazon Clone Website",
//     year: "2025",
//     description:
//       "Front-end e-commerce platform inspired by Amazon with product listings, search, and cart functionality.",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     title: "Real-Time Weather Application",
//     year: "2025",
//     description:
//       "Live weather application using OpenWeather API with dynamic UI and error handling.",
//     tech: ["Python", "Streamlit", "API"],
//   },
//   {
//     title: "Library Management System",
//     year: "2025–26",
//     description:
//       "DBMS-driven system with CRUD operations, reporting, and transaction-safe design.",
//     tech: ["Python", "Flask", "MySQL"],
//   },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-28 bg-muted/40">
//       <div className="max-w-4xl mx-auto px-6 relative">

//         <h2 className="text-4xl font-serif font-semibold text-center mb-20">
//           Projects
//         </h2>

//         {/* Vertical Line */}
//         <div className="absolute left-1/2 top-32 bottom-0 w-px bg-border -translate-x-1/2" />

//         <div className="space-y-24">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="relative bg-background border border-border rounded-xl p-8 shadow-sm max-w-xl mx-auto"
//             >
//               {/* Dot */}
//               <div className="absolute left-1/2 -top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2" />

//               <h3 className="text-xl font-semibold">
//                 {project.title}
//               </h3>
//               <p className="text-sm text-muted-foreground mt-1">
//                 {project.year}
//               </p>

//               <p className="mt-4 text-muted-foreground">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mt-4">
//                 {project.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="text-xs px-3 py-1 rounded-full bg-muted"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { motion } from 'framer-motion';

const projects = [
  {
    type: 'PATENT',
    title: 'Smart Whiteboard System',
    period: 'Nov 2024',
    description: [
      'Designed an innovative smart classroom system to enhance interactive learning',
      'Enabled digital writing, real-time collaboration, and intelligent content handling',
      'Recognized and granted an official patent for system innovation'
    ],
    tech: ['System Design', 'Innovation', 'EdTech'],
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:8fc07e2c-b354-4cf1-8ee0-cebfb6ccbb1f',
    highlight: true
  },
  {
    title: 'Amazon Clone Website',
    period: 'Feb 2025',
    description: [
      'Developed a front-end e-commerce website inspired by Amazon',
      'Implemented product listings, search functionality, and cart features',
      'Built responsive and user-friendly interfaces using modern web standards'
    ],
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Real-Time Weather Application',
    period: 'May 2025',
    description: [
      'Built a real-time weather application using Python and Streamlit',
      'Integrated OpenWeather API for live city-based weather data',
      'Handled invalid inputs with clear, user-friendly feedback'
    ],
    tech: ['Python', 'Streamlit', 'API']
  },
  {
    title: 'Library Management System (DBMS)',
    period: 'Oct 2025',
    description: [
      'Designed a full-stack library management system with structured data handling',
      'Implemented CRUD operations and relational database design',
      'Focused on data consistency, queries, and system reliability'
    ],
    tech: ['Python', 'Flask', 'MySQL', 'DBMS']
  },
  {
    title: 'Bank Management System',
    period: 'Nov 2025',
    description: [
      'Developed a modular bank management system with transaction workflows',
      'Applied strong object-oriented design principles for scalability',
      'Implemented account handling, balance updates, and persistence'
    ],
    tech: ['C++', 'OOP', 'System Design']
  },
  {
    title: 'CNN-Based Signature Authentication',
    period: 'Dec 2025',
    description: [
      'Built a CNN-based model for handwritten signature authentication',
      'Focused on reducing forgery using deep learning feature extraction',
      'Designed preprocessing, training, and evaluation pipelines'
    ],
    tech: ['Python', 'CNN', 'Deep Learning']
  }
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-semibold text-center mb-20"
        >
          Projects & Research
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2" />

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                {/* Timeline dot */}
                <span className="absolute left-1/2 top-6 w-3 h-3 rounded-full bg-primary -translate-x-1/2 z-10" />

                {/* Project card */}
                <div
                  className={`w-full max-w-xl bg-background border border-border rounded-xl p-6 shadow-sm ${
                    project.highlight ? 'ring-1 ring-primary/40' : ''
                  }`}
                >
                  {project.type && (
                    <span className="text-xs font-semibold text-primary tracking-wider">
                      {project.type}
                    </span>
                  )}

                  <h3 className="text-xl font-semibold mt-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.period}
                  </p>

                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
                    >
                      View Patent →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
