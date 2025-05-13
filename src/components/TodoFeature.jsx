export default function TodoFeature({ setTodos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target[0].value.trim();
    const date = e.target[1].value;
    
    if (!todo || !date) {
      alert("Please fill all fields");
      return;
    }

    setTodos((currValue) => [...currValue, { todo, date }]);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 p-4"
    >
      <input
        type="text"
        placeholder="Enter Todo"
        className="px-4 py-2 bg-amber-100 text-black border-2 rounded-2xl w-full sm:w-64 md:w-80"
      />
      <input
        type="date"
        className="px-4 py-2 bg-amber-100 text-black border-2 rounded-2xl w-full sm:w-64 md:w-80"
      />
      <button
        type="submit"
        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-xl transition duration-300 w-full sm:w-auto"
      >
        Add Todo
      </button>
    </form>
  );
}
