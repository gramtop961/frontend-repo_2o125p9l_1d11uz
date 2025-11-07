import { motion } from "framer-motion";

const items = [
  {
    tag: "VR",
    title: "High-fidelity VR Apartment Walkthrough",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
  },
  {
    tag: "AR",
    title: "Place exterior in the real world at scale",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
  },
  {
    tag: "Render",
    title: "Photorealistic interiors for marketing",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative bg-[#05060A] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl font-bold text-white"
        >
          Showcase
        </motion.h2>
        <p className="mt-3 text-center text-white/60 max-w-2xl mx-auto">
          A glimpse of the experiences we craft across media.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white border border-white/10">
                  {card.tag}
                </span>
                <h3 className="mt-2 text-white text-lg font-semibold drop-shadow-sm">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
