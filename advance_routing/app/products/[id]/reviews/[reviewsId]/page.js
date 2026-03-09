import React from 'react'
export default async function Page({ params }) {
  const { id, reviewsId } = await params;

  return (
    <div >Page: {id}, Review: {reviewsId}</div>
  );
}