import React, { useState } from 'react'
import './from.css'

export default function FromPractice() {
  const [dataSign, setDataSign] = useState({
      email: "",
      password: "",
      conpass: "",
      isJoin: false
  })
  console.log(dataSign)
  function handleChange(event){
    
    setDataSign(prevData => ({
      ...prevData,
          [event.target.name]: event.target.type==="checkbox"?event.target.checked : event.target.value
    }))
  }
  function handleSubmit(event){
    const {password, conpass, isJoin} = dataSign
      event.preventDefault()
      password === conpass ? console.log("Sucsessfull Signup") : console.log("Password to not match")
      isJoin && console.log("Thanks for signing up for our football club!")
  }
  return (
    <div className='back'>
      <form onSubmit={handleSubmit}>
        <input 
          name="email"
          value={dataSign.email}
          type="text"
          onChange={handleChange}
          placeholder="email"                  
        /> 
        <input 
          name="password"
          value={dataSign.password}
          type="password"
          onChange={handleChange}
          placeholder="password"                  
        /> 
        <input 
          name="conpass"
          value={dataSign.conpass}
          type="password"
          onChange={handleChange}
          placeholder="confirm password"                  
        /> 
        
        <label htmlFor="checkb">
          <input 
            id="checkb"
            name="isJoin"
            value={dataSign.isJoin}
            type="checkbox"
            onChange={handleChange}                  
        />I want to join the football</label>
        <br />
        <button className='btn'>Sign in</button>
      </form>
    </div>
  )
}
