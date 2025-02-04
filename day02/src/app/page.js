import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-center bg-red-600" >Home</h1>

      <Link href="/productlist"> Product List Page</Link>
      <br />
      <br />
      <Link href="/customcss"> custom css page</Link>
      <br />
      <br />
      <Link href="/imgcomponent"> IMG Component page</Link>
      <br />
      <br />
      <Link href="/fontoptimization"> Font Optimization page</Link>
      <br />
      <br />
      <Link href="/dyanamicmetadata"> Dyanamic-metadata page</Link>
      <br />
      <br />
      <Link href="/location"> Location page</Link>
    </div>
  );
}
