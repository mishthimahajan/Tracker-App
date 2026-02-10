import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#ec4899", "#a1a1aa"];

const ExpenseChart = ({ expenses }) => {
  const data = Object.values(
    expenses.reduce((acc, e) => {
      acc[e.category] = acc[e.category] || { name: e.category, value: 0 };
      acc[e.category].value += e.amount;
      return acc;
    }, {})
  );

  if (data.length === 0) return null;

  return (
    <div className="flex justify-center mb-6">
      <PieChart width={280} height={220}>
        <Pie data={data} dataKey="value" outerRadius={80}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
