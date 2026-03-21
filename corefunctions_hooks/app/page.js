import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {

  const isLogged = false;

  if(!isLogged){
    return redirect('/login')
  }
  const response = await fetch("http://localhost:3000/api/timer",{
    cache:"no-store"
  });
  const data = await response.json();
  return (
   <div>
    <h1>Next Response(default)</h1>
    <p>Timestamp: {data.readable}</p>
    <p>Request ID: {data.requestId}</p>
   </div>
  );
}
