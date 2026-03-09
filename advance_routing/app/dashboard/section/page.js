import Link from 'next/link'
import React from 'react'

function sectionpage() {
  return (
    <>
    <div>Section Page</div>
    <Link href="/settings">Go to Settings</Link><br></br>
    <Link href="/admin">Go to Admin</Link>
    </>
    
  )
}

export default sectionpage 