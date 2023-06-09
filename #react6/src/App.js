import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Counter2 from "./Components/Counter2";

function App() {
  const [buttonName,setButtonName]=useState('누르라고 일마');
  const clickButton=()=>{
    setButtonName("뭘로 바꿀라고")
  }
  const clickButton2=()=>{
    setButtonName("누르라고 일마")
  }

  return (
    <>
    <h1>컴포넌트</h1>
    <Counter click='click1'/>
    <Counter/>
    <Counter>
    </Counter>

    <h2>컴포난투2</h2>
    <Counter2 click='눌렀다 그는 이것을'/>
    <Counter2 click={1}/>
    <Counter2 click={buttonName}/>
    <Counter2 click={`${buttonName}~`}/>
    <br/>
    <>{buttonName}</>
    <br/>
    <button onClick={clickButton}>누르라고 일마를 다른 글자로 바꾸기</button>
    <br/>
    <button onClick={clickButton2}>뭘로 바꿀라고를 다른 글자로 바꾸기</button>
    </>
  );
}

export default App;
