import React from 'react'

export default function Add(props) {
    let addIcon = props.isFilled ? "green.png" : "white.png"
  return (
    <div>
        <img src={`add_icon_${addIcon}`} alt="" onClick={props.handleClick}/>
    </div>
  )
}
