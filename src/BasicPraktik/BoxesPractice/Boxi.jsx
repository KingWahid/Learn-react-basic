import React, { useState } from 'react'

export default function Boxi(props) {
  const [isOn, setIsOn] = useState(props.on)
  
  const styles = {
    backgroundColor: isOn ? "#222222" : "transparant"
  }

  function toggleOn(){
    setIsOn(prevState => !prevState)
  }
  return (
    <div style={styles} className='box' onClick={toggleOn}></div>
  )
}
