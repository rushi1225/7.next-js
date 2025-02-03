import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-center bg-red-600" >Home</h1>

      <Link href="/productlist"> Product List Page</Link>
    </div>
  );
}
