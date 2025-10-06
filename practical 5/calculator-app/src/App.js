import { useState } from "react";

function App() 
{
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{result !== "" ? `(${result})` : ""}</div>
        <div className="input">{input}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={handleDelete}>DEL</button>
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
        ))}
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App; 