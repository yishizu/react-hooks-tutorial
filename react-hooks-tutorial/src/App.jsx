import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShinCodeInfo from "./main";

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([0]);
  const shinCodeInfo = useContext(ShinCodeInfo);

  useEffect(()=>{

    console.log("Hello Hooks!");
  },[count]);
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
      <hr/>
      <h1>Use Context</h1>
      <p>{shinCodeInfo.name}</p>
      <p>{shinCodeInfo.age}</p>


    </div>
  );
}

export default App;
