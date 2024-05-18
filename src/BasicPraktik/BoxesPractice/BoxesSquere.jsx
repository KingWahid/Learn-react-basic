import React, { useState } from 'react'
import boxes from './boxes.js'
import './boxes.css'
import Boxi from './Boxi'
import Squere from '../BoxPractice2/Squere.jsx'

export default function BoxesSquere() {
    const [box, setBox] = useState(boxes)

    function toggle(id){
      // setBox(prevBox => {
      //   const newBox = []
      //   for (let i = 0; i < prevBox.length; i++){
      //     const currentBox = prevBox[i]
      //     if(currentBox.id === id) {
      //       const updateBox = {
      //         ...currentBox,
      //         on: !currentBox.on
      //       }
      //       newBox.push(updateBox)
      //     } else {
      //       newBox.push(currentBox)
      //     }
      //   }
      //   return newBox
      // })
      setBox(prevBox => {
        return prevBox.map((squere) => {
          return squere.id === id ? {...squere, on: !squere.on} : squere
        })
      })
    }

    //let style={backgroundColor: props.darkMode ? "white":"black"}
    const boxElement = box.map(boxs => (
          <Boxi 
              id={boxs.id} 
              key={boxs.id} 
              on={boxs.on} 
              toggle={toggle}
              // Good clever, remove id={boxs.id}. make it closure(have own id)
              // toggle={()=>toggle(boxs.id)}
              />
        ))
  return (
    <main>{boxElement}</main>
  )
}
