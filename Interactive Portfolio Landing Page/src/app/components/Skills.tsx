import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95, color: "from-cyan-500 to-blue-500" },
  { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-500" },
  { name: "Node.js", level: 88, color: "from-green-500 to-emerald-500" },
  { name: "Next.js", level: 92, color: "from-slate-500 to-gray-500" },
  { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-teal-400" },
  { name: "Python", level: 85, color: "from-yellow-500 to-orange-500" },
  { name: "UI/UX Design", level: 88, color: "from-purple-500 to-pink-500" },
  { name: "PostgreSQL", level: 82, color: "from-blue-600 to-indigo-600" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Teknologi dan tools yang saya kuasai untuk menciptakan solusi digital terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} relative`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {["Frontend", "Backend", "Database", "DevOps"].map((category, index) => (
            <motion.div
              key={category}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">
                {index === 0 && "🎨"}
                {index === 1 && "⚙️"}
                {index === 2 && "💾"}
                {index === 3 && "🚀"}
              </div>
              <div className="text-white font-medium">{category}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
