import React, { useState } from 'react'

const App = () => {
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
      <h1>{count}</h1>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default App