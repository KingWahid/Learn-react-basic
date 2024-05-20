import React, { useState } from 'react'
import './conren.css'

export default function Conren() {
    const [messages, setMessages] = useState(["a", "b"])
  return (
    <div>
        {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>}
        {messages.length === 0 && <h1>You're all caught up!</h1>}

        {messages.length > 0 && <h1>You have {messages.length} unread</h1>}

        {<h1>{messages.length === 0 ? "You're all caught up!":`You have ${messages.length} unread`}</h1>}

        {/* Another way*/}
        {
            messages.length === 0 ? 
                <h1>You're all caught up!</h1> : 
                <h1>You have {messages.length} unread {messages.length > 1 ? "messages":"message"}</h1>
        }

        {/* What is "conditional rendering"?
        When i want to only somtimes display something on the page base on a condition of some sort 
        
        when would you use &&?
        When i want to either display something or not display it

        when would you use a ternay?
        when i need to decide wich thing among 2 options to display 

        what if nedd to decide between > 2 options on what to display?
        not recommeded using nested ternary, instead use and if else contioninal or a switch statement
        */}
    </div>
  )
}
