import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Welcome to SmartDash</h1>
      <Link href="/dashboard/overview">Open Dashboard</Link>
    </div>

  )
}
