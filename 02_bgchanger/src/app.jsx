import { useState } from "react";

export function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200 relative"
       style={{ backgroundColor: color }}>
        <div
          className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
        >
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")} >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")} >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")} >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "Yellow" }}
              onClick={() => setColor("Yellow")} >
             Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")} >
             Orange
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")} >
              Black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")} >
             Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;