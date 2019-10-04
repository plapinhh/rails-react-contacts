import React from "react"
import ContactList from "./ContactList"
import ContactNew from "./ContactNew"

import { fetchContacts } from '../store/apiCalls'

class Application extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      errorStatus: null
    };
    this.addContact = this.addContact.bind(this)
    this.removeContact = this.removeContact.bind(this)
  }

  addContact(contact){
    this.setState({
      contacts: this.state.contacts.concat(contact)
    })
  }

  removeContact(contact){
    this.setState({
      contacts: this.state.contacts.filter((item) => item.id !== contact.id)
    })
  }

  async componentDidMount() {
    try {
      const data = await fetchContacts()
      this.setState({contacts: data})
    } catch(err) {
      this.setState({errorStatus: err.message})
    }
  }

  render(){
    return(
      <div>
        <h1>Contacts</h1>
        <ContactNew addContact={this.addContact}/>
        <ContactList contacts={this.state.contacts} removeContact={this.removeContact} />
        <p>{this.state.errorStatus}</p>
      </div>
    )
  }

}
export default Application