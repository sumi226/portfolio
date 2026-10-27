import React from 'react';
import { ShoppingBag, Star, CheckCircle2, Clock, DollarSign, TrendingUp, BarChart2, Layers } from 'lucide-react';

export const EcommerceThumbnail: React.FC = () => (
  <div className="w-full h-48 md:h-56 bg-gradient-to-br from-slate-900 via-dark-850 to-slate-950 p-4 rounded-xl border border-slate-800/80 relative overflow-hidden flex flex-col justify-between group-hover:border-cyan-500/40 transition-colors">
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
    
    <div className="flex items-center justify-between pb-3 border-b border-slate-800/70">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
          <ShoppingBag className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-slate-200">ShopFlow Storefront</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-500/15 text-emerald-300 font-mono">Cart: 3 items</span>
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2 my-auto">
      <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/50 flex flex-col justify-between">
        <div className="w-full h-10 bg-slate-700/50 rounded mb-1.5 flex items-center justify-center text-[10px] text-cyan-300 font-mono">Tech Gear</div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-100">$89.00</span>
          <span className="text-[9px] text-cyan-400 bg-cyan-950/60 px-1 py-0.5 rounded">Add</span>
        </div>
      </div>
      <div className="bg-slate-800/90 p-2 rounded-lg border border-cyan-500/30 flex flex-col justify-between relative shadow-sm">
        <div className="w-full h-10 bg-gradient-to-tr from-cyan-950 to-slate-800 rounded mb-1.5 flex items-center justify-center text-[10px] text-cyan-200 font-mono font-medium">Headphones</div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-white">$149.00</span>
          <span className="text-[9px] text-emerald-400 font-semibold">In Cart</span>
        </div>
      </div>
      <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/50 flex flex-col justify-between hidden sm:flex">
        <div className="w-full h-10 bg-slate-700/50 rounded mb-1.5 flex items-center justify-center text-[10px] text-slate-400 font-mono">Smart Watch</div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-100">$199.00</span>
          <span className="text-[9px] text-slate-400 bg-slate-900/60 px-1 py-0.5 rounded">View</span>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px] text-slate-400">
      <span className="font-mono text-cyan-400/90">React + Express + MongoDB</span>
      <span className="flex items-center gap-1 text-slate-300">
        <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> 4.9 (128 reviews)
      </span>
    </div>
  </div>
);

export const TaskManagementThumbnail: React.FC = () => (
  <div className="w-full h-48 md:h-56 bg-gradient-to-br from-slate-900 via-dark-850 to-slate-950 p-4 rounded-xl border border-slate-800/80 relative overflow-hidden flex flex-col justify-between group-hover:border-violet-500/40 transition-colors">
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

    <div className="flex items-center justify-between pb-3 border-b border-slate-800/70">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-violet-500/20 text-violet-400 flex items-center justify-center">
          <Layers className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-slate-200">Kanban Board & Sprint Flow</span>
      </div>
      <span className="px-2 py-0.5 text-[10px] rounded-full bg-violet-500/15 text-violet-300 font-mono">Sprint 04 Active</span>
    </div>

    <div className="grid grid-cols-3 gap-2 my-auto">
      <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
          <span>To Do</span>
          <span className="bg-slate-800 px-1 rounded text-[9px]">3</span>
        </div>
        <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/60 text-[10px] text-slate-200 font-medium">
          API Token Auth
          <div className="text-[8px] text-amber-400 font-mono mt-0.5">High Priority</div>
        </div>
      </div>

      <div className="bg-slate-900/80 p-2 rounded-lg border border-violet-500/30 flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[10px] font-semibold text-violet-300">
          <span>In Progress</span>
          <span className="bg-violet-950/80 px-1 rounded text-[9px] text-violet-300">2</span>
        </div>
        <div className="bg-slate-800/90 p-1.5 rounded border border-violet-500/40 text-[10px] text-slate-100 font-medium shadow-sm">
          UI Theme Engine
          <div className="flex items-center gap-1 text-[8px] text-cyan-400 font-mono mt-0.5">
            <Clock className="w-2.5 h-2.5" /> Due Today
          </div>
        </div>
      </div>

      <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[10px] font-semibold text-emerald-400">
          <span>Done</span>
          <span className="bg-emerald-950/80 px-1 rounded text-[9px] text-emerald-300">7</span>
        </div>
        <div className="bg-slate-800/80 p-1.5 rounded border border-emerald-500/30 text-[10px] text-slate-300 line-through">
          Setup Tailwind v3
          <div className="flex items-center gap-1 text-[8px] text-emerald-400 font-mono mt-0.5">
            <CheckCircle2 className="w-2.5 h-2.5" /> Verified
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px] text-slate-400 font-mono">
      <span className="text-violet-400/90">Framer Motion + Drag & Drop</span>
      <span className="text-slate-300">92% Sprint Velocity</span>
    </div>
  </div>
);

export const FinanceDashboardThumbnail: React.FC = () => (
  <div className="w-full h-48 md:h-56 bg-gradient-to-br from-slate-900 via-dark-850 to-slate-950 p-4 rounded-xl border border-slate-800/80 relative overflow-hidden flex flex-col justify-between group-hover:border-emerald-500/40 transition-colors">
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

    <div className="flex items-center justify-between pb-3 border-b border-slate-800/70">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <DollarSign className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-slate-200">Financial Insights & Metrics</span>
      </div>
      <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full">
        <TrendingUp className="w-3 h-3" /> +18.4% MoM
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2 my-auto items-center">
      <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/50">
        <span className="text-[9px] text-slate-400 uppercase font-mono block">Net Balance</span>
        <span className="text-sm font-bold text-white">$24,850</span>
        <span className="text-[8px] text-emerald-400 font-mono block mt-0.5">Budget surplus</span>
      </div>

      <div className="col-span-2 bg-slate-800/70 p-2 rounded-lg border border-slate-700/50 flex items-end justify-between h-16 px-3">
        <div className="flex flex-col items-center gap-1">
          <div className="w-3 bg-cyan-500/60 rounded-t h-8" />
          <span className="text-[8px] text-slate-400 font-mono">Jan</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-3 bg-cyan-500/70 rounded-t h-10" />
          <span className="text-[8px] text-slate-400 font-mono">Feb</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-3 bg-cyan-500/80 rounded-t h-7" />
          <span className="text-[8px] text-slate-400 font-mono">Mar</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-3 bg-emerald-400 rounded-t h-12 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          <span className="text-[8px] text-emerald-300 font-mono font-bold">Apr</span>
        </div>
        <div className="flex flex-col items-center gap-1 hidden sm:flex">
          <div className="w-3 bg-cyan-500/60 rounded-t h-9" />
          <span className="text-[8px] text-slate-400 font-mono">May</span>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px] text-slate-400 font-mono">
      <span className="text-emerald-400/90 flex items-center gap-1">
        <BarChart2 className="w-3 h-3" /> Real-time Analytics
      </span>
      <span className="text-slate-300">MBA Finance Inspired</span>
    </div>
  </div>
);

export const ProjectThumbnail: React.FC<{ type: 'ecommerce' | 'taskManagement' | 'financeDashboard' }> = ({ type }) => {
  switch (type) {
    case 'ecommerce':
      return <EcommerceThumbnail />;
    case 'taskManagement':
      return <TaskManagementThumbnail />;
    case 'financeDashboard':
      return <FinanceDashboardThumbnail />;
    default:
      return <EcommerceThumbnail />;
  }
};
