// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FiSearch, FiTrendingUp } from 'react-icons/fi';

// const SUGGESTIONS = [
//   'Web Development',
//   'AI / Machine Learning',
//   'DevOps',
//   'Data Science',
//   'Mobile Development',
// ];

// const HeroSection = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
//     }
//   };

//   const handleSuggestionClick = (value) => {
//     setSearchTerm(value);
//     navigate(`/search?query=${encodeURIComponent(value)}`);
//   };

//   return (
//     <section className="relative py-20 md:py-28 overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-purple-600/10 blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//           {/* Left Column */}
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
//               Unlock Your <span className="text-blue-500">Career</span> Potential
//             </h1>

//             <p className="text-xl md:text-2xl text-slate-300 mb-4">
//               Clear direction. Structured roadmaps.
//             </p>

//             <p className="text-lg text-slate-400 mb-10 max-w-xl">
//               A focused platform that brings careers, learning paths, curated videos,
//               documentation, and resources into one clear journey.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button
//                 onClick={() => navigate('/dashboard')}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
//               >
//                 Get Started
//               </button>

//               <button
//                 onClick={() => navigate('/about')}
//                 className="border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition"
//               >
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Right Column – Interactive Search */}
//           <div className="w-full max-w-xl mx-auto">
//             <form
//               onSubmit={handleSearch}
//               className="bg-slate-800/70 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-xl"
//             >
//               <label className="block text-slate-300 font-medium mb-3">
//                 Search a career or roadmap
//               </label>

//               <div className="relative">
//                 <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="e.g. Frontend Developer, AI Engineer"
//                   className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 />
//               </div>

//               {/* Suggestions */}
//               <div className="mt-5">
//                 <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
//                   <FiTrendingUp />
//                   Popular searches
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {SUGGESTIONS.map((item) => (
//                     <button
//                       type="button"
//                       key={item}
//                       onClick={() => handleSuggestionClick(item)}
//                       className="text-sm bg-slate-700/70 hover:bg-blue-600 text-slate-300 hover:text-white px-3 py-1.5 rounded-full transition"
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiTrendingUp } from 'react-icons/fi';

/* ===== POPULAR SUGGESTIONS ===== */
const SUGGESTIONS = [
  'Web Development',
  'AI / Machine Learning',
  'DevOps',
  'Data Science',
  'Mobile Development',
];

/* ===== SEARCH → SECTION MAP ===== */
const SEARCH_TO_SECTION = {
  web: 'Career',
  frontend: 'Career',
  backend: 'Career',
  development: 'Career',
  mobile: 'Career',
  ai: 'Roadmaps',
  'machine learning': 'Roadmaps',
  devops: 'Roadmaps',
  'data science': 'Roadmaps',
};

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  /* ===== RESOLVE TARGET SECTION ===== */
  const resolveSection = (value) => {
    const normalized = value.toLowerCase();
    const match = Object.keys(SEARCH_TO_SECTION).find((key) =>
      normalized.includes(key)
    );
    return match ? SEARCH_TO_SECTION[match] : 'Career';
  };

  /* ===== SEARCH HANDLER ===== */
 

  /* ===== SUGGESTION CLICK ===== */

  const handleSearch = (e) => {
  e.preventDefault();
  if (!searchTerm.trim()) return;

  navigate(
    `/dashboard?section=auto&query=${encodeURIComponent(searchTerm)}`
  );
};

const handleSuggestionClick = (value) => {
  navigate(
    `/dashboard?section=auto&query=${encodeURIComponent(value)}`
  );
};


  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-purple-600/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Unlock Your <span className="text-blue-500">Career</span> Potential
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              Clear direction. Structured roadmaps.
            </p>

            <p className="text-lg text-slate-400 mb-10 max-w-xl">
              A focused platform that brings careers, learning paths, curated
              videos, documentation, and resources into one clear journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </button>

              <button
                onClick={() => navigate('/about')}
                className="border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT SEARCH PANEL */}
          <div className="w-full max-w-xl mx-auto">
            <form
              onSubmit={handleSearch}
              className="bg-slate-800/70 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-xl"
            >
              <label className="block text-slate-300 font-medium mb-3">
                Search a career or roadmap
              </label>

              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g. Frontend Developer, AI Engineer"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl
                             pl-12 pr-4 py-4 text-white placeholder-slate-500
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* POPULAR SEARCHES */}
              <div className="mt-5">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <FiTrendingUp />
                  Popular searches
                </div>

                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => handleSuggestionClick(item)}
                      className="text-sm bg-slate-700/70 hover:bg-blue-600
                                 text-slate-300 hover:text-white px-3 py-1.5
                                 rounded-full transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
