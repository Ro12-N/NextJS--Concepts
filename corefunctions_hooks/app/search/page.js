"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const category = searchParams.get("category");
  const page = searchParams.get("page");
  const allParams = Array.from(searchParams.entries());
  
  console.log("All Search Params:", allParams);
  return (
    <div>
      <h1>Search Page</h1>
      <p>Query: {query}</p>
      <p>Category: {category}</p>
      <p>Page: {page}</p>
    </div>
  )
}

export default SearchPage