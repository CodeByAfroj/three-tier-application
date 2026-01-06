import { useState, useEffect, useRef } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import {
  FiBriefcase,
  FiMap,
  FiPlayCircle,
  FiFileText,
  FiLink,
  FiGlobe,
  FiMenu,
  FiSearch,
} from 'react-icons/fi';
import api from '../api/axios';

/* ===== SECTION COMPONENTS ===== */
import CareerSection from '../sections/CareerSection';
import RoadmapsSection from '../sections/RoadmapsSection';
import VideosSection from '../sections/VideosSection';
import DocsSection from '../sections/DocsSection';
import LinksSection from '../sections/LinksSection';
import NewsSection from '../sections/NewsSection';

/* ===== CONSTANTS ===== */
const SECTIONS = [
  'Career',
  'Roadmaps',
  'Videos',
  'Documentations',
  'Best Links',
  'Best News',
];

const SECTION_COMPONENTS = {
  Career: CareerSection,
  Roadmaps: RoadmapsSection,
  Videos: VideosSection,
  Documentations: DocsSection,
  'Best Links': LinksSection,
  'Best News': NewsSection,
};

const getIcon = (section) => {
  switch (section) {
    case 'Career':
      return <FiBriefcase size={20} />;
    case 'Roadmaps':
      return <FiMap size={20} />;
    case 'Videos':
      return <FiPlayCircle size={20} />;
    case 'Documentations':
      return <FiFileText size={20} />;
    case 'Best Links':
      return <FiLink size={20} />;
    case 'Best News':
      return <FiGlobe size={20} />;
    default:
      return null;
  }
};

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('Career');
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();


  const searchTimer = useRef(null);

  /* ===== API ENDPOINT MAP ===== */
  const getEndpoint = (section) => {
    const map = {
      Career: '/careers',
      Roadmaps: '/roadmaps',
      Videos: '/videos',
      Documentations: '/docs',
      'Best Links': '/links',
      'Best News': '/news',
    };
    return map[section];
  };

useEffect(() => {
  const params = new URLSearchParams(location.search);

  const query = params.get('query');
  const sectionParam = params.get('section');

  if (!query && !sectionParam) return;

  let section = sectionParam || 'Career';

  // AUTO RESOLVE SECTION
  if (section === 'auto' && query) {
    const q = query.toLowerCase();
    section = q.includes('ai') || q.includes('ml') || q.includes('devops')
      ? 'Roadmaps'
      : 'Career';
  }

  // 🔑 APPLY STATE ONCE
  setActiveSection(section);
  setSearch(query || '');
  setData([]);
  setLoading(true);

  // 🔥 CLEAN URL (THIS IS THE KEY)
  navigate('/dashboard', { replace: true });
}, [location.search, navigate]);

  /* ===== FETCH DATA (DEBOUNCED SEARCH) ===== */
  useEffect(() => {
    if (searchTimer.current) {
      clearTimeout(searchTimer.current);
    }

    searchTimer.current = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(searchTimer.current);
  }, [activeSection, search]);




  const fetchData = async () => {
    try {
      const params = search ? { search } : {};
      const res = await api.get(getEndpoint(activeSection), { params });
      setData(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error('Fetch error:', err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  /* ===== HANDLERS ===== */
  const handleSectionClick = (section) => {
    setActiveSection(section);
    setSearch('');
    setData([]);        // ✅ CLEAR OLD DATA (FIXES STALE FLASH)
    setLoading(true);   // ✅ SHOW LOADER IMMEDIATELY
  };

  const ActiveSectionComponent =
    SECTION_COMPONENTS[activeSection] || null;

  /* ===== UI ===== */
  return (
    <div className="flex h-screen bg-slate-900">
      {/* ================= SIDEBAR (DESKTOP) ================= */}
      <aside
        className={`hidden md:block bg-slate-800 border-r border-slate-700
        transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}
      >
        <div className="p-4 flex justify-between items-center">
          {sidebarOpen && (
            <span className="text-white font-bold">Get Started</span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-slate-300 hover:text-white"
          >
            <FiMenu size={20} />
          </button>
        </div>

        {SECTIONS.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className={`flex items-center gap-3 w-full px-4 py-3 text-left transition
              ${
                activeSection === section
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-300 hover:bg-slate-700'
              }`}
          >
            {getIcon(section)}
            {sidebarOpen && section}
          </button>
        ))}
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* ===== SEARCH BAR ===== */}
        <div className="mb-6 max-w-md">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${activeSection.toLowerCase()}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg
                         pl-10 pr-4 py-2 text-sm text-white
                         placeholder-slate-400 focus:outline-none
                         focus:border-blue-500"
            />
          </div>
        </div>

        {/* ===== CONTENT RENDER ===== */}
        {loading ? (
          <div className="text-center text-slate-400 py-20">
            Loading...
          </div>
        ) : data.length === 0 ? (
          <div className="text-center text-slate-400 py-20">
            No results found
          </div>
        ) : (
          ActiveSectionComponent && (
            <ActiveSectionComponent data={data} />
          )
        )}
      </main>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700
        flex justify-around items-center py-2 md:hidden"
      >
        {SECTIONS.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className={`flex flex-col items-center text-xs
              ${
                activeSection === section
                  ? 'text-blue-400'
                  : 'text-slate-400'
              }`}
          >
            {getIcon(section)}
          </button>
        ))}
      </div>
    </div>
  );
}
