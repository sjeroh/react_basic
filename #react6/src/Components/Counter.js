import React, { useState } from 'react'

const Counter = (p) => {
  const [count, setCount]=useState(25);
  const incr=()=>{
    setCount(count+1)
  }
  return (
    <div>
      <>{count}</>
      <>{p.click}</>
      <button onClick={incr}>크릭해</button>
    </div>
  )
}

export default Counter