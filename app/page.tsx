import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center  bg-blue-100 w-full">
      <h1 className="text-4xl  mb-14">Welcome to SmartDash</h1>
      <Link href="/dashboard/overview" className="text-blue-700 underline">Open Dashboard</Link>
    </div>

  )
}
