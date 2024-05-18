import React, { useState } from 'react'
import Count2 from './Count2'

const CounterPropsState = () => {
  const [count, setCount] = useState(0)
  function plus() {
    setCount(prevCount => prevCount + 1)
  }
  function minus() {
    setCount (prevCount => prevCount - 1)
  }
  
  return (
    <div>
      <button onClick={plus}>+</button>
      <Count2 number={count}/>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default CounterPropsState