import React, { useState } from 'react'
import boxes from './boxes.js'
import './boxes.css'
import Boxi from './Boxi'

export default function BoxesSquere() {
    const [box, setBox] = useState(boxes)
    //let style={backgroundColor: props.darkMode ? "white":"black"}
    const boxElement = box.map(boxs => (
          <Boxi key={boxs.id} on={boxs.on}/>
        ))
  return (
    <main>{boxElement}</main>
  )
}
