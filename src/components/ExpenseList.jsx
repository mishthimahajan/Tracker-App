const colors = {
  Food: "bg-green-500/20 text-green-300",
  Travel: "bg-blue-500/20 text-blue-300",
  Shopping: "bg-pink-500/20 text-pink-300",
  Other: "bg-gray-500/20 text-gray-300",
};

const ExpenseList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p className="text-center text-white/60">No expenses added</p>;
  }

  return (
    <ul className="space-y-3">
      {expenses.map((exp) => (
        <li
          key={exp.id}
          className="flex justify-between items-center bg-white/10 p-3 rounded-xl"
        >
          <div>
            <p className="font-semibold">{exp.title}</p>
            <span className={`text-xs px-3 py-1 rounded-full ${colors[exp.category]}`}>
              {exp.category}
            </span>
          </div>
          <p className="font-bold">₹{exp.amount}</p>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
