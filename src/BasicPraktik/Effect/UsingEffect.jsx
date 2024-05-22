import React, { useEffect, useState } from 'react'

export default function UsingEffect() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count , setCount] = useState(0)

    console.log("Compoennt")
    // without useEffect causing infinite loop,
    // react cant intrect with outside systme like api, local storeage
    // syncing 2 different internal state together
    // fetch("https://swapi.dev./api/people/1")
    // .then(res => res.json())
    // .then(data => setStarWarsData(data))

    useEffect(function (){
        console.log("Effect functtion run")
        fetch(`https://swapi.dev./api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    }, [count])
    
    return (
    <div>
        <h1>The count is {count}</h1>
        <button onClick={()=> setCount(prevCount => prevCount + 1)}>Get the next character</button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        
        
    </div>
  )
}
