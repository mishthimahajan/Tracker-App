import { useMemo, useCallback } from "react";
import { useState, useEffect } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import Summary from "./components/Summary";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [dark, setDark] = useState(true);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = useCallback((expense) => {
    setExpenses((prev) => [expense, ...prev]);
  }, []);

  const total = useMemo(() => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  return (
  <div className={dark ? "dark" : ""}>
    <div className="w-screen h-screen bg-linear-to-br from-slate-900 via-indigo-900 to-purple-900 text-white flex justify-center items-center px-4">

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="absolute top-5 right-5 bg-white/20 px-4 py-1 rounded-lg"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* Card */}
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20">
        <h1 className="text-4xl font-bold text-center mb-6">
          Expense Tracker
        </h1>

        <ExpenseForm onAddExpense={addExpense} />
        <Summary total={total} />
        <ExpenseChart expenses={expenses} />
        <ExpenseList expenses={expenses} />

        {/* Clear All Button – inside card */}
        {expenses.length > 0 && (
          <button
            onClick={() => {
              setExpenses([]);
              localStorage.removeItem("expenses");
            }}
            className="w-full mt-4 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
          >
            Clear All Expenses
          </button>
        )}
      </div>
    </div>
  </div>
);
}

export default App;
