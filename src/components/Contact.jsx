import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#070912] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl font-bold text-white"
        >
          Let’s build your next launch site
        </motion.h2>
        <p className="mt-3 text-center text-white/60 max-w-2xl mx-auto">
          Tell us about your project and we’ll reach out with timelines and a tailored demo.
        </p>

        <div className="mt-10 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6">
          <form
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We will contact you shortly.");
            }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/70">Name</label>
              <input
                required
                type="text"
                className="rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="Alex Builder"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/70">Email</label>
              <input
                required
                type="email"
                className="rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="you@company.com"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm text-white/70">Project details</label>
              <textarea
                rows={4}
                className="rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="VR + AR for a 3-tower residential project..."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20" />
                <span className="relative">Request a demo</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
