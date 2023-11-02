import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React calculator
        </p>
      </header>
      <section className="inputs">
        <label>First number</label>
        <input value={firstNumber} onChange={e => setFirstNumber(Number(e.target.value))}></input>
        <label>Second number</label>
        <input value={secondNumber} onChange={e => setSecondNumber(Number(e.target.value))}></input>
      </section>
      <section className="buttons">
        <button onClick={() => setResult(firstNumber + secondNumber)}>+</button>
        <button onClick={() => setResult(firstNumber - secondNumber)}>-</button>
        <button onClick={() => setResult(firstNumber * secondNumber)}>X</button>
        <button onClick={() => setResult(firstNumber / secondNumber)}>/</button>
      </section>
      <section className="result">
        <label>Result</label>
        <input value={result} readOnly></input>
      </section>
    </>
  );
}

export default App;