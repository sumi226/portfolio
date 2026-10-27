import React from 'react';
import { 
  CheckCircle2, Clock, Dumbbell, Flame, TrendingUp, TrendingDown, 
  Layers, Code2, ShoppingCart, Star, DollarSign, BarChart2, ShoppingBag 
} from 'lucide-react';

/* -------------------------------------------------------------
 * 1. DevStack Thumbnail
 * ----------------------------------------------------------- */
export const DevStackThumbnail: React.FC = () => (
  <div className="w-full h-48 md:h-56 bg-gradient-to-br from-slate-900 via-dark-850 to-slate-950 p-4 rounded-xl border border-slate-800/80 relative overflow-hidden flex flex-col justify-between group-hover:border-cyan-500/40 transition-colors">
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

    {/* Header */}
    <div className="flex items-center justify-between pb-3 border-b border-slate-800/70">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
          <Code2 className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-slate-200">DevStack Dashboard</span>
      </div>
      <span className="px-2 py-0.5 text-[10px] rounded-full bg-cyan-500/15 text-cyan-300 font-mono">
        Sprint Active
      </span>
    </div>

    {/* Columns / Tasks */}
    <div className="grid grid-cols-3 gap-2 my-auto">
      <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
          <span>Backlog</span>
          <span className="bg-slate-800 px-1 rounded text-[9px]">4</span>
        </div>
        <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/60 text-[10px] text-slate-200 font-medium">
          Auth Workflow
          <div className="text-[8px] text-amber-400 font-mono mt-0.5">High Priority</div>
        </div>
      </div>

      <div className="bg-slate-900/80 p-2 rounded-lg border border-cyan-500/30 flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[10px] font-semibold text-cyan-300">
          <span>In Progress</span>
          <span className="bg-cyan-950/80 px-1 rounded text-[9px] text-cyan-300">2</span>
        </div>
        <div className="bg-slate-800/90 p-1.5 rounded border border-cyan-500/40 text-[10px] text-slate-100 font-medium shadow-sm">
          UI Theme Engine
          <div className="flex items-center gap-1 text-[8px] text-cyan-400 font-mono mt-0.5">
            <Clock className="w-2.5 h-2.5" /> Due Today
          </div>
        </div>
      </div>

      <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[10px] font-semibold text-emerald-400">
          <span>Done</span>
          <span className="bg-emerald-950/80 px-1 rounded text-[9px] text-emerald-300">8</span>
        </div>
        <div className="bg-slate-800/80 p-1.5 rounded border border-emerald-500/30 text-[10px] text-slate-300 line-through">
          Vite + Tailwind v3
          <div className="flex items-center gap-1 text-[8px] text-emerald-400 font-mono mt-0.5">
            <CheckCircle2 className="w-2.5 h-2.5" /> Verified
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px] text-slate-400 font-mono">
      <span className="text-cyan-400/90">React 18 + Tailwind + Vite</span>
      <span className="text-slate-300">Netlify Deployed</span>
    </div>
  </div>
);

/* -------------------------------------------------------------
 * 2. FitLog Thumbnail
 * ----------------------------------------------------------- */
export const FitLogThumbnail: React.FC = () => (
  <div className="w-full h-48 md:h-56 bg-gradient-to-br from-slate-900 via-dark-850 to-slate-950 p-4 rounded-xl border border-slate-800/80 relative overflow-hidden flex flex-col justify-between group-hover:border-violet-500/40 transition-colors">
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

    {/* Header */}
    <div className="flex items-center justify-between pb-3 border-b border-slate-800/70">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-violet-500/20 text-violet-400 flex items-center justify-center">
          <Dumbbell className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-slate-200">FitLog Routine Library</span>
      </div>
      <div className="flex items-center gap-1 px-2 py-0.5 text-[10px] rounded-full bg-violet-500/15 text-violet-300 font-mono">
        <Flame className="w-2.5 h-2.5 text-orange-400" /> 12 Lifts Active
      </div>
    </div>

    {/* Routine Grid */}
    <div className="grid grid-cols-3 gap-2 my-auto">
      <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/50 flex flex-col justify-between">
        <div className="w-full h-9 bg-slate-700/50 rounded mb-1 flex items-center justify-center text-[10px] text-violet-300 font-mono">
          Bench Press
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-bold text-slate-200">4 Sets</span>
          <span className="text-[9px] text-violet-400 bg-violet-950/60 px-1 py-0.5 rounded">Chest</span>
        </div>
      </div>

      <div className="bg-slate-800/90 p-2 rounded-lg border border-violet-500/40 flex flex-col justify-between shadow-sm">
        <div className="w-full h-9 bg-gradient-to-tr from-violet-950 to-slate-800 rounded mb-1 flex items-center justify-center text-[10px] text-white font-mono font-medium">
          Barbell Squat
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-bold text-white">5 Sets</span>
          <span className="text-[9px] text-emerald-400 font-semibold">In Plan</span>
        </div>
      </div>

      <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/50 flex flex-col justify-between hidden sm:flex">
        <div className="w-full h-9 bg-slate-700/50 rounded mb-1 flex items-center justify-center text-[10px] text-slate-400 font-mono">
          Deadlift
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-bold text-slate-200">3 Sets</span>
          <span className="text-[9px] text-slate-400 bg-slate-900/60 px-1 py-0.5 rounded">Back</span>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px] text-slate-400 font-mono">
      <span className="text-violet-400/90">Next.js + TypeScript + Geist</span>
      <span className="text-slate-300">Train with Intent</span>
    </div>
  </div>
);

