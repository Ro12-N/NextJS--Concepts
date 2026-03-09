import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white text-black'>
      
      <h1 className='text-4xl font-bold mb-4'>
        404 - Page Not Found
      </h1>

      <Image
        src="/notfound.svg"
        alt="Not Found Image"
        width={400}
        height={300}
      />
       
       <br></br>
       <br></br>

      <Link
        href="/"
        className="px-4 py-2 mt-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold"
      >
        Back To Home
      </Link>

    </div>
  )
}

export default NotFound