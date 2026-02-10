const Summary = ({ total }) => {
  return (
    <div className="bg-white/10 p-4 rounded-xl text-center mb-6">
      <h2 className="text-lg">Total Spent</h2>
      <p className="text-3xl font-bold mt-1">₹{total}</p>
    </div>
  );
};

export default Summary;
