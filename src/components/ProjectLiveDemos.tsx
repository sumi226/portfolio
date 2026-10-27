import React, { useState } from 'react';
import { 
  ShoppingBag, Trash2, Plus, Clock, 
  DollarSign, TrendingUp, TrendingDown 
} from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductItem {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
}

export const EcommerceLiveDemo: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Noise-Cancelling Headphones", price: 149, quantity: 1 },
    { id: 2, name: "Ergonomic Mechanical Keyboard", price: 99, quantity: 1 }
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const catalog: ProductItem[] = [
    { id: 1, name: "Noise-Cancelling Headphones", category: "audio", price: 149, rating: 4.8 },
    { id: 2, name: "Ergonomic Mechanical Keyboard", category: "peripherals", price: 99, rating: 4.9 },
    { id: 3, name: "Ultra-wide 4K Monitor", category: "peripherals", price: 349, rating: 4.7 },
    { id: 4, name: "Wireless Gaming Mouse", category: "peripherals", price: 59, rating: 4.6 },
    { id: 5, name: "Studio Microphone", category: "audio", price: 129, rating: 4.8 },
  ];

  const filteredCatalog = selectedCategory === "all" 
    ? catalog 
    : catalog.filter(item => item.category === selectedCategory);

  const addToCart = (product: ProductItem) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-dark-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Interactive Storefront Demo</span>
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-cyan-400" /> ShopFlow Client & Cart
          </h4>
        </div>
        <div className="flex items-center gap-2">
          {["all", "audio", "peripherals"].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-colors ${
                selectedCategory === cat 
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" 
                  : "bg-slate-800/80 text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Available Products</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredCatalog.map(product => {
              const inCart = cart.some(item => item.id === product.id);
              return (
                <div key={product.id} className="bg-slate-800/50 hover:bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-700/60 text-slate-300">
                      {product.category}
                    </span>
                    <h5 className="font-semibold text-sm text-slate-100 mt-2">{product.name}</h5>
                    <div className="text-xs text-cyan-400 font-mono mt-1 font-bold">${product.price}.00</div>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full py-1.5 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" /> {inCart ? "Add Another" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-cyan-400" /> Active Cart ({cart.length})
              </span>
              <span className="text-xs font-mono text-cyan-400 font-bold">${total}.00</span>
            </div>

            <div className="mt-3 space-y-2 max-h-56 overflow-y-auto pr-1">
              {cart.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-500">Cart is empty. Click a product to add!</div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/40 flex items-center justify-between">
                    <div className="truncate mr-2">
                      <div className="text-xs font-medium text-slate-200 truncate">{item.name}</div>
                      <div className="text-[10px] text-cyan-400 font-mono">${item.price} each</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)} 
                        className="w-5 h-5 rounded bg-slate-700 text-xs flex items-center justify-center text-slate-300 hover:bg-slate-600"
                      >-</button>
                      <span className="text-xs font-mono w-4 text-center text-slate-100">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)} 
                        className="w-5 h-5 rounded bg-slate-700 text-xs flex items-center justify-center text-slate-300 hover:bg-slate-600"
                      >+</button>
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="w-5 h-5 rounded text-rose-400 hover:bg-rose-500/20 flex items-center justify-center ml-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-700/60">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Estimated Tax (0%):</span>
              <span className="font-mono text-slate-200">$0.00</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-white mb-3">
              <span>Order Total:</span>
              <span className="font-mono text-cyan-400">${total}.00</span>
            </div>
            <button 
              disabled={cart.length === 0}
              onClick={() => alert("Simulation: Checkout verified! Real app connects to Stripe or Express API.")}
              className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium text-xs rounded-lg transition-all shadow-md"
            >
              Simulate Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TaskItem {
  id: number;
  title: string;
  status: 'todo' | 'inprogress' | 'done';
  priority: string;
}

