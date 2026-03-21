import Image from "next/image";

export default async function Home() {
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
