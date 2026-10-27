import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Compass } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-md w-full glass-card p-8 rounded-3xl border border-slate-800 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        <span className="text-4xl sm:text-5xl font-mono font-black gradient-text-blue block mb-2">
          404
        </span>

        <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 mb-8 leading-relaxed">
          The page or route you are looking for does not exist or has been relocated in the developer portfolio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-glow-primary transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" /> Return to Home
          </Link>

          <Link
            href="/#projects"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};
