import React, { useState } from 'react'
import './form.css'
export default function Form() {
    const [dataform, setDataForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        comment: ""
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
    
        <form className='form'>
            <input 
                type="text"
                placeholder='First name'
                onChange={handleChange}
                name="firstname"
                value={dataform.firstname}
            />
            <input 
                type="text"
                placeholder='Last name'
                onChange={handleChange}
                name="lastname"
                value={dataform.lastname}
            />
            <input 
                type="text"
                placeholder='email'
                onChange={handleChange}
                name="email"
                value={dataform.email}
            />
            <input 
                type="text"
                placeholder='password'
                onChange={handleChange}
                name="password"
                value={dataform.password}
            />
            <textarea 
                value={dataform.comment}
                onChange={handleChange}
                name="comment"
                placeholder='put your comment here'   
            />
        </form>
    
    
  )
}
