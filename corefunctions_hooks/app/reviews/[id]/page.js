import { notFound } from 'next/navigation';
import React from 'react'

async function Review({ params }) {
  const { id } =await params;
   if(parseInt(id) > 10){
       return notFound();
    }
  return (
    <div>Review : {id}</div>
  );
}

export default Review;