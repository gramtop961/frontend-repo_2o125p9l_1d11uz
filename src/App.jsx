import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="min-h-screen bg-[#05060A] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <section id="contact" className="relative bg-[#070912] py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.08),transparent_40%)]" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Build with RealXR</h2>
            <p className="mt-3 text-white/70">
              Ready to preview your next project in XR? Tell us about your build and we’ll set up an immersive demo.
            </p>
            <form
              className="mx-auto mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                required
              />
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                required
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 sm:col-span-2"
              />
              <textarea
                placeholder="Project details"
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-90 blur-md transition group-hover:opacity-100" />
                  <span className="relative z-10 text-white">Request a demo</span>
                </button>
              </div>
            </form>
          </div>
        </section>
        <footer className="border-t border-white/10 bg-[#05060A] py-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} RealXR. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
