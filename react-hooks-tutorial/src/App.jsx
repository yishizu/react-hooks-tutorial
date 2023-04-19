import { useContext, useEffect, useState, useRef, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShinCodeInfo from "./main";

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([0]);
  const shinCodeInfo = useContext(ShinCodeInfo);
  const ref = useRef();

  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square = useMemo(()=>{
    let i=0;
    while(i<1000000000){
      i++;
    }
    return count02* count02;
  },[count02]);

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
  const handleRef = () =>{
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  }
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
      <hr/>
      <h1>useRef</h1>
      <input type="text" ref={ref}></input>
      <button onClick={handleRef}></button>
      <hr/>
      <h1>useMemo</h1>
      <div>{count01}</div>
      <div>{count02}</div>
      <div>{square}</div>
      <button onClick={()=> setCount01(count01+1)}>+</button>
      <button onClick={()=> setCount02(count02+1)}>+</button>


    </div>
  );
}

export default App;
