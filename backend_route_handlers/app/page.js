import Image from "next/image";

export default async function Home() {
  const res=await fetch("http://localhost:3000/api/hello");
  const data=await res.json();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}
