import './App.css';
import { useState } from 'react';


function App() {
  // const [state값, 함수(state값을 바꿀 함수)]=useState(state값의 초기값을 적어야한다.)
  const [number, setNumber]=useState(1)
  // 함수 이름은 통상적으로 state이름 앞에 set을 넣어서 setNumber와 같이 만든다.
  // state 값이 바뀌면 component(여기서는 app.js를 말함.)는 다시 렌더링이 일어난다.

  // let number=1;
  const increate=()=>{
    setNumber(number +2);
  };
  console.log(number);
  
  return (
    <>
    <div>{number}</div>
    <button onClick={increate}>클릭</button>
    </>
  );
}

export default App;
