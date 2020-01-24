import React from 'react'

    const contacts = ({ contacts}) => {
        return (
            <div>
                <center><h1>List of Contacts</h1></center>
                {contacts.map((contact)=>(
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">{contact.name}</h4>
                            <h6 class="card-subtitle">{contact.email}</h6>
                            <p class="card-text">{contact.company.catchPhrase}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    };

export default contacts
