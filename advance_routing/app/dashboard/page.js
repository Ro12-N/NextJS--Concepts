import React from "react";
import Link from "next/link";

function DashboardPage() {
  return (
    <>
      <h1>DashboardPage</h1>
      <Link href="/dashboard/reports">Go to Reports</Link><br></br>
      <Link href="/profile">Go to Profile</Link>
    </>
  );
}

export default DashboardPage;