import TodoFeature from "./TodoFeature";

export default function TodoContainer({ todos, setTodos }) {

  const removeTodo = (index) => {
    setTodos((currValue) => currValue.filter((_, i) => i !== index));
  };

  return (
    <div className="container max-w-screen-md mx-auto my-6 px-4 text-center h-[80vh] bg-slate-200 p-4 rounded-lg shadow-md flex flex-col">
      <TodoFeature todos={todos} setTodos={setTodos} />

      <h1 className="text-2xl font-semibold my-4">
        {todos.length !== 0 ? "Your Todos" : "No Todos Yet"}
      </h1>

      <div className="overflow-y-auto h-full space-y-4 px-2">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-slate-300 p-4 rounded-lg shadow-md flex justify-between items-center gap-4 text-left"
          >
            <div className="flex flex-col">
              <h2 className="font-bold text-lg">
                {index + 1}. {todo.todo}
              </h2>
              <p className="text-sm text-gray-700">{todo.date}</p>
            </div>
            <button
              onClick={() => removeTodo(index)}
              className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg transition duration-200"
              title="Remove Todo"
              aria-label={`Remove todo ${index + 1}`}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
