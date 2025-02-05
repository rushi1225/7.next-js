import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-green-600 text-center">Home Page </h1>
      <br /><br />

      <Link href="/users">Users Page</Link>
    </>

  );
}
