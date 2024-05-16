import React, { useState } from 'react'

const Question = () => {
    const [isGoingOut, setIsGoingOut] = useState(true)
    function changeMind(){
        setIsGoingOut(prevState => !prevState)
    }
  return (
    <div>
        <h1>Do i feel like going out tonight</h1>
        <div onClick={changeMind}>
            <h1>{isGoingOut ? "yes" : "no"}</h1>
        </div>
    </div>
  )
}

export default Question