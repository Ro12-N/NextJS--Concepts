export default function dashboardLayout({ feed, stats}) {
  return (
    <div style={{display:"flex",gap:"20px"}}>
      <h1>Dashboard Layout</h1>
       <h2 style={{flex:1}}>Feed: {feed}</h2>
       <h2 style={{flex:2}}>Stats: {stats}</h2>
    </div>
  )
}