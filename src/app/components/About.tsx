import { motion } from "motion/react";
import { Code2, Palette, Zap } from "lucide-react";
import { useInView } from "motion/react";
import { useRef } from "react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Menulis kode yang bersih, efisien, dan mudah di-maintain",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Menggabungkan estetika dengan fungsionalitas yang optimal",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimasi performa untuk pengalaman pengguna yang seamless",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Saya adalah seorang developer yang passionate dalam menciptakan solusi digital inovatif.
            Dengan pengalaman lebih dari 5 tahun di industri teknologi, saya fokus pada pengembangan
            aplikasi web modern yang user-friendly dan scalable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-400">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">30+</div>
              <div className="text-slate-400">Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">5+</div>
              <div className="text-slate-400">Years</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-slate-400">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
