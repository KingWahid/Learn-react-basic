import React, { useState } from 'react'

const StateObject = () => {
    const [contact, setContact] = useState({
        firstName: "Wahidan",
        lastName: "Nashrullah",
        phone: "0856691701171",
        email: "wahidan765@gmail.com",
        isAdd: false
    })

    let addIcon = contact.isAdd ? "green.png" : "white.png"
    function toggleAdd (){
        setContact(prevContact => ({
            ...prevContact,
            isAdd: !prevContact.isAdd
        }))
    }
  return (
    <main>
        <article className="card">
            <img src="profile_image.png" alt="" className="card-img" width={150}/>
            <div className="card-favorite">
                <img src={`add_icon_${addIcon}`} alt="" onClick={toggleAdd}/>
                <h2 className="card-name">{contact.firstName} {contact.lastName}</h2>
                <p className="card-contact">{contact.phone}</p>
                <p className="card-contact">{contact.email}</p>
            </div>
        </article>
    </main>
  )
}

export default StateObject