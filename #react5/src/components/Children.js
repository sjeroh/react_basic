import React from 'react'

const Children = ({children}) => {
  console.log(children)
  return (
    <>
    <div className='red'>{children}Children</div>
    <div style={{color:'blue'}}>인라인스타일</div>
    </>
  )
}

export default Children