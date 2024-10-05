import React, { useState } from "react";
import "./App.css"; 

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(""); // State to store the result

  const handleClick = (value) => {
    if (value === "=") {
      if (input.trim() === "") {
        setResult("Error"); // Set result to Error if input is empty
        return;
      }
      try {
        const calculatedResult = eval(input); // Evaluate the input expression
        setResult(calculatedResult.toString()); // Set result
      } catch (err) {
        setResult("Error"); // Set result to Error if evaluation fails
      }
    } else if (value === "C") {
      setInput(""); // Clear input field
      setResult(""); // Clear result
    } else {
      setInput((prev) => prev + value); // Append button value to input
    }
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      
      {/* Input field for the expression */}
      <input type="text" className="calculator-input" value={input} readOnly />

      {/* Result field below the input area */}
      <div className="calculator-result">
        {result !== "" && <p>Result: {result}</p>} {/* Show result if it's not empty */}
      </div>

      {/* Calculator buttons */}
      <div className="calculator-buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("C")}>C</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
    </div>
  );
};

export default App;
