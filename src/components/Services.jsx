import { Cube, Headphones, Camera, BadgePlay } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Cube,
    title: "Immersive Room Tours",
    desc: "Walk through fully furnished interiors on massive screens before they are built.",
  },
  {
    icon: Headphones,
    title: "VR Experiences",
    desc: "Step inside with headset-ready scenes that feel like you’re already home.",
  },
  {
    icon: Camera,
    title: "AR Visualizations",
    desc: "Place exteriors and interiors right into the real world using AR.",
  },
  {
    icon: BadgePlay,
    title: "Image & Video Rendering",
    desc: "Photorealistic renders and cinematic animations for marketing and approvals.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#070912] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(236,72,153,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl font-bold text-white"
        >
          Built for Builders
        </motion.h2>
        <p className="mt-3 text-center text-white/60 max-w-2xl mx-auto">
          From blueprint to buyer-ready, RealXR helps you validate layouts, sell faster, and reduce revisions with immersive previews.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10" />
              <div className="relative z-10">
                <s.icon className="h-8 w-8 text-cyan-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
