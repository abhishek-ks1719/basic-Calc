import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [number1, setNumbers1] = useState();
  const [number2, setNumbers2] = useState();
  const [result, setResult] = useState();
  const [error,setError] = useState();
  const checkResult = (actionType,num1,num2) =>{
    console.log(result);
    if(num1!==undefined && num2!==undefined ){
      setError(false)
      switch(actionType){
        case"add":
        setResult(num1+num2);
        break
        case"sub":
        setResult(num1-num2);
        break;
        case"div":
        setResult(num1/num2);
        break;
        case"multi":
        setResult(num1*num2);
        break;
        default:
          return;
      }
    }else{
      setError(true);
    }
  }
  return (
    <div className="App">
      <div className="inputFields">
      <Input type = 'number' placeholder="Number 1" onChange={(event)=>setNumbers1(parseInt(event.target.value),10)}/>
      <Input type = 'number' placeholder="Number 2" onChange={(event)=>setNumbers2(parseInt(event.target.value),10)}/>
      </div>
      <div className="buttons">
      <Button action = "+" onClick={()=>checkResult("add",number1,number2)}/>
      <Button action = "-" onClick={()=>checkResult("sub",number1,number2)}/>
      <Button action = "/" onClick={()=>checkResult("div",number1,number2)}/>
      <Button action = "*" onClick={()=>checkResult("multi",number1,number2)}/>
      </div>
      <div className="display">
      <div className="result">{(result!==undefined && !error)?`Result is: ${result}`:null}</div>
      <div className="success">{(result!==undefined && !error)?`Success`:null}</div>
      <div className="error">{(error === true)?`Error: Inputs cannot be empty`:null}</div>
    </div>
    </div>
  );
}

export default App;
