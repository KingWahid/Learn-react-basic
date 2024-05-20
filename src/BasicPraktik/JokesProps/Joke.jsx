import React, { useState } from 'react'

export default function Joke(props) {
  const  [isShown, setIsShown] = useState(false);
  function toggleShown(){
    console.log(isShown)
    setIsShown(prevShown => !prevShown)
  }
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>Show Punchline</button>
    </div>
  )
}
