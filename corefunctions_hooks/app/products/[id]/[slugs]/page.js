"use client"
import React, { use } from 'react'
import { useParams } from 'next/navigation';

function ProductsIdSlugPage() {
    const params = useParams();
    console.log(params);
  return (
    <div> ProductsIdSlugPage
        <h1>Product ID: {params.id}</h1>
        <h1>Product Slug: {params.slugs}</h1>
    </div>
  )
}

export default ProductsIdSlugPage