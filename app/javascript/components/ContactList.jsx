import React from "react"

import ContactItem from "./ContactItem"

class ContactList extends React.Component {
  static defaultProps = {
    contacts: []
  }

  render(){
    const contacts = this.props.contacts.map((contact) => {
      return(
        <ContactItem contact={contact} key={contact.id} removeContact={this.props.removeContact} />
      )
    })

    return(
      <div>
        <h2>Stored contacts</h2>
        {contacts.length ? contacts : 'No added contacts'}
      </div>
    )
  }
}

export default ContactList
