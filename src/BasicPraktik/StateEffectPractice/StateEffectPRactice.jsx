import React, { useState } from 'react'
import WindowTracker from './WindowTracker'

export default function StateEffectPRactice() {
    const [show, setShow] = useState(true)
    function toggleShow (){
        setShow(prevShow => !prevShow)
    }
  return (
    <div className='container'>
        <button onClick={toggleShow}>
            Toggle WindowTracker
        </button>
        {show && <WindowTracker />}
    </div>
  )
}
