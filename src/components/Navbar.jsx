import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
          <span className="text-white text-lg font-semibold tracking-wide">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Real</span>XR
          </span>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 shadow-[0_0_25px_rgba(236,72,153,0.2)]"
        >
          Get a demo
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </motion.a>
      </div>
    </div>
  );
}
