import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">PathFinder</h3>
          <p className="text-slate-400 mb-4">
            Your journey to career clarity starts here
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} PathFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

