"use client";
import React, { useEffect, useState } from 'react'

function Clientpage() {
   const [count,setCount]=useState(0);
   const [data,setData]=useState({});
   console.log("Rendering Client Component and Hello i am from client component"); // this log will appear in the browser console, confirming that this component is rendered on the client.
   useEffect(()=>{
    async function fetchData(){
      const res=await fetch("https://api.github.com/users/ro12-n");
      const userdata=await res.json();
      setData(userdata);
    }
    fetchData();
   },[])

   const loc=window.location.origin;
  return (
    <>
    <div>ClientComponent Counter</div>
    <p>count: {count}</p>
    <button className='bg-white text-black' onClick={()=>setCount(count+1)}>➕➕Increment</button>
    <br></br>
   
    <p>{JSON.stringify(data)}</p>
    <br></br>
    <p>Current URL: {loc}</p>
    </>
  );
}

export default Clientpage