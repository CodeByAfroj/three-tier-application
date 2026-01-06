import React from 'react';

// Mock data for careers
const mockCareers = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Build modern websites and web applications',
    icon: '💻',
  },
  {
    id: 2,
    title: 'AI / Machine Learning',
    description: 'Dive into artificial intelligence and ML',
    icon: '🤖',
  },
  {
    id: 3,
    title: 'DevOps',
    description: 'Master deployment and infrastructure',
    icon: '⚙️',
  },
  {
    id: 4,
    title: 'Data Science',
    description: 'Extract insights from data',
    icon: '📊',
  },
  {
    id: 5,
    title: 'Mobile Development',
    description: 'Create iOS and Android apps',
    icon: '📱',
  },
];

const CareerCard = ({ career }) => {
  return (
    <div className="group bg-slate-800/80 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/60 hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
      <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
        {career.icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
        {career.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{career.description}</p>
      <div className="mt-4 pt-4 border-t border-slate-700/50">
        <span className="text-xs text-blue-400 font-medium group-hover:text-blue-300">
          View Roadmap →
        </span>
      </div>
    </div>
  );
};

// Export both the component and mock data
export { mockCareers };
export default CareerCard;
