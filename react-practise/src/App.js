import logo from "./logo.svg";
import "./App.css";
import StateDemo from "./components/StateDemo";
import { useState } from "react";

function App() {
  const [isFlag, setFlag] = useState(true);
  let val;

  if (isFlag) {
    val = "Nadeem";
  } else {
    val = "Asgar";
  }

  const changeVal = () => {
    setFlag(() => {
      return !isFlag;
    });
  };

  return (
    <div className="App">
      <StateDemo val={val} />
      <button onClick={changeVal}>Click</button>
    </div>
  );
}

export default App;
