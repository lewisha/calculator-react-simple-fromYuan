import "./styles.css";
import React from "react";
import { useState } from "react";
export default function App() {
  const [input, setInput] = useState(""); // initial state hook
  const buttoninput = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    [".", "0", "=", "/"]
  ]; // create array that stored all the button

  //this function handle input
  const handleClick = (e) => {
    if (e.target.value !== "=") {
      //if the button value is not "=", then we keep add the input like "12+34+34"
      setInput(input + e.target.value);
    } else {
      //if value is "=", then we use eval the input to return result
      let result = eval(input);
      setInput(result);
    }
  };
  return (
    <div className="calculator">
      <div className="title text-center">Calculator</div>
      <div className="calculateMain mt-3 pt-3 pb-3">
        <div className="block-example border border-success w-75 bg-light p-2">
          {input ? input : 0}
        </div>
        <button
          onClick={() => {
            setInput("");
          }}
        >
          RESET
        </button>
        {buttoninput.map((ele, index) => {
          return (
            <div>
              {ele.map((item) => {
                return (
                  <button
                    className="btn btn-info m-2 p-3"
                    value={item}
                    onClick={handleClick}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
