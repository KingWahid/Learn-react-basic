import React, { useState } from 'react'

export default function Form() {
    const [dataform, setDataForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    console.log(dataform)
    function handleChange(event){
        setDataForm(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
   
  return (
    
        <form>
            <input 
                type="text"
                placeholder='First name'
                onChange={handleChange}
                name="firstname"
            />
            <input 
                type="text"
                placeholder='Last name'
                onChange={handleChange}
                name="lastname"
            />
            <input 
                type="text"
                placeholder='email'
                onChange={handleChange}
                name="email"
            />
            <input 
                type="text"
                placeholder='password'
                onChange={handleChange}
                name="password"
            />
        </form>
    
    
  )
}
