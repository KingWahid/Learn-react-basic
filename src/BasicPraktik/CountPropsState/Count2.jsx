import React from "react";
import './count.css'

export default function Count2(props) {
  return (
    <div className="counter-count">
        <h1>{props.number}</h1>
    </div>
  )
}
