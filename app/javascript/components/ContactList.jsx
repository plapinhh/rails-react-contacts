import React from "react"
class ContactList extends React.Component {
  render(){

    if (!this.props.contacts.length)
      return(
        <div>
          No contacts
        </div>
      )
    
    var contacts = this.props.contacts.map((contact) => {
      return(
        <div key={contact.id}>
          <dt>{contact.first_name} {contact.last_name}</dt>
          <dd>Email: {contact.email}</dd>
          <dd>Phone: {contact.phone}</dd>
        </div>
      )
    })

    return(
      <div>
        {contacts}
      </div>
    )
  }
}
export default ContactList
