import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'

export default function Parent() {
    const [user, setUser] = useState("Wahidan")
  return (
    <div>
        <Header name={user}/>
        <Body name={user}/>
    </div>
  )
}
