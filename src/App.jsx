import React from 'react'
import Question from './BasicPraktik/Question'
import Counter from './BasicPraktik/Counter'
import StateArray from './BasicPraktik/StateArray'
import StateObject from './BasicPraktik/StateObject'

const App = () => {
  return (
    <div>
        <Counter/>
        <hr/>
        <Question/>
        <hr/>
        <StateArray />
        <hr/>
        <StateObject/>
    </div>
  )
}

export default App