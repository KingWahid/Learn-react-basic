import React, { useState } from 'react'
import './form.css'
export default function Form() {
    const [dataform, setDataForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        comment: "",
        isSingle: true,
        employment: "",
        favGirl: ""
    })
    console.log(dataform.favGirl)
    function handleChange(event){

        const {name, value, type, checked} = event.target
        setDataForm(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event){
        // prevent page refresh and html change
        event.preventDefault()
        console.log(dataform)
    }
   
  return (
    
        <form onSubmit={handleSubmit}>
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
            <input
                type='checkbox'
                id='check'
                name='isSingle'
                onChange={handleChange}
                value={dataform.isSingle}
            />
            <label htmlFor='check'>Are you have a girlfriend?</label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    name="employment"
                    type="radio"
                    id="unemployment"
                    value="unemployment"
                    onChange={handleChange}
                    checked={dataform.employment === "unemployment"}
                />
                <label htmlFor="unemployment">Unemployment</label>
                <br />
        
                
                <input 
                    name="employment"
                    type="radio"
                    id="parttime"
                    value="parttime"
                    onChange={handleChange}
                    checked={dataform.employment === "parttime"}
                />
                <label htmlFor="parttime">Part-time</label>
                <br />

               
                <input 
                    name="employment"
                    type="radio"
                    id="fulltime"
                    value="fulltime"
                    onChange={handleChange}
                    checked={dataform.employment === "fulltime"}
                />
           
                <label htmlFor="fulltime">Full time</label>
                <br />
            </fieldset>
                <br />
                <br />

            <label htmlFor="favGirl">What your favorite girl?</label>
            <br/>
            <select
                id="favGirl"
                value={dataform.favGirl}
                name="favGirl"
                onChange={handleChange}
            >
                <option value="">-- Choose --</option>
                <option value="asian">Asian</option>
                <option value="american">American</option>
                <option value="african">African</option>
                <option value="latin">Latin</option>
                <option value="arabian">Arabian</option>
            </select>
            <br/>
            <button>Submit</button>
        </form>
    
    
  )
}
