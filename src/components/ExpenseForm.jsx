import { useState, useRef } from "react";

const categories = ["Food", "Travel", "Shopping", "Other"];

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const titleRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    onAddExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
    });

    setTitle("");
    setAmount("");
    setCategory("Food");
    titleRef.current.focus();
  };

  return (
    <form onSubmit={submitHandler} className="space-y-3 mb-6">
      <input
        ref={titleRef}
        type="text"
        placeholder="Expense title"
        className="w-full p-3 rounded-xl bg-transparent border border-white/30"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full p-3 rounded-xl bg-transparent border border-white/30"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        className="w-full p-3 rounded-xl bg-transparent border border-white/30"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat} className="text-black">
            {cat}
          </option>
        ))}
      </select>

      <button className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded-xl font-semibold">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
