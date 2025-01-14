import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import Heading from "./components/Heading";
import "./App.css";

function App() {
  const [currentVal, setCurrentVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCurrentVal(" ");
    } else if (buttonText === "=") {
      let solve = eval(currentVal);
      setCurrentVal(solve);
    } else {
      let newVal = currentVal + buttonText;
      setCurrentVal(newVal);
    }
  };

  // bg colour
  const [color, setcolor] = useState("");

  // let newVal = [...currentVal];
  return (
    <div className="App" style={{ backgroundColor: `${color}` }}>
      <Heading></Heading>
      <div className={styles.calculator}>
        <Input displayValue={currentVal}></Input>
        <Buttons onButtonClick={onButtonClick}></Buttons>
      </div>

      {/* changing bg colour */}

      <select
        className={styles.colorButton}
        onChange={(e) => setcolor(e.target.value)}
      >
        <option value="#edddd5">select bg colour</option>
        <option value="#Edd382">YELLOWISH</option>
        <option value="#FFD3E8">LIGHT PINK</option>
        <option value="#C5FFFD">LIGHT BLUE</option>
        <option value="#99E1D9">BLUE</option>
      </select>
    </div>
  );
}

export default App;
