"use client";
export default function Home() {
  const apple = () => {
    alert("fruits");
  };

  return (
    <>
      <div className="items-center justify-center text-center">
        <h1>Hello Rushi</h1>
        <h1>Events function & state </h1>

        <button className="btn border-2 p-2" onClick={() => alert("hello rushi")}>Click me</button>
        <button className="btn border-2 p-2" onClick={apple}>Click me</button>
      </div>
    </>
  );
}
