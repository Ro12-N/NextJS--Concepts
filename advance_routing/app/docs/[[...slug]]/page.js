import React from 'react'
export default async function Page({ params }) {
  const { slug } = await params;

  return (
    <>
    <h1>Documentation</h1>
    <div>Slug: {slug.join('/')}</div>
     </>
  );
}