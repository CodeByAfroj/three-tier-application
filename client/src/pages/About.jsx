import { FiCompass, FiLayers, FiSearch } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-300 flex items-center justify-center px-6 py-16">
      <div className="relative max-w-4xl w-full">
        {/* Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-purple-600/20 blur-2xl opacity-70" />

        {/* Card */}
        <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
              <FiCompass size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                About PathFinder
              </h1>
              <p className="text-slate-400 text-sm">
                A unified learning & career navigation platform
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 leading-relaxed">
            <p>
              <span className="text-white font-semibold">PathFinder</span> is built
              to solve one core problem students face today — 
              <span className="text-white font-medium"> scattered learning resources</span>.
              Instead of hopping between platforms, everything lives in one
              structured system.
            </p>

            <p>
              The platform combines careers, guided roadmaps, curated videos,
              official documentation, best learning links, and relevant tech
              news into a single, focused experience.
            </p>

            <p>
              PathFinder prioritizes
              <span className="text-white font-medium"> clarity, progression, and intent</span>.
              Every section is designed to help users understand what to learn
              next and why — not just consume content endlessly.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <Feature
              icon={<FiLayers />}
              title="Structured Learning"
              desc="Clear roadmaps and ordered content instead of random resources."
            />
            <Feature
              icon={<FiSearch />}
              title="Unified Search"
              desc="Search across videos, docs, links, and news in one place."
            />
            <Feature
              icon={<FiCompass />}
              title="Guided Navigation"
              desc="Smooth transitions and focus-based navigation across sections."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 hover:border-blue-500/60 transition">
    <div className="text-blue-400 mb-3">{icon}</div>
    <h3 className="text-white font-semibold mb-1">{title}</h3>
    <p className="text-slate-400 text-sm">{desc}</p>
  </div>
);

export default About;
