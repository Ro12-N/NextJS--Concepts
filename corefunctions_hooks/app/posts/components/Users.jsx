import RevalidateButton from "./RevalidateButton";

const getUserData = async () => {
  const response = await fetch(
    "https://68a80736bb882f2aa6dd2a10.mockapi.io/api/users",
    {
      next: { tags: ["users"] },
    }
  );

  if (!response.ok) {
    const text = await response.text();
    console.log("User API Error:", text);
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

const Users = async () => {
  let data = [];

  try {
    data = await getUserData();
  } catch (error) {
    console.error(error.message);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">Users</h1>
        <RevalidateButton />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length === 0 ? (
          <p>No users found</p>
        ) : (
          data.map((user) => (
            <div key={user.id} className="bg-white border p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-xs text-gray-500">ID: {user.id}</p>
                </div>

                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">
                    {user.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;