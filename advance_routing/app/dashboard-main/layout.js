import React from 'react'
import Link from 'next/link'

// feed,stats
export default function dashboardLayout({tab1,tab2}) { 
  return (
    // <div style={{display:"flex",gap:"20px"}}>
    //   <h1>Dashboard Layout</h1>
    //    <h2 style={{flex:1}}>Feed: {feed}</h2>
    //    <h2 style={{flex:2}}>Stats: {stats}</h2>
    // </div>

    <div>
        <nav style={{marginBottom:"10px"}}>
            <Link href={"/dashboard-main/tab1"}>Tab 1</Link> | {" "}
            <Link href={"/dashboard-main/tab2"}>Tab 2</Link>
        </nav>

        <div>
            {tab1 }
            {tab2}
        </div>

      </div>
  )
}