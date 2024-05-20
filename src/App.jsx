import React from 'react'
import Question from './BasicPraktik/Question'
import Counter from './BasicPraktik/Counter'
import StateArray from './BasicPraktik/StateArray'
import StateObject from './BasicPraktik/StateObject'
import CounterPropsState from './BasicPraktik/CountPropsState/CounterPropsState'
import StateObjectProps from './BasicPraktik/StateObjectProps/StateObjectProps'
import Parent from './BasicPraktik/PassingDataAround/Parent'
import Squere from './BasicPraktik/BoxPractice2/Squere'
import Jokes from './BasicPraktik/JokesProps/Jokes'
import Conren from './BasicPraktik/ConditionalRendering/Conren'

const App = () => {
  return (
    <div>
        {/* <Counter/>
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
        <hr/>
        <Parent/>
        <hr/>
        <Squere /> */}
        <hr/>
        <Jokes />
        <hr/>
        <Conren/>
    </div>
  )
}

export default App