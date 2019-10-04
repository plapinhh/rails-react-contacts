import React from "react"

import ContactForm from "./ContactForm"

import { updateContact } from '../store/apiCalls'

class ContactEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errorStatus: null
    };
    this.persistContact = this.persistContact.bind(this)
  }

  async persistContact(_, attrs) {
    try {
      const contact = await updateContact(attrs)
      Object.assign(this.props.contact, contact)
      this.props.toggleEdit()
    } catch(err) {
      this.setState({errorStatus: err.message})
    }
  }
  
  render(){
    return(
      <div>
        <ContactForm 
          contact={this.props.contact} 
          cancelForm={this.props.toggleEdit} 
          persistContact={this.persistContact} 
        />
        {this.state.errorStatus}
      </div>
    )      
  }
}

export default ContactEdit