/* -------------------------------------------------------------
 * 3. Market Price (বাজার দর) Thumbnail
 * ----------------------------------------------------------- */
export const MarketPriceThumbnail: React.FC = () => (
  <div className="w-full h-48 md:h-56 bg-gradient-to-br from-slate-900 via-dark-850 to-slate-950 p-4 rounded-xl border border-slate-800/80 relative overflow-hidden flex flex-col justify-between group-hover:border-emerald-500/40 transition-colors">
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

    {/* Header */}
    <div className="flex items-center justify-between pb-3 border-b border-slate-800/70">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <ShoppingCart className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-slate-200">বাজার দর | Market Price</span>
      </div>
      <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> লাইভ রেট
      </div>
    </div>

    {/* Commodities Grid */}
    <div className="grid grid-cols-3 gap-2 my-auto">
      <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/50 flex flex-col justify-between">
        <div className="text-[10px] font-medium text-slate-300 truncate">🍚 মিনিকেট চাল</div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[11px] font-bold text-white">৳ ৯৯</span>
          <span className="text-[9px] text-emerald-400 flex items-center">
            <TrendingDown className="w-2.5 h-2.5 mr-0.5" /> -2.9%
          </span>
        </div>
      </div>

      <div className="bg-slate-800/90 p-2 rounded-lg border border-emerald-500/30 flex flex-col justify-between shadow-sm">
        <div className="text-[10px] font-medium text-emerald-200 truncate">🧅 পেঁয়াজ (কেজি)</div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[11px] font-bold text-white">৳ ৫৪</span>
          <span className="text-[9px] text-rose-400 flex items-center">
            <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +12%
          </span>
        </div>
      </div>

      <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/50 flex flex-col justify-between hidden sm:flex">
        <div className="text-[10px] font-medium text-slate-300 truncate">🫙 সরিষার তেল</div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[11px] font-bold text-white">৳ ১৯২</span>
          <span className="text-[9px] text-rose-400 flex items-center">
            <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +2.1%
          </span>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px] text-slate-400 font-mono">
      <span className="text-emerald-400/90">Next.js + Cart Analytics</span>
      <span className="text-slate-300">নিত্যপণ্যের আজকের দাম</span>
    </div>
  </div>
);

/* -------------------------------------------------------------
 * Legacy / Fallback Thumbnails
 * ----------------------------------------------------------- */
export const EcommerceThumbnail: React.FC = () => (
  <DevStackThumbnail />
);

export const TaskManagementThumbnail: React.FC = () => (
  <FitLogThumbnail />
);

export const FinanceDashboardThumbnail: React.FC = () => (
  <MarketPriceThumbnail />
);

/* -------------------------------------------------------------
 * Main ProjectThumbnail Dispatcher
 * ----------------------------------------------------------- */
export const ProjectThumbnail: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'devstack':
      return <DevStackThumbnail />;
    case 'fitlog':
      return <FitLogThumbnail />;
    case 'marketPrice':
    case 'market-price':
      return <MarketPriceThumbnail />;
    case 'ecommerce':
      return <DevStackThumbnail />;
    case 'taskManagement':
      return <FitLogThumbnail />;
    case 'financeDashboard':
      return <MarketPriceThumbnail />;
    default:
      return <DevStackThumbnail />;
  }
};
