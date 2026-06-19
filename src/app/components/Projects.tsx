import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Platform e-commerce modern dengan fitur real-time inventory dan payment gateway terintegrasi",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Dashboard Analytics",
    description: "Dashboard analytics dengan machine learning untuk prediksi data dan visualisasi interaktif",
    tags: ["Next.js", "Python", "TensorFlow", "D3.js"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile Banking App",
    description: "Aplikasi mobile banking dengan security tinggi dan UX yang intuitif",
    tags: ["React Native", "Firebase", "Biometric"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "SaaS Project Management",
    description: "Tool project management berbasis cloud dengan kolaborasi real-time",
    tags: ["TypeScript", "WebSocket", "Redis", "Docker"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Social Media Platform",
    description: "Platform social media dengan fitur streaming dan content creation",
    tags: ["React", "GraphQL", "MongoDB", "AWS"],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "IoT Smart Home",
    description: "Sistem smart home automation dengan kontrol via mobile dan voice",
    tags: ["IoT", "MQTT", "React", "Arduino"],
    gradient: "from-teal-500 to-blue-500",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Beberapa project terbaik yang telah saya kerjakan dengan berbagai teknologi modern
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glowing border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
              
              <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-6 h-full flex flex-col">
                {/* Animated gradient header */}
                <motion.div
                  className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6`}
                  animate={hoveredIndex === index ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                />

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
