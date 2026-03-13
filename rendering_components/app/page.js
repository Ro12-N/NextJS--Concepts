import Image from "next/image";

export default  async function Home() {
  // This log will appear in the server console, confirming that this component is rendered on the server.
  console.log("Rendering Home Page and Hello i am from server component");
  const res=await fetch("https://api.github.com/users/ro12-n");
  const data=await res.json();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <p>
      {JSON.stringify(data)}
     </p>
    </div>
  );
}
