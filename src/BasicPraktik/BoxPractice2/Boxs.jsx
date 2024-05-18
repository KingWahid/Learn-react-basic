import React, { useState } from 'react'
import './style.css'

export default function Boxs(props) {
    const [on, setOn] = useState(props.on)
    const styles = {
        backgroundColor: on ? "#222222" : "transparant"
    }
    function toggle(){
        setOn(prevOn => !prevOn)
    }
  return (
    <div style={styles} className='box' onClick={toggle}></div>
  )
}
