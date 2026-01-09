// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Headphones, BookOpen } from 'lucide-react';
// import { LucideIcon } from 'lucide-react';

// interface Interest {
//   icon: LucideIcon | null;
//   emoji?: string;
//   title: string;
//   description: string;
// }

// const interests: Interest[] = [
//   {
//     icon: null,
//     emoji: '🏸',
//     title: 'Badminton',
//     description: 'Staying active and focused',
//   },
//   {
//     icon: BookOpen,
//     title: 'Self-Improvement Audiobooks',
//     description: 'Audiobooks & continuous learning',
//   },
//   {
//     icon: Headphones,
//     title: 'Music',
//     description: 'Focus & creativity booster',
//   },
// ];

// export const InterestsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   return (
//     <section className="bg-background">
//       <div className="section-container py-16" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-10"
//         >
//           <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">Beyond the Code</h2>
//           <p className="text-muted-foreground">What keeps me balanced and inspired</p>
//         </motion.div>

//         <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
//           {interests.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 15 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
//               className="flex items-center gap-3 px-5 py-3 bg-muted/50 rounded-full"
//             >
//               {item.icon ? (
//                 <item.icon size={20} className="text-primary" />
//               ) : (
//                 <span className="text-xl">{item.emoji}</span>
//               )}
//               <div className="text-left">
//                 <span className="font-medium text-foreground text-sm">{item.title}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };





import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
// 1. Add 'Globe' (or 'Mountain') to the imports
import { Headphones, BookOpen, Globe } from 'lucide-react'; 
import { LucideIcon } from 'lucide-react';

interface Interest {
  icon: LucideIcon | null;
  emoji?: string;
  title: string;
  description: string;
}

const interests: Interest[] = [
  {
    icon: null,
    emoji: '🏸',
    title: 'Badminton',
    description: 'Staying active & competitive',
  },
  {
    icon: Globe, // 2. Using the Globe icon here
    title: 'Travel & Nature',
    description: 'Exploring natural landscapes',
  },
  {
    icon: BookOpen,
    title: 'Audiobooks',
    description: 'Self-improvement & growth',
  },
  {
    icon: Headphones,
    title: 'Music',
    description: 'Focus & creativity booster',
  },
];

export const InterestsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background">
      <div className="section-container py-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">Beyond the Code</h2>
          <p className="text-muted-foreground">What keeps me balanced and inspired</p>
        </motion.div>

        {/* Changed 'justify-center' to 'justify-center' (which wraps neatly) 
           or you can use grid for a stricter layout if you have 4 items.
           Flex wrap works perfectly fine here.
        */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {interests.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 bg-muted/50 rounded-full hover:bg-muted/80 transition-colors"
            >
              {item.icon ? (
                <item.icon size={20} className="text-primary" />
              ) : (
                <span className="text-xl">{item.emoji}</span>
              )}
              <div className="text-left">
                {/* Removed 'text-sm' to match the uploaded image better, or keep it if you prefer small text */}
                <span className="font-medium text-foreground text-sm">{item.title}</span>
                {/* Optional: You can render the description if you want, currently your image only shows Title */}
                 <span className="hidden sm:inline-block text-xs text-muted-foreground ml-2 border-l pl-2 border-gray-300">
                  {item.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};