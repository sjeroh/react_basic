import React from 'react'

const Body = (props) => {
  console.log(props)
  return (
    <div>{props.name}의 심심풀이입니다. {props.location}로 쏩니다.</div>
  )
}

export default Body