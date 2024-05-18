import React, { useState } from 'react'

const Question = () => {
    const [isGoingOut, setIsGoingOut] = useState(true)
    function changeMind(){
        setIsGoingOut(prevState => !prevState)
    }
  return (
    <div>
        <h1>is mr jokowi our sevent president?</h1>
        <div onClick={changeMind}>
            <h1 style={{cursor: 'pointer'}}>{isGoingOut ? "yes" : "no"}</h1>
        </div>
    </div>
  )
}

export default Question