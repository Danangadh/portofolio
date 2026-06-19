import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>by John Developer</span>
          </div>
          
          <div className="text-slate-500 text-sm">
            © {currentYear} All rights reserved
          </div>

          <div className="flex gap-6 text-sm text-slate-400">
            <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