export const TaskManagementLiveDemo: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 1, title: "Design responsive product cards", status: "done", priority: "High" },
    { id: 2, title: "Implement JWT auth middleware", status: "inprogress", priority: "High" },
    { id: 3, title: "Setup MongoDB schema validation", status: "inprogress", priority: "Medium" },
    { id: 4, title: "Configure production deployment", status: "todo", priority: "Low" },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newPriority, setNewPriority] = useState<string>("Medium");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        title: newTaskTitle.trim(),
        status: "todo",
        priority: newPriority,
      }
    ]);
    setNewTaskTitle("");
  };

  const moveTask = (id: number, newStatus: 'todo' | 'inprogress' | 'done') => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const columns = [
    { id: "todo" as const, label: "To Do", color: "text-slate-400", border: "border-slate-700" },
    { id: "inprogress" as const, label: "In Progress", color: "text-violet-400", border: "border-violet-500/40" },
    { id: "done" as const, label: "Completed", color: "text-emerald-400", border: "border-emerald-500/40" },
  ];

  return (
    <div className="bg-dark-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-violet-400">Interactive Kanban Board</span>
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-violet-400" /> Sprint Task Flow
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full">
          {tasks.filter(t => t.status === "done").length} of {tasks.length} Done
        </span>
      </div>

      <form onSubmit={addTask} className="mt-4 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
        />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
          className="bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" /> Add Task
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.id);
          return (
            <div key={col.id} className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/50 flex flex-col min-h-[220px]">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700/50">
                <span className={`text-xs font-bold ${col.color}`}>{col.label}</span>
                <span className="text-[10px] font-mono bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">
                  {colTasks.length}
                </span>
              </div>

              <div className="space-y-2 flex-1">
                {colTasks.length === 0 ? (
                  <div className="text-[11px] text-slate-500 text-center py-6">No tasks in this stage</div>
                ) : (
                  colTasks.map(task => (
                    <div 
                      key={task.id} 
                      className={`bg-slate-800/90 p-2.5 rounded-lg border ${col.border} shadow-sm transition-all hover:translate-y-[-2px]`}
                    >
                      <div className="text-xs font-medium text-slate-100">{task.title}</div>
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-700/40">
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                          task.priority === "High" ? "bg-red-500/15 text-red-400 border border-red-500/20" :
                          task.priority === "Medium" ? "bg-amber-500/15 text-amber-400 border border-amber-500/20" :
                          "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                        }`}>
                          {task.priority}
                        </span>

                        <div className="flex items-center gap-1">
                          {col.id !== "todo" && (
                            <button
                              onClick={() => moveTask(task.id, col.id === "done" ? "inprogress" : "todo")}
                              className="text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-700/50"
                              title="Move back"
                            >
                              ←
                            </button>
                          )}
                          {col.id !== "done" && (
                            <button
                              onClick={() => moveTask(task.id, col.id === "todo" ? "inprogress" : "done")}
                              className="text-[10px] text-violet-400 hover:text-violet-300 px-1.5 py-0.5 rounded bg-violet-950/60 border border-violet-500/30"
                              title="Move forward"
                            >
                              →
                            </button>
                          )}
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="text-slate-500 hover:text-rose-400 p-0.5 ml-1"
                            title="Delete"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface TransactionItem {
  id: number;
  title: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
}

export const FinanceDashboardLiveDemo: React.FC = () => {
  const [balance, setBalance] = useState<number>(24850);
  const [transactions, setTransactions] = useState<TransactionItem[]>([
    { id: 1, title: "Client Web App Retainer", category: "Income", amount: 3200, type: "income", date: "Today" },
    { id: 2, title: "Cloud Server Hosting (AWS)", category: "Tech", amount: -85, type: "expense", date: "Yesterday" },
    { id: 3, title: "Office Fiber Internet", category: "Utilities", amount: -45, type: "expense", date: "Oct 24" },
    { id: 4, title: "Mobile App Consultation", category: "Income", amount: 1200, type: "income", date: "Oct 22" },
  ]);

  const [newTitle, setNewTitle] = useState<string>("");
  const [newAmount, setNewAmount] = useState<string>("");
  const [newType, setNewType] = useState<'expense' | 'income'>("expense");

  const addTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(newAmount);
    if (!newTitle.trim() || isNaN(val) || val <= 0) return;

    const adjustedAmount = newType === "expense" ? -val : val;
    setBalance(prev => prev + adjustedAmount);
    setTransactions(prev => [
      {
        id: Date.now(),
        title: newTitle.trim(),
        category: newType === "income" ? "Client Work" : "General Expense",
        amount: adjustedAmount,
        type: newType,
        date: "Just Now",
      },
      ...prev,
    ]);

    setNewTitle("");
    setNewAmount("");
  };

  const totalIncome = transactions.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const totalExpense = Math.abs(transactions.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0));

  return (
    <div className="bg-dark-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Interactive Finance Engine</span>
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-400" /> Executive Financial Ledger
          </h4>
        </div>
        <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          MBA Analytics Mode
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
          <span className="text-[10px] uppercase font-mono text-slate-400">Net Reserve Balance</span>
          <div className="text-xl font-bold text-white mt-1">${balance.toLocaleString()}</div>
          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> Healthy Liquidity
          </span>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
          <span className="text-[10px] uppercase font-mono text-slate-400">Sample Inflows</span>
          <div className="text-xl font-bold text-emerald-400 mt-1">+${totalIncome.toLocaleString()}</div>
          <span className="text-[10px] text-slate-400 font-mono block mt-1">Active Client Contracts</span>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
          <span className="text-[10px] uppercase font-mono text-slate-400">Sample Outflows</span>
          <div className="text-xl font-bold text-rose-400 mt-1">-${totalExpense.toLocaleString()}</div>
          <span className="text-[10px] text-slate-400 font-mono block mt-1">Operating Overhead</span>
        </div>
      </div>

      <form onSubmit={addTransaction} className="mt-4 p-3 bg-slate-800/40 rounded-xl border border-slate-700/50 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Transaction label (e.g., Domain renewal)"
          className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
        />
        <input
          type="number"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
          placeholder="Amount ($)"
          className="w-full sm:w-28 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
        />
        <select
          value={newType}
          onChange={(e) => setNewType(e.target.value as 'expense' | 'income')}
          className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
        >
          <option value="expense">Expense (-)</option>
          <option value="income">Income (+)</option>
        </select>
        <button
          type="submit"
          className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" /> Log
        </button>
      </form>

      <div className="mt-4 space-y-2">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Recent Transactions</div>
        {transactions.map(item => (
          <div key={item.id} className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs ${
                item.type === "income" ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
              }`}>
                {item.type === "income" ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
              </div>
              <div>
                <div className="text-xs font-medium text-slate-200">{item.title}</div>
                <div className="text-[10px] text-slate-400 font-mono">{item.category} • {item.date}</div>
              </div>
            </div>
            <div className={`text-xs font-mono font-bold ${item.type === "income" ? "text-emerald-400" : "text-rose-400"}`}>
              {item.type === "income" ? "+" : ""}${Math.abs(item.amount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
