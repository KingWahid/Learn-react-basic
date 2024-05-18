import React, { useState } from 'react'

const StateArray = () => {
  const [thingsArray, setThingsArray] = useState(["Things 1", "Things 2"]);
  function addItem () {
    setThingsArray(prevState => {
      return [...prevState, `Things ${prevState.length + 1}`];
    })
  }
  const arrayElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div> 
        <button onClick={addItem}>Add item</button>
        {arrayElements}
    </div>
  )
}

export default StateArray