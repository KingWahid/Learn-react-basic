import React, { useState } from 'react'
import './conren.css'

export default function Conren() {
    const [messages, setMessages] = useState(["a", "b"])
  return (
    <div>
        {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>}
    </div>
  )
}
