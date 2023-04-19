import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([0]);
  const CountClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const CountReset = () => {
    setCount(0);
    console.log(count);
  };
  const AddArray = (currentNumbers) => {
    CountClick();
    setNumbers([...currentNumbers, count+1]);
    console.log(numbers);
  };
  const ArrayReset = () => {
    CountReset();
    setNumbers([0]);
    console.log(numbers);
  };
  return (
    <div className="App">
      <h1>Use State</h1>
      <button onClick={CountClick}>+</button>
      <p>{count}</p>
      <button onClick={CountReset}>reset</button>

      <h1>Use State Array</h1>
      <button onClick={() =>AddArray(numbers)}>+</button>
      <p>{numbers}</p>
      <button onClick={() =>ArrayReset()}>reset</button>
    </div>
  );
}

export default App;
