import React, { useState } from 'react';
import { 
  CheckCircle2, Clock, Dumbbell, Flame, TrendingUp, TrendingDown, 
  Layers, Code2, ShoppingCart, Plus, Trash2, ArrowRight, RefreshCw,
  Search, ShieldCheck, Sparkles, Activity
} from 'lucide-react';

/* =============================================================
 * 1. DevStack Interactive Live Demo
 * =========================================================== */
interface DevTask {
  id: number;
  title: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'todo' | 'inProgress' | 'done';
}

export const DevStackLiveDemo: React.FC = () => {
  const [tasks, setTasks] = useState<DevTask[]>([
    { id: 1, title: 'Implement JWT Auth flow', category: 'Backend', priority: 'High', status: 'todo' },
    { id: 2, title: 'Build responsive Kanban board', category: 'Frontend', priority: 'High', status: 'inProgress' },
    { id: 3, title: 'Configure Tailwind palette & fonts', category: 'Styling', priority: 'Medium', status: 'done' },
    { id: 4, title: 'Optimize Netlify build deployment', category: 'DevOps', priority: 'Low', status: 'done' },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const moveTask = (id: number) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        if (t.status === 'todo') return { ...t, status: 'inProgress' };
        if (t.status === 'inProgress') return { ...t, status: 'done' };
        return { ...t, status: 'todo' };
      }
      return t;
    }));
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: DevTask = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      category: 'Feature',
      priority: 'Medium',
      status: 'todo'
    };
    setTasks(prev => [newTask, ...prev]);
    setNewTaskTitle('');
  };

  const todoTasks = tasks.filter(t => t.status === 'todo');
  const inProgressTasks = tasks.filter(t => t.status === 'inProgress');
  const doneTasks = tasks.filter(t => t.status === 'done');

  return (
    <div className="bg-dark-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">DevStack Sprint Board</h4>
            <p className="text-[11px] text-slate-400">Interactive Task & Workflow Simulator</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {tasks.length} Total Tasks
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {doneTasks.length} Completed
          </span>
        </div>
      </div>

      {/* Add Task Input Form */}
      <form onSubmit={addTask} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new developer sprint task..."
          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Task</span>
        </button>
      </form>

      {/* 3 Status Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* To Do Column */}
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/90 flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-semibold text-slate-400">
            <span>To Do</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
              {todoTasks.length}
            </span>
          </div>
          <div className="space-y-2 flex-1">
            {todoTasks.map(t => (
              <div key={t.id} className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 text-xs flex flex-col gap-1.5 group hover:border-cyan-500/40 transition-colors">
                <span className="text-slate-200 font-medium">{t.title}</span>
                <div className="flex items-center justify-between pt-1 text-[10px]">
                  <span className="text-amber-400 font-mono">{t.priority} Priority</span>
                  <button
                    onClick={() => moveTask(t.id)}
                    className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1"
                  >
                    Start <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            ))}
            {todoTasks.length === 0 && (
              <p className="text-[11px] text-slate-500 italic py-4 text-center">No tasks in backlog</p>
            )}
          </div>
        </div>

        {/* In Progress Column */}
        <div className="bg-slate-950/60 p-3 rounded-xl border border-cyan-500/30 flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-semibold text-cyan-300">
            <span>In Progress</span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-950/80 text-[10px] font-mono text-cyan-300">
              {inProgressTasks.length}
            </span>
          </div>
          <div className="space-y-2 flex-1">
            {inProgressTasks.map(t => (
              <div key={t.id} className="bg-slate-900/90 p-2.5 rounded-lg border border-cyan-500/40 text-xs flex flex-col gap-1.5 shadow-sm">
                <span className="text-white font-medium">{t.title}</span>
                <div className="flex items-center justify-between pt-1 text-[10px]">
                  <span className="text-cyan-400 font-mono flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" /> Active
                  </span>
                  <button
                    onClick={() => moveTask(t.id)}
                    className="text-emerald-400 hover:text-emerald-300 font-mono flex items-center gap-1 font-semibold"
                  >
                    Done <CheckCircle2 className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            ))}
            {inProgressTasks.length === 0 && (
              <p className="text-[11px] text-slate-500 italic py-4 text-center">No active tasks</p>
            )}
          </div>
        </div>

        {/* Done Column */}
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/90 flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-semibold text-emerald-400">
            <span>Completed</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-950/80 text-[10px] font-mono text-emerald-300">
              {doneTasks.length}
            </span>
          </div>
          <div className="space-y-2 flex-1">
            {doneTasks.map(t => (
              <div key={t.id} className="bg-slate-900/60 p-2.5 rounded-lg border border-emerald-500/30 text-xs flex flex-col gap-1.5 opacity-80">
                <span className="text-slate-300 line-through font-medium">{t.title}</span>
                <div className="flex items-center justify-between pt-1 text-[10px]">
                  <span className="text-emerald-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                  </span>
                  <button
                    onClick={() => moveTask(t.id)}
                    className="text-slate-400 hover:text-slate-200 font-mono flex items-center gap-1"
                  >
                    Reopen <RefreshCw className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            ))}
            {doneTasks.length === 0 && (
              <p className="text-[11px] text-slate-500 italic py-4 text-center">No completed tasks yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* =============================================================
 * 2. FitLog Interactive Live Demo
 * =========================================================== */
interface WorkoutExercise {
  id: number;
  name: string;
  muscle: string;
  sets: number;
  reps: string;
  difficulty: string;
  calories: number;
}

export const FitLogLiveDemo: React.FC = () => {
  const library: WorkoutExercise[] = [
    { id: 1, name: "Barbell Bench Press", muscle: "Chest", sets: 4, reps: "8-10", difficulty: "Intermediate", calories: 120 },
    { id: 2, name: "Barbell Back Squat", muscle: "Legs", sets: 5, reps: "6-8", difficulty: "Hard", calories: 180 },
    { id: 3, name: "Conventional Deadlift", muscle: "Back", sets: 3, reps: "5", difficulty: "Hard", calories: 200 },
    { id: 4, name: "Overhead Military Press", muscle: "Shoulders", sets: 4, reps: "8-12", difficulty: "Intermediate", calories: 110 },
    { id: 5, name: "Weighted Pull-Ups", muscle: "Back / Lats", sets: 4, reps: "8-10", difficulty: "Intermediate", calories: 130 },
    { id: 6, name: "Dumbbell Incline Curl", muscle: "Biceps", sets: 3, reps: "12", difficulty: "Light", calories: 75 },
  ];

  const [activeMuscle, setActiveMuscle] = useState<string>("All");
  const [plan, setPlan] = useState<WorkoutExercise[]>([library[0], library[1]]);

  const togglePlanItem = (exercise: WorkoutExercise) => {
    setPlan(prev => {
      const exists = prev.find(item => item.id === exercise.id);
      if (exists) {
        return prev.filter(item => item.id !== exercise.id);
      }
      return [...prev, exercise];
    });
  };

  const filteredExercises = activeMuscle === "All"
    ? library
    : library.filter(item => item.muscle.toLowerCase().includes(activeMuscle.toLowerCase()));

  const totalEstCalories = plan.reduce((sum, item) => sum + item.calories, 0);
  const totalSets = plan.reduce((sum, item) => sum + item.sets, 0);

  return (
    <div className="bg-dark-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center">
            <Dumbbell className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">FitLog Workout Planner</h4>
            <p className="text-[11px] text-slate-400 font-mono">Train with intent. Log every set.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/30 flex items-center gap-1.5">
            <Flame className="w-3 h-3 text-orange-400" /> {totalEstCalories} kcal
          </span>
          <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {totalSets} Sets in Plan
          </span>
        </div>
      </div>

      {/* Muscle Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-5">
        {['All', 'Chest', 'Legs', 'Back', 'Shoulders'].map(m => (
          <button
            key={m}
            onClick={() => setActiveMuscle(m)}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
              activeMuscle === m
                ? 'bg-violet-600 text-white font-semibold shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Exercise Library List */}
        <div className="lg:col-span-2 space-y-2.5">
          <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono mb-2">
            Exercise Catalog ({filteredExercises.length})
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {filteredExercises.map(ex => {
              const inPlan = plan.some(p => p.id === ex.id);
              return (
                <div
                  key={ex.id}
                  className={`p-3 rounded-xl border transition-all flex flex-col justify-between ${
                    inPlan
                      ? 'bg-violet-950/40 border-violet-500/50 shadow-sm'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-violet-300 border border-slate-800">
                        {ex.muscle}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">~{ex.calories} kcal</span>
                    </div>
                    <div className="text-xs font-bold text-white mt-1">{ex.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {ex.sets} Sets × {ex.reps} Reps
                    </div>
                  </div>
                  <button
                    onClick={() => togglePlanItem(ex)}
                    className={`mt-3 w-full py-1.5 px-3 rounded-lg text-xs font-medium font-mono transition-colors flex items-center justify-center gap-1.5 ${
                      inPlan
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-900 hover:bg-violet-600 hover:text-white text-slate-300 border border-slate-800'
                    }`}
                  >
                    {inPlan ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Locked in Plan
                      </>
                    ) : (
                      <>
                        <Plus className="w-3 h-3" /> Add to Plan
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Plan Summary Card */}
        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-800">
              <h5 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-violet-400" /> Today's Routine
              </h5>
              <span className="px-2 py-0.5 rounded bg-violet-950/80 text-[10px] text-violet-300 font-mono">
                {plan.length} Selected
              </span>
            </div>

            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {plan.map(p => (
                <div key={p.id} className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-200 block text-[11px]">{p.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{p.sets} Sets • {p.muscle}</span>
                  </div>
                  <button
                    onClick={() => togglePlanItem(p)}
                    className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                    title="Remove from plan"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              {plan.length === 0 && (
                <p className="text-xs text-slate-500 text-center py-8 italic">Your plan is empty. Click "+ Add to Plan" above.</p>
              )}
            </div>
          </div>

          <div className="pt-4 mt-3 border-t border-slate-800 text-xs">
            <div className="flex justify-between text-slate-400 font-mono text-[11px] mb-1">
              <span>Estimated Duration:</span>
              <span className="text-slate-200">{plan.length * 15} mins</span>
            </div>
            <div className="flex justify-between text-slate-400 font-mono text-[11px]">
              <span>Workout Intensity:</span>
              <span className="text-violet-400 font-bold">{plan.length > 3 ? 'High' : 'Moderate'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =============================================================
 * 3. Market Price (বাজার দর) Interactive Live Demo
 * =========================================================== */
interface CommodityItem {
  id: number;
  name: string;
  category: string;
  unit: string;
  price: number;
  change: number; // percentage change
  trend: 'up' | 'down' | 'neutral';
}

interface CartCommodity {
  item: CommodityItem;
  qty: number;
}

export const MarketPriceLiveDemo: React.FC = () => {
  const commodities: CommodityItem[] = [
    { id: 1, name: "🍚 মিনিকেট চাল", category: "চাল", unit: "১ কেজি", price: 99, change: -2.9, trend: 'down' },
    { id: 2, name: "🍚 নাজির চাল", category: "চাল", unit: "১ কেজি", price: 74, change: 0, trend: 'neutral' },
    { id: 3, name: "🫘 মসুর ডাল", category: "ডাল", unit: "১ কেজি", price: 142, change: 2.9, trend: 'up' },
    { id: 4, name: "🫘 ছোলা", category: "ডাল", unit: "১ কেজি", price: 120, change: -2.4, trend: 'down' },
    { id: 5, name: "🫙 সরিষার তেল", category: "তেল", unit: "১ লিটার", price: 192, change: 2.1, trend: 'up' },
    { id: 6, name: "🧅 পেঁয়াজ", category: "সবজি", unit: "১ কেজি", price: 54, change: 12.5, trend: 'up' },
    { id: 7, name: "🥔 আলু", category: "সবজি", unit: "১ কেজি", price: 30, change: -6.2, trend: 'down' },
    { id: 8, name: "🐟 রুই মাছ", category: "মাছ", unit: "১ কেজি", price: 340, change: 4.5, trend: 'up' },
    { id: 9, name: "🍗 ব্রয়লার মুরগি", category: "মাংস", unit: "১ কেজি", price: 225, change: -1.3, trend: 'down' },
    { id: 10, name: "🥚 ডিম (হালি)", category: "ডিম-দুধ", unit: "৪ টি", price: 52, change: 3.9, trend: 'up' },
  ];

  const [selectedCat, setSelectedCat] = useState<string>("সব");
  const [cart, setCart] = useState<CartCommodity[]>([
    { item: commodities[0], qty: 2 },
    { item: commodities[4], qty: 1 },
    { item: commodities[5], qty: 1 },
  ]);

  const addToCart = (item: CommodityItem) => {
    setCart(prev => {
      const idx = prev.findIndex(c => c.item.id === item.id);
      if (idx !== -1) {
        return prev.map((c, i) => i === idx ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prev, { item, qty: 1 }];
    });
  };

  const updateCartQty = (id: number, delta: number) => {
    setCart(prev => prev.map(c => {
      if (c.item.id === id) {
        const next = c.qty + delta;
        return next > 0 ? { ...c, qty: next } : c;
      }
      return c;
    }));
  };

  const removeCartItem = (id: number) => {
    setCart(prev => prev.filter(c => c.item.id !== id));
  };

  const filteredItems = selectedCat === "সব"
    ? commodities
    : commodities.filter(c => c.category === selectedCat);

  const totalAmount = cart.reduce((sum, c) => sum + (c.item.price * c.qty), 0);

  return (
    <div className="bg-dark-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <ShoppingCart className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">বাজার দর | Daily Market Price Monitor</h4>
            <p className="text-[11px] text-slate-400 font-mono">নিত্যপণ্যের আজকের দাম ও রিয়েল-টাইম ক্যালকুলেটর</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
            মোট বাজেট: ৳ {totalAmount}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            কার্টে {cart.reduce((s, c) => s + c.qty, 0)} টি
          </span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {['সব', 'চাল', 'ডাল', 'তেল', 'সবজি', 'মাছ', 'মাংস', 'ডিম-দুধ'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
              selectedCat === cat
                ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Commodities Table / Cards */}
        <div className="lg:col-span-2 space-y-2">
          <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono mb-2">
            নিত্যপণ্যের মূল্য তালিকা ({filteredItems.length})
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {filteredItems.map(c => (
              <div
                key={c.id}
                className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 flex items-center justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="text-xs font-bold text-white">{c.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    একক: {c.unit}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold text-emerald-300 font-mono">
                      ৳ {c.price}
                    </span>
                    <span className={`text-[9px] font-mono flex items-center ${
                      c.trend === 'up' 
                        ? 'text-rose-400' 
                        : c.trend === 'down' 
                          ? 'text-emerald-400' 
                          : 'text-slate-400'
                    }`}>
                      {c.trend === 'up' && <TrendingUp className="w-2.5 h-2.5 mr-0.5" />}
                      {c.trend === 'down' && <TrendingDown className="w-2.5 h-2.5 mr-0.5" />}
                      {c.change > 0 ? `+${c.change}%` : `${c.change}%`}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(c)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white text-slate-300 text-xs font-mono border border-slate-800 flex items-center gap-1 transition-colors"
                >
                  <Plus className="w-3 h-3" /> কার্টে নিন
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Shopping Cart */}
        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-800">
              <h5 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" /> আজকের বাজার কার্ট
              </h5>
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-[10px] text-emerald-300 font-mono">
                {cart.length} আইটেম
              </span>
            </div>

            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {cart.map(c => (
                <div key={c.item.id} className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-200 block text-[11px] truncate max-w-[110px]">
                      {c.item.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">৳ {c.item.price} × {c.qty}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => updateCartQty(c.item.id, -1)}
                      className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center text-xs font-bold"
                    >
                      -
                    </button>
                    <span className="text-xs font-mono text-white w-4 text-center">{c.qty}</span>
                    <button
                      onClick={() => updateCartQty(c.item.id, 1)}
                      className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center text-xs font-bold"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeCartItem(c.item.id)}
                      className="p-1 text-slate-500 hover:text-rose-400 ml-1"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
              {cart.length === 0 && (
                <p className="text-xs text-slate-500 text-center py-8 italic">কার্ট এখন খালি। তালিকা থেকে পণ্য যুক্ত করুন।</p>
              )}
            </div>
          </div>

          <div className="pt-4 mt-3 border-t border-slate-800">
            <div className="flex justify-between items-center text-sm font-bold text-white mb-2 font-mono">
              <span>সর্বমোট খরচ:</span>
              <span className="text-emerald-400">৳ {totalAmount}</span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono text-center">
              ✓ রিয়েল-টাইম প্রাইস আপডেট ও কার্ট ক্যালকুলেশন
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =============================================================
 * Fallback / Legacy Live Demos
 * =========================================================== */
export const EcommerceLiveDemo: React.FC = () => <DevStackLiveDemo />;
export const TaskManagementLiveDemo: React.FC = () => <FitLogLiveDemo />;
export const FinanceDashboardLiveDemo: React.FC = () => <MarketPriceLiveDemo />;
