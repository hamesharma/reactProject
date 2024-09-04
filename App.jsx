import { Button } from "./components/Button"
import { useState } from "react";

function App() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    try {
      // Evaluate the expression safely
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };
  const handleClear = () => {
    setInput(0);
    setResult(0);
  };
 



  return(<>
    <h1>Basic Arithmetic</h1>
    <div>
    <p>Type here: </p>
    <input type= "text"
    placeholder= "do the calculation here:"
    onChange={handleInput}></input>
    </div>
    <Button title="Calculate" onClick={handleClick}></Button>
    <h3>Result: {result}</h3>
    <button onClick={handleClear}>Clear</button>
  </>)
}

export default App
