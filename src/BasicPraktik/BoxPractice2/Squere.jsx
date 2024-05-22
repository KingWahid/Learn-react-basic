import React, { useState } from 'react'
import boxes from './boxes'
import Boxs from './Boxs'



export default function Squere() {
    const [squares, setSquares] = useState(boxes)
    
    function toggle(id) {
      setSquares(prevSquares => {
          return prevSquares.map((square) => {
              return square.id === id ? {...square, on: !square.on} : square
          })
      })
  }
  const squareElements = squares.map(square => (
    <Boxs 
        key={square.id} 
        on={square.on} 
        toggle={() => toggle(square.id)}
    />
))
  return (
    <main>
        {squareElements}
    </main>
  )
}
