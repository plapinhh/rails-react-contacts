import React from "react"

import ContactForm from "./ContactForm"

import { createContact } from '../store/apiCalls'

class ContactNew extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errorStatus: null
    };
    this.persistContact = this.persistContact.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  resetForm(e){
    e.target.form.reset()
    this.setState({errorStatus: null})
  }

  async persistContact(form, attrs) {
    try {
      const contact = await createContact(attrs)
      this.props.addContact(contact)
      this.setState({errorStatus: null})
      form.reset();
    } catch(err) {
      this.setState({errorStatus: err.message})
    }
  }

  render(){
    return(
      <div>
        <h2>Create contact</h2>
        <ContactForm 
          persistContact={this.persistContact} 
          cancelForm={this.resetForm} 
          submitButtonText='Add' 
          resetButtonText='Reset' 
        />
        <p>{this.state.errorStatus}</p>
      </div>
    )
  }
}
export default ContactNew