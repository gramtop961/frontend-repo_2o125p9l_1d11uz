import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#05060A]">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-28 md:grid-cols-2 md:gap-6">
        <div className="relative z-10 flex flex-col items-start justify-center py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white"
          >
            Visualize Real Estate in XR
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
              Immersive. Interactive. Real.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-xl text-base md:text-lg text-white/70"
          >
            RealXR brings pre-built spaces to life with interactive room tours, VR, AR, high-fidelity image and video renderings, and web experiences—so builders and buyers can step inside before it exists.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-80 blur-md transition group-hover:opacity-100" />
              <span className="relative z-10">Book an Immersive Demo</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              See our work
            </a>
          </motion.div>
        </div>

        <div className="relative z-10 h-[60vh] md:h-[70vh]">
          <Spline
            scene="https://prod.spline.design/9HgHYACX2il7xmYO/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          {/* Overlay gradient should not block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060A] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
