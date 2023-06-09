import React, { useState } from 'react'

const Counter2 = (cl) => {
  const [count, setCount]=useState(0);
  const increment=()=>{
    setCount(count + 500)
  }
  const clickString=cl.click || '클릭';
  return (
    <div>
      <>{clickString+'입니다.'}{count}</>
      <button onClick={increment}>눌러</button>
    </div>
  )
}

export default Counter2