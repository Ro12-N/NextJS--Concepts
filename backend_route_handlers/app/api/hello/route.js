import { NextResponse } from "next/server";
export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 25,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 30,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    age: 28,
  },
];

export  async function GET(request) {
//   return (
//     NextResponse.json({
//       message: "Hello from the API route!",
//     })
    
//   )
   try {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");
    const age = searchParams.get("age");
    console.log("Received query parameters:", { name, age });
    let filteredUsers = users;
    if (name) {
      filteredUsers = filteredUsers.filter((u) =>
        u.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (age) {
        const ageNum = parseInt(age);
        if (!isNaN(ageNum)) {
          filteredUsers = filteredUsers.filter((u) => u.age === ageNum);
        }
        }

        

    return NextResponse.json({
        status:"success",
        users:filteredUsers,
        cnt: filteredUsers.length
    })
   } catch (error) {
    return NextResponse.json({
        status:"error",
        error:"Failed to fetch user data"},
         {status:500});
   }
}