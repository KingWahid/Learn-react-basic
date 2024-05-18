import React from 'react'
import Question from './BasicPraktik/Question'
import Counter from './BasicPraktik/Counter'
import StateArray from './BasicPraktik/StateArray'
import StateObject from './BasicPraktik/StateObject'
import CounterPropsState from './BasicPraktik/CountPropsState/CounterPropsState'
import StateObjectProps from './BasicPraktik/StateObjectProps/StateObjectProps'

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
        <hr />
        <CounterPropsState />
        <hr />
        <StateObjectProps />
    </div>
  )
}

export default App