// events

// "use client";
// export default function Home() {
//   const apple = () => {
//     alert("fruits");
//   };

//   return (
//     <>
//       <div className="items-center justify-center text-center">
//         <h1>Hello Rushi</h1>
//         <h1>Events function & state </h1>

//         <button className="btn border-2 p-2" onClick={() => alert("hello rushi")}>Click me</button>
//         <button className="btn border-2 p-2" onClick={apple}>Click me</button>
//       </div>
//     </>
//   );
// }




//state
"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('Rushi')    //default name rushi

  const changeName = () => {
    setName("Bhingare")
  }


  //component me component
  const Innercomponent = () => {
    return (<h1>inner components add</h1>)
  }


  return (
    <>
      <div className="items-center justify-center text-center">
        <h1>Hello Rushi</h1>
        <h1>Events function & state </h1>
        <h1>using state hello {name} </h1>
        <button className="btn border-2 p-2" onClick={changeName}>Click me</button>
          
      </div>
          {/* inner components  */}
      <Innercomponent></Innercomponent>
    </>
  );
}