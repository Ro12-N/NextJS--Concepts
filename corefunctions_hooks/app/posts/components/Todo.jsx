import RevalidateButton from "./RevalidateButton";

const getTodoData = async () => {
  const response = await fetch(
    "https://68a80736bb882f2aa6dd2a10.mockapi.io/api/users/todos",
    {
      next: { tags: ["todos"] },
    }
  );

  if (!response.ok) {
    const text = await response.text();
    console.log("Todo API Error:", text);
    throw new Error("Failed to fetch todos");
  }

  return response.json();
};

const Todos = async () => {
  let data = [];

  try {
    data = await getTodoData();
  } catch (error) {
    console.error(error.message);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">Todos</h1>
        <RevalidateButton />
      </div>

      <div className="grid gap-4">
        {data.length === 0 ? (
          <p>No todos found</p>
        ) : (
          data.map((todo) => (
            <div key={todo.id} className="bg-white border p-4 rounded-lg shadow">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{todo.title}</h3>

                  {todo.task && (
                    <p className="text-sm text-gray-600">{todo.task}</p>
                  )}

                  {todo.username && (
                    <span className="text-xs text-blue-600">
                      @{todo.username}
                    </span>
                  )}
                </div>

                <div className="text-right">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      todo.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {todo.completed ? "Done" : "Pending"}
                  </span>

                  <p className="text-xs text-gray-500 mt-1">#{todo.id}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todos;