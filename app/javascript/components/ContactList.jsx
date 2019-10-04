import React from "react"

import ContactItem from "./ContactItem"

class ContactList extends React.Component {
  static defaultProps = {
    contacts: []
  }

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
          <ContactItem contact={contact} removeContact={this.props.removeContact} />
        </div>
      )
    })

    return(
      <div>
        <h2>Stored contacts</h2>
        {contacts}
      </div>
    )
  }
}

export default ContactList
