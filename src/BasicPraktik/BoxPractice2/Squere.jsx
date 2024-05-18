import React, { useState } from 'react'
import boxes from './boxes'
import Boxs from './Boxs'



export default function Squere() {
    const [squeres, setSqueres] = useState(boxes)
    const squereElements = squeres.map(squere => (
        <Boxs key={squere.id} on={squere.on}/>
    ))
    function toggle(id){
        
    }
  return (
    <main>
        {squereElements}
    </main>
  )
}
